import React from 'react';
import axios from 'axios'
import { Header, Card, } from 'semantic-ui-react'
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
      <>
        <br />
        <Header as="h1" textAlign="center">Focus Deck</Header>
        <br />
        <hr />
        <Card.Group itemsPerRow={4}>
          {cards.length === 0 ?
            <div>This deck has no cards yet</div>
            :
            <>
              {cards.map(card =>
                <DeckCard
                  key={card.rc_id}
                  {...card}
                  removeReviewCard={this.removeReviewCard}
                  push={this.props.history.push}
                />
              )}
            </>
          }
        </Card.Group>
      </>
    )
  }
}

export default FocusDeck
