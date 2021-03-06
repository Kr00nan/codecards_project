import React from 'react'
import { Menu, Card, Button, Image } from 'semantic-ui-react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import beaker64 from '../images/beaker64.png';


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
      .then(res => {
        this.setState({ decks: res.data, })
      })
  }

  handleDeckClick = (id, title) => {
    this.setState({ activeDeck: title, started: false, showFront: true, cardIndex: 0, done: false, })
    if (id === 0) {
      this.setState({ deckLink: 'focus_deck', })
      axios.get('/api/focus')
        .then(res => this.setState({ cards: res.data, }))
    } else {
      this.setState({ deckLink: `decks/${id}`, })
      axios.get(`/api/decks/${id}/shuffled_cards`)
        .then(res => this.setState({ cards: res.data, }))
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
          <Menu.Header as="h1" content="Decks" style={styles.links}/>
          <Menu.Item
            name='HTML'
            color="green"
            active={activeDeck === 'HTML'}
            onClick={() => this.handleDeckClick(1, 'HTML')}
            style={styles.links}
            />
          <Menu.Item
            name='CSS'
            color="blue"
            active={activeDeck === 'CSS'}
            onClick={() => this.handleDeckClick(2, 'CSS')}
            style={styles.links}
            />
          <Menu.Item
            name='RUBY'
            color="red"
            active={activeDeck === 'RUBY'}
            onClick={() => this.handleDeckClick(3, 'RUBY')}
            style={styles.links}
            />
          <Menu.Item
            name='JS'
            color="yellow"
            active={activeDeck === 'JS'}
            onClick={() => this.handleDeckClick(4, 'JS')}
            style={styles.links}
            />
          <Menu.Item
            name='Focus Deck'
            active={activeDeck === 'Focus Deck'}
            onClick={() => this.handleDeckClick(0, 'Focus Deck')}
            style={styles.links}
            />
          {decks.map(deck =>
            <Menu.Item
            key={deck.id}
            name={deck.title}
            active={activeDeck === deck.title}
            onClick={() => this.handleDeckClick(deck.id, deck.title)}
            style={styles.links}
            />
            )}
            <br />
            <Image 
            src ={beaker64} 
            as='a'
            size='huge'/>
        </Menu>
        <div style={{ width: '80%', display: 'flex', justifyContent: 'center', }}>
          <div style={{ color: '#27292b', width: '80%', maxWidth: '550px'}}>
            {cards.length === 0 ?
              <h2 style={styles.font}>Choose a deck that has cards</h2>
              :
              <>
                <h1 style={styles.font}><Link to={deckLink}>{activeDeck} </Link></h1>
                {started ?
                  <>
                    {done ?
                      <h2 style={styles.font}>You completed this deck!</h2>
                      :
                      <>
                        <p style={styles.font}>Cards: {cardIndex} of {cards.length}</p>
                        <Card style={styles.card}>
                          {showFront ?
                            <>
                              Q: {cards[cardIndex].question}
                            </>
                            :
                            <>
                              A: {cards[cardIndex].answer}
                              <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                {cards[cardIndex].extra}
                              </pre>
                            </>
                          }
                        </Card>
                        {showFront ?
                          <Button color="teal" onClick={() => this.setState({ showFront: false, })} style={{ width: '100%' }}>
                            Reveal Answer
                        </Button>
                          :
                          <Button.Group style={{ width: '100%', }}>
                            <Button color="yellow" onClick={this.handleNoClick}>
                              Didn't Get It
                          </Button>
                            <Button color="green" onClick={this.handleYesClick}>
                              Got It!
                          </Button>
                          </Button.Group>
                        }
                      </>
                    }
                  </>
                  :
                  <Button color="blue" onClick={this.handleStartClick}>Start</Button>
                }
              </>
            }
          </div>
        </div>
      </div>
    )
  }
}


const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch'
  },
  side: {
    paddingLeft: "2%",
    backgroundColor: '#6E54A3',
    width: '20%',
    borderRadius: '0',
    margin: '0px'
  },
  links: {
    color: '#fff',
    fontSize: '1.2rem',
    letterSpacing: '3px',
    paddingLeft: '1px',
  },
  card: {
    padding: '37.5px',
    borderRadius: '18px',
    height: '375px',
    width: '100%',
    color:'#27292b',
    fontSize: '18px',
    letterSpacing: '3px',
    backgroundColor: '#ebeced',
  },
  font: {
    color: '#232a36',
    fontSize: '1.2rem',
    letterSpacing: '3px'
  },
}

export default Study