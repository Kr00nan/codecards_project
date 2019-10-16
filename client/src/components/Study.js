import React from 'react'
import { Menu, Card, Button, } from 'semantic-ui-react'
import axios from 'axios'

class Study extends React.Component {
  state = { decks: [], activeDeck: '', cards: [], started: false, }

  componentDidMount() {
    axios.get('/api/decks')
      .then( res => {
        this.setState({ decks: res.data, })
      })
  }

  handleDeckClick = (id, title) => {
    this.setState({ activeDeck: title, started: false, })
    if (id === 0) {
      axios.get('/api/review_cards')
        .then( res => this.setState({ cards: res.data, }) )
    } else {
      axios.get(`/api/decks/${id}/cards`)
        .then( res => this.setState({ cards: res.data, }) )
    }
  }

  handleStartClick = () => this.setState({ started: !this.state.started, })

  render() {
    const { decks, activeDeck, cards, started, } = this.state
    return (
      <div style={{display: 'flex', flexDirection: 'horizontal'}}>
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
        <div>
          <h1>{activeDeck}</h1>
          { (cards.length !== 0) &&
            <>
              { started ?
                <>
                  <h4>Card: 1 of {cards.length}</h4>
                  <Card>
                    {cards[0].question}
                  </Card>
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
  side: {
    backgroundColor: '#f0f0f0',
    position: 'relative',
    right: '77px',
    width: '335px',
    height: '552px',
    borderRadius: '0',
    margin: '0px'
  }
}

export default Study