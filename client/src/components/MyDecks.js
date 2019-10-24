import React from 'react'
import axios from 'axios'
import { Card, Header, Button, Form, Container, Grid, } from 'semantic-ui-react'
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
      <Container>
        <Header as="h1" textAlign="center" style={{margin: '20px 0 10px'}}>My Decks</Header>
        <Card.Group as={Grid}>
          {decks.map( deck => 
            <Grid.Column mobile={8} tablet={6} computer={4}>
              <Card 
                key={deck.id}
                as={Link} 
                to={`/decks/${deck.id}`}
                color="grey"
                style={styles.card}
              >
                <Card.Header>{deck.title}</Card.Header>
              </Card>
            </Grid.Column>
          )}
          <Grid.Column mobile={8} tablet={5} computer={4}>
            <Card 
              as={Link}
              to={`/focus_deck`}
              color="grey"
              style={styles.card}
            >
              <Card.Header>Focus Deck</Card.Header>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={8} tablet={6} computer={4}>
            <Card style={styles.card} color="grey">
              <Button color="blue" onClick={this.toggleForm}>{ showForm ? "Close" : "Create New Deck"}</Button>
              { showForm &&
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input 
                    label="Deck Name"
                    placeholder="10 char limit..."
                    name="title"
                    value={newDeck.title}
                    onChange={this.handleChange}
                    maxLength="10"
                    required
                  />
                  <Form.Button color="blue">Submit</Form.Button>
                </Form>
              }
            </Card>
          </Grid.Column>
        </Card.Group>
      </Container>
    )
  }
}

const styles = {
  card: {
    padding: '16.625px', 
    borderRadius: '16.625px', 
    height: '335px',
    fontSize: '28px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ebeced'
  },
}

export default MyDecks