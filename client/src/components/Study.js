import React from 'react'
import { Menu, Card, Button, } from 'semantic-ui-react'
import axios from 'axios'

class Study extends React.Component {
  state = { decks: [], activeDeck: '', cards: [], started: false, cardIndex: 0, showFront: true, }

  componentDidMount() {
    axios.get('/api/decks')
      .then( res => {
        this.setState({ decks: res.data, })
      })
  }

  handleDeckClick = (id, title) => {
    this.setState({ activeDeck: title, started: false, showFront: true, cardIndex: 0, })
    if (id === 0) {
      axios.get('/api/review_cards')
        .then( res => this.setState({ cards: res.data, }) )
    } else {
      axios.get(`/api/decks/${id}/cards`)
        .then( res => this.setState({ cards: res.data, }) )
    }
  }

  handleStartClick = () => this.setState({ started: !this.state.started, })

  handleNextClick = () => {
    const { cardIndex, cards, } = this.state 
    if (cardIndex + 1 !== cards.length) {
      this.setState({ showFront: true, cardIndex: cardIndex + 1, })
    }
  }

  render() {
    const { decks, activeDeck, cards, started, showFront, cardIndex, } = this.state
    return (
      <div style={styles.container}>
        <Menu as='div' vertical style={styles.side}>
          <Menu.Header as="h1" content="Decks" />
          <Menu.Item
            name='HTML'
            active={activeDeck === 'HTML'}
            onClick={() => this.handleDeckClick(1, 'HTML')}
          />
          <Menu.Item
            name='CSS'
            active={activeDeck === 'CSS'}
            onClick={() => this.handleDeckClick(2, 'CSS')}
          />
          <Menu.Item
            name='RUBY'
            active={activeDeck === 'RUBY'}
            onClick={() => this.handleDeckClick(3, 'RUBY')}            
          />
          <Menu.Item
            name='JS'
            active={activeDeck === 'JS'}
            onClick={() => this.handleDeckClick(4, 'JS')}
          />
          <Menu.Item
            name='Focus Deck'
            active={activeDeck === 'Focus Deck'}
            onClick={() => this.handleDeckClick(0, 'Focus Deck')}
          />
          {decks.map( deck => 
            <Menu.Item
              key={deck.id}
              name={deck.title}
              active={activeDeck === deck.title}
              onClick={() => this.handleDeckClick(deck.id, deck.title)}
            />
          )}
        </Menu>
        <div style={{padding: '15px 200px'}}>
          { cards.length === 0 ?
            <p>Choose a deck</p>
          :
            <>
              <h1>{activeDeck}</h1>
              { started ?
                <>
                  <p>Card: {cardIndex + 1} of {cards.length}</p>
                  <Card style={styles.card}>
                    {showFront ? 
                      <>
                        Q: {cards[cardIndex].question}
                      </>
                    : 
                      <>
                        A: {cards[cardIndex].answer}
                        <pre>{cards[cardIndex].extra}</pre>
                      </>
                    }
                  </Card>
                  { showFront ? 
                    <Button onClick={() => this.setState({ showFront: false, })} style={{width: '525px'}}>
                      Reveal Answer
                    </Button>
                  :
                    <Button onClick={this.handleNextClick} style={{width: '525px'}}>
                      Next Question
                    </Button>
                  }
                </>
              :
                <Button onClick={this.handleStartClick}>Start</Button>
              }
            </>
          }
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'horizontal',
    position: 'relative',
    right: '77px',
    width: '1280px'
  },
  side: {
    backgroundColor: '#f0f0f0',
    width: '335px',
    height: '552px',
    borderRadius: '0',
    margin: '0px'
  },
  card: {
    padding: '25px',
    borderRadius: '18px',
    height: '375px',
    width: '525px',
    fontSize: '18px',
  },
}

export default Study