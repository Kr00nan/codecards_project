import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, Form } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';
import { AuthConsumer, } from '../providers/AuthProvider';

class FlashCard extends React.Component {
  state = { 
    card: {}, 
    owner_id: "", 
    showForm: false, 
    question: "", 
    answer: "", 
    extra: "", 
  }

  componentDidMount() {
    this.getCard();
    axios.get(`/api/decks/${this.props.match.params.deck_id}`)
      .then(res => this.setState({ owner_id: res.data.user_id, }))
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
        this.setState(
          { card: res.data, question: res.data.question, answer: res.data.answer, extra: res.data.extra }
        )
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
        console.log(err)
      })
  }

  render() {
    const { id, question, answer, extra, deck_id } = this.state.card
    const { auth, admin_authenticated, } = this.props
    return (
      <>
        <Link to={`/decks/${deck_id}`}>Back to deck</Link>
        <br />
        <br />
        <Flippy
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}
        >
          <FrontSide style={styles.card}>
            <div style={styles.qna}>Q</div>
            {question}
          </FrontSide>
          <BackSide style={styles.card}>
            <div style={styles.qna}>A</div>
            {answer}
            <br />
            <br />
            <div style={{ fontSize: '18px', }}>{extra}</div>
          </BackSide>
        </Flippy>

        <Link to={`/decks/${deck_id}/cards/${id - 1}`}>
          <Icon name="arrow left" size="huge" style={styles.left} />
        </Link>
        
        <Link to={`/decks/${deck_id}/cards/${id + 1}`}>
          <Icon name="arrow right" size="huge" style={styles.right} />
        </Link>
        {(auth.user.id === this.state.owner_id || admin_authenticated) &&
          <>
            <Button onClick={this.toggleShowForm}>Edit Card</Button>
            <Button color="red" onClick={this.handleDelete}>Delete Card</Button>
          </>
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
          ""
        }
      </>
    );
  };
};

const ConnectedFlashCard = (props) => (
  <AuthConsumer>
    {auth =>
      <FlashCard 
        {...props}
        auth={auth}
        admin_authenticated={auth.user.admin === true}
      />
    }
  </AuthConsumer>
)

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
    padding: '37.5px',
    borderRadius: '27px',
    width: '375px',
    height: '525px',
    fontSize: '27px',
    lineHeight: 'normal',
  },
  qna: {
    position: 'absolute',
    left: '18px',
    top: '12px',
    fontSize: '21px',
  }
}

export default ConnectedFlashCard;