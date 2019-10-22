import React from 'react'
import { Menu, Card, Button, } from 'semantic-ui-react'
import axios from 'axios'
import { Link, } from 'react-router-dom'

class Study extends React.Component {
  state = { 
    decks: [], 
    activeDeck: '', 
    cards: [], 
    started: false, 
    cardIndex: 0, 
    showFront: true, 
    done: false,
    deckLink: '/',
  }

  componentDidMount() {
    axios.get('/api/decks')
      .then( res => {
        this.setState({ decks: res.data, })
      })
  }

  handleDeckClick = (id, title) => {
    this.setState({ activeDeck: title, started: false, showFront: true, cardIndex: 0, done: false, })
    if (id === 0) {
      this.setState({ deckLink: 'focus_deck', })
      axios.get('/api/focus')
        .then( res => this.setState({ cards: res.data, }) )
    } else {
      this.setState({ deckLink: `decks/${id}`, })
      axios.get(`/api/decks/${id}/shuffled_cards`)
        .then( res => this.setState({ cards: res.data, }) )
    }
  }

  handleStartClick = () => this.setState({ started: !this.state.started, })

  handleYesClick = () => {
    const { cardIndex, cards, } = this.state 
    if (cardIndex + 1 !== cards.length) {
      this.setState({ showFront: true, cardIndex: cardIndex + 1, })
    } else {
      this.setState({ done: true, })
    }
  }

  handleNoClick = () => {
    const { cardIndex, cards, } = this.state 
    var removed = cards.splice(cardIndex, 1)
    cards.push(removed[0])
    this.setState({ cards: cards, showFront: true, })
  }

  render() {
    const { decks, activeDeck, cards, started, showFront, cardIndex, done, deckLink } = this.state
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
            <h2>Choose a deck that has cards</h2>
          :
            <>
              <h1><Link to={deckLink}>{activeDeck}</Link></h1>
              { started ?
                <>
                  { done ?
                    <h2>You completed this deck!</h2>
                  :
                    <>
                      <p>Cards: {cardIndex} of {cards.length}</p>
                      <Card style={styles.card}>
                        {showFront ? 
                          <>
                            Q: {cards[cardIndex].question}
                          </>
                        : 
                          <>
                            A: {cards[cardIndex].answer}
                            <pre style={{fontSize: '12px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                              {cards[cardIndex].extra}
                            </pre>
                          </>
                        }
                      </Card>
                      {showFront ? 
                        <Button color="blue" onClick={() => this.setState({ showFront: false, })} style={{width: '525px'}}>
                          Reveal Answer
                        </Button>
                      :
                        <Button.Group>
                          <Button color="orange" onClick={this.handleNoClick} style={{width: '262.5px'}}>
                            Didn't Get It
                          </Button>
                          <Button color="green"onClick={this.handleYesClick} style={{width: '262.5px'}}>
                            Got It!
                          </Button>
                        </Button.Group>
                      }
                    </>
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
    padding: '37.5px',
    borderRadius: '18px',
    height: '375px',
    width: '525px',
    fontSize: '18px',
  },
}

export default Study