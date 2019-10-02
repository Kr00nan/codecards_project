import React from 'react';
import axios from 'axios';
import { Card, } from 'semantic-ui-react';
import FlashCard from './FlashCard';

class FlashCards extends React.Component {
  state = { cards: [], }

  componentDidMount() {
    axios.get(`/api/decks/${this.props.match.params.deck_id}/cards`)
      .then( res => {
        this.setState({ cards: res.data, })
      })
      .catch( err => {
        console.log(err)
      })
  }

  
  render() {
    return (
      <>
        <Card.Group itemsPerRow={4}>
          {
            this.state.cards.map( card => 
                <FlashCard key={card.id} {...card} />
            )
          }
        </Card.Group>
      </>
    );
  };
};

export default FlashCards;