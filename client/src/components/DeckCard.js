import React from 'react'
import { Card, Icon, } from 'semantic-ui-react'
import Flippy, { FrontSide, BackSide, } from 'react-flippy'

class DeckCard extends React.Component {
  state = { isFlipped: false, }

  flip = () => this.setState({ isFlipped: !this.state.isFlipped, })

  bottomRight = () => {
    const { id, deck_id, title, push, } = this.props
    return (
      <div style={styles.options}>
        <Icon className='tool' name='sync' link onClick={this.flip}>
          <div className='tooltip'>Flip Card</div>
        </Icon>
        {this.props.rc_id &&
          <Icon
            name='remove circle'
            link
            onClick={() => this.props.removeReviewCard(this.props.rc_id)}
            className='tool'
          >
            <div className='tooltip'>Remove From Deck</div>
          </Icon>
        }
        <Icon
          name='external square alternate'
          link
          onClick={() => push(`/decks/${deck_id}/cards/${id}`)}
          className='tool'
        >
          <div className='tooltip'>Go To Card</div>
        </Icon>
        {title}
      </div>
    )
  }

  render() {
    const { isFlipped, } = this.state
    const { question, answer, extra, } = this.props
    return (
      <Card
        style={{ margin: '12px' }}
        as={Flippy}
        isFlipped={isFlipped}
      >
        <FrontSide style={styles.card}>
          <div style={styles.qna}>Q</div>
          {question}
          {this.bottomRight()}
        </FrontSide>
        <BackSide style={styles.card}>
          <div style={styles.qna}>A</div>
          <div style={{ overflowWrap: 'break-word' }}>
            {answer}
          </div>
          <br />
          <div style={{ maxHeight: '70%', overflowWrap: 'break-word', overflow: 'auto' }}>
            <pre style={styles.pre}>
              {extra}
            </pre>
          </div>
          {this.bottomRight()}
        </BackSide>
      </Card>
    )
  }
}

const styles = {
  card: {
    margin: '0px 6.5px',
    padding: '25px',
    borderRadius: '18px',
    height: '335px',
    width: '250px',
    fontSize: '18px',
    overflowWrap: 'break-word',
    backgroundColor: '#ebeced',
  },
  options: {
    position: 'absolute',
    bottom: '15px',
    right: '20px',
    fontSize: '14px',
  },
  qna: {
    position: 'absolute',
    left: '12px',
    top: '8px',
    fontSize: '14px',
  },
  pre: {
    fontSize: '12px',
    whiteSpace: 'pre-wrap',
    overflow: 'hidden'
  }
}

export default DeckCard