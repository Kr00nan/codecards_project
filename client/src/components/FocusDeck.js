import React from 'react';
import axios from 'axios'
import { Header, Card, Button, } from 'semantic-ui-react'

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
                <Card
                  key={card.rc_id}
                  style={styles.card}
                >
                  <div style={styles.qna}>Q</div>
                  {card.question}
                  <a href={`/decks/${card.deck_id}/cards/${card.id}`}>View Card</a>
                  <Button onClick={() => this.removeReviewCard(card.rc_id)}>Remove From Deck</Button>
                </Card>
              )}
            </>
          }
        </Card.Group>
      </>
    )
  }
}

const styles = {
  card: {
    padding: '25px',
    borderRadius: '18px',
    height: '335px',
    width: '250px',
    fontSize: '18px',
  },
  qna: {
    position: 'absolute',
    left: '12px',
    top: '8px',
    fontSize: '14px',
  }
}

export default FocusDeck
