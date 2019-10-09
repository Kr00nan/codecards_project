import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';

class FlashCard extends React.Component {
  state = { card: {}, }
  
  
  componentDidMount() {
    this.getCard();
  }
  componentDidUpdate() {
    if ( parseInt(this.props.match.params.id) !== this.state.card.id ) {
      this.getCard();
    }
  }

  handleDelete = () => {
    const {deck_id, id} = this.props.match.params;
    axios.delete(`/api/decks/${deck_id}/cards/${id}`)
      .then( this.props.history.push(`/decks/${deck_id}`) )
  }

  getCard = () => {
    const {deck_id, id} = this.props.match.params;
    axios.get(`/api/decks/${deck_id}/cards/${id}`)
      .then(res => {
        this.setState({ card: res.data, })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const { id, question, answer, extra, deck_id } = this.state.card
    return (
      <>
        <Link to={`/decks/${deck_id}`}>Back to deck</Link>
        <br />
        <Button color="red" onClick={this.handleDelete}>Delete Card</Button>
        <br />
        <Link to={`/decks/${deck_id}/cards/${id - 1}`}>
          <Icon name="arrow left" size="huge" style={styles.left} />
        </Link>
        <Flippy
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}
        >
          <FrontSide style={styles.card}>
            {question}
          </FrontSide>
          <BackSide style={styles.card}>
            {answer}
            <br />
            <br />
            <div style={{fontSize: '18px',}}>{extra}</div>
          </BackSide>
        </Flippy>
        <Link to={`/decks/${deck_id}/cards/${id + 1}`}>
          <Icon name="arrow right" size="huge" style={styles.right} />
        </Link>
      </>
    );
  };
};
const styles = {
  left: {
    position: "fixed",
    left: "0",
    top: "50%",
  },
  right: {
    position: 'fixed',
    right: '0',
    top: '50%'
  },
  card: {
    padding: '25px', 
    borderRadius: '25px', 
    width: '400px',
    height: '500px',
    fontSize: '25px',
    lineHeight: 'normal',
  },
}
export default FlashCard;
