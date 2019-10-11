import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, Form } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';


class FlashCard extends React.Component {
  state = { cards: [], card: [], showForm: false, showAnswer: false, question: "", answer: "", extra: "" }


  componentDidMount() {
    const { deck_id, } = this.props.match.params
    axios.get(`/api/decks/${deck_id}/cards`)
      .then(res => {
        this.setState({ cards: res.data, })
        debugger
      })
      .catch(err => {
        console.log(err)
      })
    this.getCard();
  }

  componentDidUpdate() {
    if (parseInt(this.props.match.params.id) !== this.state.card.id) {
      this.getCard();
    }
  }

  toggleShowForm = () => this.setState({ showForm: !this.state.showForm, })

  handleDelete = () => {
    const { deck_id, id } = this.props.match.params;
    axios.delete(`/api/decks/${deck_id}/cards/${id}`)
      .then(res => {
        this.props.history.push(`/decks/${deck_id}`);
      })
  }

  getCard = () => {
    const { deck_id, id } = this.props.match.params;
    axios.get(`/api/decks/${deck_id}/cards/${id}`)
      .then(res => {
        this.setState({ card: res.data, question: res.data.question, answer: res.data.answer, extra: res.data.answer })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { card: { deck_id, id, }, question, answer, extra } = this.state;
    axios.put(`/api/decks/${deck_id}/cards/${id}`, { question, answer, extra })
      .then(res => {
        this.setState({ card: res.data, })
        this.toggleShowForm()
      })
      .catch(err => {

      })
  }

  render() {
    const { id, question, answer, extra, deck_id } = this.state.card
    const cards = this.state.cards;
    const length = cards.length;
    const position = cards.findIndex(this.state.card.id);
    
    return (
      <>
        <Link to={`/decks/${deck_id}`}>Back to deck</Link>
        <br />
        <Button color="red" onClick={this.handleDelete}>Delete Card</Button>
        <br />

        <Flippy
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}
        >
          <FrontSide style={styles.card}>
            <p>The number of cards in this deck: {length}</p>
            <p>I am {position} in this deck.</p>
            <p>Question: {question}</p>
          </FrontSide>
          <BackSide style={styles.card}>
            <p>Answer: {answer}</p>
            <hr />
            <div style={{ fontSize: '18px', }}>{extra}</div>
          </BackSide>
        </Flippy>
        <Link to={`/decks/${deck_id}/cards/${id - 1}`}>
          <Icon name="arrow left" size="huge" style={styles.left} />
        </Link>
        <Link to={`/decks/${deck_id}/cards/${id + 1}`}>
          <Icon name="arrow right" size="huge" style={styles.right} />
        </Link>
        <Button onClick={this.toggleShowForm}>
          Edit Card
        </Button>

        {this.state.showAnswer ?
          (
            <Form onSubmit={this.handleeSubmit}>

              <Form.Button>Submit</Form.Button>
            </Form>
          )
          :
          ""
        }




        {this.state.showForm ?
          (
            <Form onSubmit={this.handleSubmit}>

              <Form.Input
                label="Question"
                name="question"
                value={this.state.question}
                onChange={this.handleChange}
              />

              <Form.Input
                label="Answer"
                name="answer"
                value={this.state.answer}
                onChange={this.handleChange}
              />

              <Form.Input
                label="Extra"
                name="extra"
                value={this.state.extra}
                onChange={this.handleChange}
              />

              <Form.Button>Submit</Form.Button>
            </Form>

          )
          :
          null
        }

      </>
    );
  };
};

const styles = {
  left: {
    position: "left",
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
    height: '600px',
    fontSize: '25px',
    lineHeight: 'normal',

  },
}

export default FlashCard;