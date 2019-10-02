import React from 'react';
import axios from 'axios';
import { Card, } from 'semantic-ui-react';

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
              <Card key={card.id} color="yellow" image={card.question} />
            )
          }
        </Card.Group>
      </>
    );
  };
};

export default FlashCards;