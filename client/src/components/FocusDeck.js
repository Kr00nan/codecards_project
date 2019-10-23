import React from 'react';
import axios from 'axios'
import { Header, Card, Container, } from 'semantic-ui-react'
import DeckCard from './DeckCard'

class FocusDeck extends React.Component {
  state = { cards:[], }

  componentDidMount() {
    this.getCards()
  }

  removeReviewCard = (id) => {
    axios.delete(`/api/review_cards/${id}`)
      .then(res => this.getCards())
  }

  getCards = () => {
    axios.get('/api/review_cards')
      .then( res => this.setState({ cards: res.data, }) )
  }

  render() {
    const { cards, } = this.state
    return (
      <Container>
        <br />
        <Header as="h1" textAlign="center">Focus Deck</Header>
        <br />
        <hr />
        {cards.length === 0 ?
          <Header as='h3' textAlign='center'>You haven't saved any cards to your focus deck yet</Header>
          :
          <Card.Group itemsPerRow={4}>
            {cards.map(card =>
              <DeckCard
                key={card.rc_id}
                {...card}
                removeReviewCard={this.removeReviewCard}
                push={this.props.history.push}
              />
            )}
          </Card.Group>
        }
      </Container>
    )
  }
}

export default FocusDeck
