import React from 'react';
import { Link } from 'react-router-dom';
import { Image, } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


import axios from 'axios';

class FlashCard extends React.Component {
  state = { card: {}, }

  componentDidMount() {
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
    const { question, answer, extra, } = this.state.card
    return (
      <>
        <Link to='/decks/1'>Back to deck</Link>
        <br />
        <br />
        <Flippy
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}
          style={{ width: '500px', borderRadius: '5px' }}
        >
          <FrontSide>
            {question}
          </FrontSide>
          <BackSide>
            {answer}
            <br />
            <br />
            {extra}
          </BackSide>
        </Flippy>
      </>
    );
  };
};

export default FlashCard;