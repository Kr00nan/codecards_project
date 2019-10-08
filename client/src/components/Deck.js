import React from 'react';
import axios from 'axios'
import { Header, Card, Button, Form, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'
import { AuthConsumer, } from '../providers/AuthProvider'

class Deck extends React.Component {
  state = { deck: {}, cards: [], showForm: false, question: '', answer: '' }

  componentDidMount() {
    const { id, } = this.props.match.params
    axios.get(`/api/decks/${id}`)
      .then(res => {
        this.setState({ deck: res.data, })
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

  render() {
    const { deck, cards, showForm, question, answer } = this.state
    return (
      <>
        <Header as="h1" textAlign="center">
          {deck.title}
        </Header>
        {cards.length === 0 ?
          <div>This deck has no cards yet</div>
          :
          <Card.Group itemsPerRow={4}>
            {
              cards.map(card =>
                <Card
                  key={card.id}
                  color="grey"
                  as={Link}
                  to={`/decks/${deck.id}/cards/${card.id}`}
                  style={styles.card}
                >
                  {card.question}
                </Card>
              )
            }
          </Card.Group>
        }
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
      </>
    )
  }
}

const styles = {
  card: {
    padding: '16.625px',
    borderRadius: '16.625px',
    height: '332.5px',
    fontSize: '16.625px',
  },
}

export default Deck
