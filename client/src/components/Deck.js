import React from 'react';
import axios from 'axios'
import { Header, Card, Button, Form, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'
import { AuthConsumer, } from '../providers/AuthProvider'

class Deck extends React.Component {
  state = { 
    deck: {}, 
    cards: [], 
    showForm: false, 
    question: '', 
    answer: '', 
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
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { question, answer } = this.state;
    axios.post(`/api/decks/${this.state.deck.id}/cards`, { question, answer })
      .then(res => {
        this.props.history.push(`/decks/${res.data.id}`)
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
    axios.put(`/api/decks/${this.state.deck.id}`, this.state.editDeck)
      .then( res => {
        this.setState({ deck: res.data, })
        this.toggleEditDeck()
      })
  }

  handleDelete = () => {
    axios.delete(`/api/decks/${this.state.deck.id}`)
      .then( this.props.history.push('/my_decks') )
  }
 
  editForm = () => {
    const { editDeck, } = this.state
    return (
      <Form onSubmit={this.handleUpdate}>
        <Form.Input 
          width={4}
          label="Deck Name"
          placeholder="Deck Name"
          name="title"
          value={editDeck.title}
          onChange={this.handleTitleChange}
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

  addCardCard = () => {
    const { showForm, question, answer, } = this.state
    return (
      <Card style={styles.card}>
        <Button onClick={this.toggleForm}>Add Card</Button>
        {showForm &&
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label="Question"
                placeholder="Type question here..."
                name="question"
                value={question}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Answer"
                placeholder="Type answer here..."
                name="answer"
                value={answer}
                onChange={this.handleChange}
              />
              <Form.Button>Submit</Form.Button>
            </Form>
          }
      </Card>
    )
  }

  render() {
    const { deck, cards, showEdit, } = this.state
    const { auth, admin_authenticated, } = this.props
    return(
      <>
        <br />
        { showEdit ?
          <>
            {this.editForm()}
            <br />
            <Button color="red" onClick={this.handleDelete}>Delete Deck</Button>
          </>
        :
          <Header as="h1" textAlign="center">{deck.title}</Header>
        }
        <br />
        { (auth.user.id === deck.user_id || admin_authenticated) &&
          <Button onClick={this.toggleEditDeck}>
            {showEdit ? "Close Edit" : "Edit Deck"}
          </Button>
          
        }
        <hr />
        <Card.Group itemsPerRow={4}>
          { (auth.user.id === deck.user_id || admin_authenticated) && this.addCardCard()}
          { cards.length === 0 ? 
            <div>This deck has no cards yet</div> 
          : 
            <>
              { cards.map(card =>
                <Card
                  key={card.id}
                  color="grey"
                  as={Link}
                  to={`/decks/${deck.id}/cards/${card.id}`}
                  style={styles.card}
                >
                  {card.question}
                </Card>
              )}
            </>
          }
        </Card.Group>
      </>
    )
  }
}

const ConnectedDeck = (props) => (
  <AuthConsumer>
    { auth =>
      <Deck 
        { ...props } 
        auth={auth} 
        admin_authenticated={auth.user.admin === true} 
      />
    }
  </AuthConsumer>
)

const styles = {
  card: {
    padding: '16.625px',
    borderRadius: '16.625px',
    height: '332.5px',
    fontSize: '16.625px',
  },
}

export default ConnectedDeck
