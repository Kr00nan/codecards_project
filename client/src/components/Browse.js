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
          color="teal"
          placeholder="search ..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <br />
        <Menu inverted fluid widths={2}>
          <Menu.Item
            name='decks'
            color="grey"
            active={activeItem === 'decks'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='cards'
            color="grey"
            active={activeItem === 'cards'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Card.Group color="white" itemsPerRow={4}>
          {(activeItem === 'decks') &&
            decks.map( deck =>
              <Card 
                key={deck.id}
                as={Link} 
                to={`/decks/${deck.id}`}
                color="white"
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
    borderRadius: '18px', 
    height: '335px',
    fontSize: '30px',
    color:'#000000',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
}

export default Browse