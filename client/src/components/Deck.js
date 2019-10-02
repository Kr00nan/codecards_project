import React from 'react';
import axios from 'axios'
import { Header, Card, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

class Deck extends React.Component  {
  state = { deck: {}, cards: [], }

  componentDidMount() {
    const { id, } = this.props.match.params
    axios.get(`/api/decks/${id}`)
      .then(res => {
        this.setState({ deck: res.data, })
      })

    axios.get(`/api/decks/${id}/cards`)
      .then( res => {
        this.setState({ cards: res.data, })
      })
      .catch( err => {
        console.log(err)
      })
  }
 
  render() {
    const { deck, } = this.state
    return(
      <>
        <Header as="h1" textAlign="center">
          {deck.title}
        </Header>
        <Card.Group itemsPerRow={4}>
          {
            this.state.cards.map( card =>
              <Card 
                key={card.id} 
                color="grey" 
                image={card.question} 
                as={Link}
                to="/flashcard" // route subject to change
              />
            )
          }
        </Card.Group>
      </>
    )
  }
}

export default Deck
