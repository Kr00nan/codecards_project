import React from 'react';
import axios from 'axios'
import { Header, Card, Button, Form, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'
import { AuthConsumer, } from '../providers/AuthProvider'

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
    const { deck, cards } = this.state
    return(
      <>
        <Header as="h1" textAlign="center">
          {deck.title}
        </Header>
        { cards.length === 0 ? 
          <div>This deck has no cards yet</div> 
        :
          <Card.Group itemsPerRow={4}>
            {
              cards.map( card =>
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
