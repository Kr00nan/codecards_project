import React from 'react'
import axios from 'axios'
import { Card, Header, Button, Form, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

class MyDecks extends React.Component {
  state = { decks: [], showForm: false, newDeck: { title: "", }}

  componentDidMount() {
    axios.get('/api/decks')
      .then( res => {
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
        { decks.length === 0 ? 
          <div>You have no decks yet</div> 
        :
          <Card.Group>
            { decks.map( deck => 
              <Card key={deck.id} as={Link} to={`/decks/${deck.id}`}>
                <Card.Header>{deck.title}</Card.Header>
              </Card>
            )}
          </Card.Group>
        }
        <Button onClick={this.toggleForm}>Create New Deck</Button>
        { showForm &&
          <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              label="Deck Name"
              placeholder="Deck Name"
              name="title"
              value={newDeck.title}
              onChange={this.handleChange}
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        }
      </>
    )
  }
}

export default MyDecks