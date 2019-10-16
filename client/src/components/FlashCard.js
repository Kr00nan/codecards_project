import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Card } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';
import { AuthConsumer, } from '../providers/AuthProvider';

class FlashCard extends React.Component {
  state = {
    cards: [],
    card: {},
    owner_id: "",
    showForm: false,
    question: "",
    answer: "",
    extra: "",
  }

  componentDidMount() {
    this.getCard();

    axios.get(`/api/decks/${this.props.match.params.deck_id}`)
      .then(res => this.setState({ owner_id: res.data.user_id, }))

    const { deck_id, } = this.props.match.params
    axios.get(`/api/decks/${deck_id}/cards`)
      .then(res => {
        this.setState({ cards: res.data, })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate() {
    if (parseInt(this.props.match.params.id) !== this.state.card.id) {
      this.getCard();
    }
  }

  toggleShowForm = () => this.setState({ showForm: !this.state.showForm, })

  handleDelete = () => {
    const { deck_id, id } = this.props.match.params;
    axios.delete(`/api/decks/${deck_id}/cards/${id}`)
      .then(res => {
        this.props.history.push(`/decks/${deck_id}`);
      })
  }

  getCard = () => {
    const { deck_id, id } = this.props.match.params;
    axios.get(`/api/decks/${deck_id}/cards/${id}`)
      .then(res => {
        this.setState(
          { card: res.data, question: res.data.question, answer: res.data.answer, extra: res.data.extra }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { card: { deck_id, id, }, question, answer, extra } = this.state;
    axios.put(`/api/decks/${deck_id}/cards/${id}`, { question, answer, extra })
      .then(res => {
        this.setState({ card: res.data, })
        this.toggleShowForm()
      })
      .catch(err => {
        console.log(err)
      })
  }

  navButton = (e) => {
    const { card: { id, deck_id }, cards } = this.state;
    let index = cards.findIndex(element => element.id === id);
    let pointer;
    switch (e.target.innerHTML) {
      case 'Prev. Card':
        index === 0 ? index = cards.length - 1 : index--;
        pointer = cards[index];
        break;
      case 'Next Card':
        index === cards.length - 1 ? index = 0 : index++;
        pointer = cards[index];
        break;
      default:
        pointer = cards[index];
    }
    this.props.history.push(`/decks/${deck_id}/cards/${pointer.id}`);
  }

  makeFocusCard = (card_id) => {
    axios.post('/api/review_cards', { card_id })
      .then(res => {
        if (res.data.message) {
          console.log(res.data.message)
        }
      })
  }

  render() {
    const { card: { id, question, answer, extra, deck_id }, showForm } = this.state;
    const { auth, admin_authenticated, } = this.props;

    return (
      <>
        <Link to={`/decks/${deck_id}`}>Back to deck</Link>
        <br />
        <br />
        <div style={{ width: '375px' }}>
          <div>
            <Flippy
              flipOnClick={true}
              flipDirection="vertical"
              ref={(r) => this.flippy = r}
            >
              <FrontSide style={styles.card}>
                <div style={styles.qna}>Q</div>
                {question}
              </FrontSide>
              <BackSide style={styles.card}>
                <div style={styles.qna}>A</div>
                {answer}
                <pre style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }}>{extra}</pre>
              </BackSide>
            </Flippy>
            <Card style={styles.btnSection}>
              <Card.Content>
                <div className='ui three buttons'>
                  {(auth.user.id === this.state.owner_id || admin_authenticated) &&
                    <>
                      <Button onClick={this.toggleShowForm} style={styles.firstBtn}>{showForm ? 'Cancel' : 'Edit'}</Button>
                      <Button onClick={this.handleDelete} color='red'>Delete</Button>
                      <Button onClick={() => this.makeFocusCard(id)} color='yellow' style={styles.lastBtn}>Focus</Button>
                    </>
                  }
                </div>
              </Card.Content>
            </Card>

            <Button onClick={this.navButton}>Prev. Card</Button>
            <Button onClick={this.navButton}>Next Card</Button>

            {showForm ?
              (
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input
                    label="Question"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                  />

                  <Form.Input
                    label="Answer"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                  />

                  <Form.TextArea
                    label="Extra"
                    name="extra"
                    value={this.state.extra}
                    onChange={this.handleChange}
                  />

                  <Form.Button>Submit</Form.Button>
                </Form>
              )
              :
              ""
            }
          </div>
        </div>
      </>
    );
  };
};

const ConnectedFlashCard = (props) => (
  <AuthConsumer>
    {auth =>
      <FlashCard
        {...props}
        auth={auth}
        admin_authenticated={auth.user.admin === true}
      />
    }
  </AuthConsumer>
)

const styles = {
  left: {
    position: "fixed",
    left: "0",
    top: "50%",
  },
  right: {
    position: 'fixed',
    right: '0',
    top: '50%'
  },
  card: {
    padding: '37.5px',
    borderRadius: '27px 27px 0px 0px',
    width: '375px',
    height: '425px',
    fontSize: '27px',
    lineHeight: 'normal',
  },
  qna: {
    position: 'absolute',
    left: '18px',
    top: '12px',
    fontSize: '21px',
  },
  btnSection: {
    width: '375px',
    height: '60px',
    borderRadius: '0px 0px 27px 27px',
    boxShadow: '0px 4px 7px lightgrey',
    marginTop: '0px'
  },
  firstBtn: {
    borderRadius: '0px 0px 0px 27px',
  },
  lastBtn: {
    borderRadius: '0px 0px 27px 0px'
  }
}

export default ConnectedFlashCard;