import React from 'react'
import { Menu, Card, Input, Container, } from 'semantic-ui-react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import DeckCard from './DeckCard'

class Browse extends React.Component {
  state = { activeItem: 'decks', decks: [], cards: [], search: "", }

  componentDidMount() {
    axios.get('/api/public_decks')
      .then( res => this.setState({ decks: res.data, }))
    axios.get('/api/public_cards')
      .then( res => this.setState({ cards: res.data, }))
  }

  handleItemClick = (e, {name}) => this.setState({ activeItem: name })

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }


  render() {
    let filteredCards = this.state.cards.filter(
      (card)=>{
        return card.question.indexOf(
          this.state.search)
        !== -1;
      }
    );
    const { activeItem, decks, } = this.state
    return (
      <Container>
        <br />
        <Input 
          type="text"
          style={styles.search}
          style={styles.font}
          placeholder="search cards..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <br />
        <Menu inverted fluid widths={2}>
          <Menu.Item
            name='decks'
            color="violet"
            style={styles.font}
            active={activeItem === 'decks'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='cards'
            color="violet"
            style={styles.font}
            active={activeItem === 'cards'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Card.Group itemsPerRow={4} style={styles.font}>
          {(activeItem === 'decks') &&
            decks.map( deck =>
              <Card 
                key={deck.id}
                as={Link} 
                to={`/decks/${deck.id}`}
                style={styles.deck}
              >
                {deck.title}
              </Card>
            )
          }
          {(activeItem === 'cards') &&
            filteredCards.map( card =>
              <DeckCard 
                key={card.id} 
                {...card}
                push={this.props.history.push}
              />
            )
          }
        </Card.Group>
      </Container>
    )
  }
}

const styles = {
  deck: {
    margin: '18px',
    borderRadius: '18px', 
    height: '335px',
    width: '250px',
    fontSize: '30px',
    color:'#27292b',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ebeced',
  },
  search: {
    borderRadius: '25px',
    height: '25px',
    fontSize: '15px',
    backgroundColor: '#ebeced',
    fontWeight: 'bold',
  },
  font: {
    color: '#232a36',
    fontSize: '1.2rem',
    letterSpacing: '3px'
  },
}

export default Browse