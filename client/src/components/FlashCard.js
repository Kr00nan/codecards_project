import React from 'react';
import { Card, } from 'semantic-ui-react';

class FlashCard extends React.Component {
  
  render() {
    return (
      <>
        <Card color="yellow" image={this.props.question} />
        <Card color="yellow" image={this.props.answer} />        
      </>
    );
  };
};

export default FlashCard;