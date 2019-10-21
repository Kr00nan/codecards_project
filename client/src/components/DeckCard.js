import React from 'react'
import { Card, Icon, } from 'semantic-ui-react'
import Flippy, { FrontSide, BackSide, } from 'react-flippy'
import { Link, } from 'react-router-dom'

class DeckCard extends React.Component {
  state = { isFlipped: false, }

  flip = () => this.setState({ isFlipped: !this.state.isFlipped, })

  render() {
    const { isFlipped, } = this.state
    const { id, question, answer, extra, deck_id, title, push, } = this.props
    return (
      <Card 
        style={{margin: '12px'}}
        as={Flippy}
        isFlipped={isFlipped}
      >
        <FrontSide style={styles.card}>
          <div style={styles.qna}>Q</div>
          {question}
          <div style={styles.title}>
            <Icon name='sync' link onClick={this.flip}/>
            { this.props.rc_id && 
              <Icon name='remove circle' link onClick={() => this.props.removeReviewCard(this.props.rc_id)}/> 
            }
            <Icon name='external square alternate' link onClick={() => push(`/decks/${deck_id}/cards/${id}`)}/>
            <Link to={`/decks/${deck_id}`}>{title}</Link>
          </div>
        </FrontSide>
        <BackSide style={styles.card}>
          <div style={styles.qna}>A</div>
          {answer}
          <pre style={styles.pre}>
            {extra}
          </pre>
          <div style={styles.title}>
            <Icon name='sync' link onClick={this.flip}/>
            <Icon name='external square alternate' link onClick={() => push(`/decks/${deck_id}/cards/${id}`)}/>
            <Link to={`/decks/${deck_id}`}>{title}</Link>
          </div>
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
  },
  title: {
    position: 'absolute',
    bottom: '18px',
    right: '18px',
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