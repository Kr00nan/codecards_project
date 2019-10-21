import React from 'react'
import axios from 'axios'
import { Card, Header, Button, Form, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

class MyDecks extends React.Component {
  state = { decks: [], showForm: false, newDeck: { title: "", }, }

  componentDidMount() {
    axios.get('/api/decks')
      .then( res => {
        this.setState({ decks: res.data, })
      })
  }

  componentDidUpdate() {
    axios.get('/api/decks')
    .then( res => {
      if (res.data.length !== this.state.decks.length)
        this.setState({ decks: res.data, })
    })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, })
  }

  handleChange = (e) => {
    this.setState({ ...this.state, newDeck: { title: e.target.value, }, })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/decks', this.state.newDeck)
      .then( res => {
        this.props.history.push(`/decks/${res.data.id}`)
      })
  }

  render() {
    const { decks, showForm, newDeck } = this.state
    return(
      <>
        <Header as="h1">My Decks</Header>
        <Card.Group itemsPerRow={4}>
          { decks.length === 0 ? 
            <div>You have no decks yet</div> 
          :
            decks.map( deck => 
              <Card 
                key={deck.id}
                as={Link} 
                to={`/decks/${deck.id}`}
                color="grey"
                style={styles.card}
              >
                <Card.Header>{deck.title}</Card.Header>
              </Card>
            )
          }
          <Card 
            as={Link}
            to={`/focus_deck`}
            color="grey"
            style={styles.card}
          >
            <Card.Header>Focus Deck</Card.Header>
          </Card>
        </Card.Group>
        <Button onClick={this.toggleForm}>{ showForm ? "Close" : "Create New Deck"}</Button>
        { showForm &&
          <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              width={4}
              label="Deck Name"
              placeholder="10 char limit..."
              name="title"
              value={newDeck.title}
              onChange={this.handleChange}
              maxLength="10"
              required
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
    fontSize: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
}

export default MyDecks