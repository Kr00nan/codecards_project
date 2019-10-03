import React from 'react';
import { Link } from 'react-router-dom';
import { Image, } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


import axios from 'axios';

class FlashCard extends React.Component {
  state = { card: {}, }

  componentDidMount() {
    const {deck_id, id} = this.props.match.params;
    // const id = this.props;
    axios.get(`/api/decks/${deck_id}/cards/${id}`)
      .then(res => {
        this.setState({ card: res.data, })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    const { question, answer } = this.state.card
    return (
      <>
        <Link to='/decks/1'>Back to deck</Link>
        <br />
        <br />
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '500px', borderRadius: '5px' }}
        >
          <FrontSide>
            <Image src={question} />
          </FrontSide>
          <BackSide>
            <Image src={answer} />
          </BackSide>
        </Flippy>
      </>
    );
  };
};

export default FlashCard;