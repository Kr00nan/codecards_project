import React from 'react'
import { Menu, Card, } from 'semantic-ui-react'
import Searchbar from './Searchbar'
import axios from 'axios'
import { Link, } from 'react-router-dom'

class Browse extends React.Component {
  state = { activeItem: 'decks', decks: [], cards: [], }

  componentDidMount() {
    axios.get('/api/public_decks')
      .then( res => this.setState({ decks: res.data, }))
    axios.get('/api/public_cards')
      .then( res => this.setState({ cards: res.data, }))
  }

  handleItemClick = (e, {name}) => this.setState({ activeItem: name })

  render() {
    const { activeItem, decks, cards, } = this.state
    return (
      <>
        <Searchbar position='center' /> 
        <Menu fluid widths={2}>
          <Menu.Item
            name='decks'
            active={activeItem === 'decks'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='cards'
            active={activeItem === 'cards'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Card.Group itemsPerRow={4}>
          {(activeItem === 'decks') &&
            decks.map( deck =>
              <Card 
                key={deck.id}
                as={Link} 
                to={`/decks/${deck.id}`}
                color="grey"
                style={styles.deck}
              >
                {deck.title}
              </Card>
            )
          }
          {(activeItem === 'cards') &&
            cards.map( card =>
              <Card 
                key={card.id}
                style={styles.card}
              >
                {card.question}
              </Card>
            )
          }
        </Card.Group>
      </>
    )
  }
}

const styles = {
  deck: {
    padding: '16.625px', 
    borderRadius: '16.625px', 
    height: '332.5px',
    fontSize: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  card: {
    padding: '16.625px',
    borderRadius: '16.625px',
    height: '332.5px',
    fontSize: '16.625px',
  },
}

export default Browse