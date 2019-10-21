import React from 'react'
import { Menu, Card, Input, } from 'semantic-ui-react'
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
      <>
        <br />
        <Input type="text"
          placeholder="search ..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <br />
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
            filteredCards.map( card =>
              <DeckCard 
                key={card.id} 
                {...card}
                push={this.props.history.push}
              />
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
}

export default Browse