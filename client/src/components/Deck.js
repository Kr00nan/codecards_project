import React from 'react';
import axios from 'axios'
import { Header, Card, Button, Form, } from 'semantic-ui-react'
import { AuthConsumer, } from '../providers/AuthProvider'
import DeckCard from './DeckCard'

class Deck extends React.Component {
  state = {
    deck: {},
    cards: [],
    showForm: false,
    question: '',
    answer: '',
    extra: '',
    showEdit: false,
    editDeck: {},
  }

  componentDidMount() {
    const { id, } = this.props.match.params
    axios.get(`/api/decks/${id}`)
      .then(res => {
        this.setState({ deck: res.data, })
        this.setState({ editDeck: res.data, })
      })

    axios.get(`/api/decks/${id}/cards`)
      .then(res => {
        this.setState({ cards: res.data, })
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, })
    this.setState({ question: '', answer: '', extra: '' });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleAddCard = (e) => {
    e.preventDefault()
    const { question, answer, extra, cards } = this.state;
    axios.post(`/api/decks/${this.state.deck.id}/cards`, { question, answer, extra })
      .then(res => {
        this.setState({ cards: [...cards, res.data] });
        this.toggleForm();
      })
  }

  toggleEditDeck = () => this.setState({ showEdit: !this.state.showEdit, })

  handleTitleChange = (e) => this.setState({ editDeck: { ...this.state.editDeck, title: e.target.value, }, })

  handlePublicChange = () => {
    const { editDeck, } = this.state
    this.setState({ editDeck: { ...editDeck, public: !editDeck.public, }, })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    const { deck, editDeck } = this.state;
    axios.put(`/api/decks/${deck.id}`, editDeck)
      .then(res => {
        this.setState({ deck: res.data, });
        this.toggleEditDeck();
      })
  }

  handleDelete = () => {
    axios.delete(`/api/decks/${this.state.deck.id}`)
      .then(this.props.history.push('/my_decks'))
  }

  editForm = () => {
    const { editDeck, } = this.state
    return (
      <Form onSubmit={this.handleUpdate}>
        <Form.Input
          width={4}
          label="Deck Name"
          placeholder="10 char limit..."
          name="title"
          value={editDeck.title}
          onChange={this.handleTitleChange}
          maxLength="10"
          required
        />
        <Form.Checkbox
          label="Public"
          checked={editDeck.public}
          onChange={this.handlePublicChange}
        />
        <Form.Button>Save Changes</Form.Button>
      </Form>
    )
  }

  addCardForm = () => {
    const { showForm, question, answer, extra } = this.state
    return (
      <Card style={styles.card}>
        <Button onClick={this.toggleForm}>{showForm ? 'Nevermind' : 'Add Card'}</Button>
        {showForm &&
          <Form onSubmit={this.handleAddCard}>
            <Form.Input
              label="Question"
              placeholder="Type question here..."
              name="question"
              value={question}
              required
              onChange={this.handleChange}
            />
            <Form.Input
              label="Answer"
              placeholder="Type answer here..."
              name="answer"
              value={answer}
              required
              onChange={this.handleChange}
            />
            <Form.Input
              label="Extra Content"
              placeholder="code snippets, examples, etc..."
              name="extra"
              value={extra}
              onChange={this.handleChange}
            />
            <Form.Button>Add Card</Form.Button>
          </Form>
        }
      </Card>
    )
  }

  render() {
    const { deck, cards, showEdit, } = this.state
    const { auth, admin_authenticated, } = this.props
    return (
      <>
        <br />
        {showEdit ?
          <>
            {this.editForm()}
            <br />
            <Button color="red" onClick={this.handleDelete}>Delete Deck</Button>
          </>
          :
          <Header as="h1" textAlign="center">{deck.title}</Header>
        }
        <br />
        {(auth.user.id === deck.user_id || admin_authenticated) &&
          <Button onClick={this.toggleEditDeck}>
            {showEdit ? "Close Edit" : "Edit Deck"}
          </Button>

        }
        <hr />
        <Card.Group itemsPerRow={4}>
          {cards.length === 0 ?
            <div style={{width: '264px', fontSize: '18px', padding: '25px'}}>This deck has no cards yet...</div>
            :
            <>
              {cards.map(card =>
                <DeckCard
                  key={card.id}
                  {...card}
                  title={deck.title}
                  push={this.props.history.push}
                />
              )}
            </>
          }
          {(auth.user.id === deck.user_id || admin_authenticated) && this.addCardForm()}
        </Card.Group>
      </>
    )
  }
}

const ConnectedDeck = (props) => (
  <AuthConsumer>
    {auth =>
      <Deck
        {...props}
        auth={auth}
        admin_authenticated={auth.user.admin === true}
      />
    }
  </AuthConsumer>
)

const styles = {
  card: {
    margin: '6.5px !important',
    padding: '25px',
    borderRadius: '18px',
    height: '335px',
    width: '250px',
    fontSize: '18px',
  }
}

export default ConnectedDeck
