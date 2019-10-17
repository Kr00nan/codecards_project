import React from 'react'
import { Menu, Card, } from 'semantic-ui-react'
import Searchbar from './Searchbar'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import Flippy, { FrontSide, BackSide, } from 'react-flippy'

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
                style={{margin: '12px'}}
                as={Flippy}
                flipOnClick={true}
              >
                <FrontSide style={styles.card}>
                  <div style={styles.qna}>Q</div>
                  {card.question}
                  <a href={`/decks/${card.deck_id}`} style={styles.title}>{card.title}</a>
                </FrontSide>
                <BackSide style={styles.card}>
                  <div style={styles.qna}>A</div>
                  {card.answer}
                  <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                    {card.extra}
                  </pre>
                  <a href={`/decks/${card.deck_id}`} style={styles.title}>{card.title}</a>
                </BackSide>
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
    borderRadius: '18px', 
    height: '335px',
    fontSize: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  card: {
    margin: '6.5px',
    padding: '25px',
    borderRadius: '18px',
    height: '335px',
    width: '250px',
    fontSize: '18px',
  },
  title: {
    position: 'absolute',
    bottom: '18px',
    right: '18px',
    fontSize: '14px',
  },
  qna: {
    position: 'absolute',
    left: '12px',
    top: '8px',
    fontSize: '14px',
  }
}

export default Browse