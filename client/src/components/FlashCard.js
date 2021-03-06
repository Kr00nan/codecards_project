import React from 'react';
import axios from 'axios';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom';
import { Button, Form, Card, Icon, Container } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';

class FlashCard extends React.Component {
  state = {
    cards: [],
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

    const { deck_id, } = this.props.match.params
    axios.get(`/api/decks/${deck_id}/cards`)
      .then(res => {
        this.setState({ cards: res.data, })
      })
      .catch(err => {
        console.log(err)
      })
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

  navButton = (e) => {
    const { card: { id, deck_id }, cards } = this.state;
    let index = cards.findIndex(element => element.id === id);
    let pointer;

    switch (e.target.className.includes('left')) {
      case true:
        index === 0 ? index = cards.length - 1 : index--;
        pointer = cards[index];
        break;
      default:
        index === cards.length - 1 ? index = 0 : index++;
        pointer = cards[index];
        break;
    }

    pointer = cards[index];
    this.props.history.push(`/decks/${deck_id}/cards/${pointer.id}`);
  }

  randomCard = () => {
    // get cards array from state
    const { cards } = this.state;
    // create random index
    const randomIndex = Math.floor(Math.random() * Math.floor(cards.length));
    // send user to random card in deck
    this.props.history.push(`/decks/${cards[randomIndex]['deck_id']}/cards/${cards[randomIndex]['id']}`);
  }

  makeFocusCard = (card_id) => {
    axios.post('/api/review_cards', { card_id })
      .then(res => {
        if (res.data.message) {
          alert(res.data.message)
        }
      })
  }

  render() {
    const { card: { id, question, answer, extra, deck_id }, showForm } = this.state;
    const { auth, admin_authenticated, } = this.props;

    return (
      <Container>
        <br />
        <Button 
         as={Link}
         to={`/decks/${deck_id}`}
         color="blue">Back</Button>
        <br />
        <br />
        <div style={styles.container}>
          <div style={styles.item}>
            <Icon link name='angle left' size='massive' onClick={this.navButton} />
          </div>
          <div style={{ width: '375px' }}>
            <div>
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
                  <div style={{ overflowWrap: 'break-word' }}>
                    {answer}
                  </div>
                  <br />
                  <div style={{ maxHeight: '70%', overflowWrap: 'break-word', overflow: 'auto' }}>
                  <p style={{ fontSize: '18px', margin: '6px'}}>
                    {extra}
                  </p>
                  </div>
                </BackSide>
              </Flippy>
              <Card style={styles.btnSection}>
                <Card.Content>
                  {/* edit, delete, focus buttons */}
                  <div className='ui three buttons'>
                    {(auth.user.id === this.state.owner_id || admin_authenticated) &&
                      <>
                        <Button color ="blue" onClick={this.toggleShowForm}>
                          {showForm ? 'Cancel' : 'Edit'}
                        </Button>
                        <Button onClick={this.handleDelete} color='red'>Delete</Button>
                      </>
                    }
                    <Button
                      onClick={() => this.makeFocusCard(id)}
                      color='yellow'
                      className='tool'
                    >
                      Focus
                    <div className='tooltip'>Add to Focus Deck</div>
                    </Button>
                  </div>
                </Card.Content>
              </Card>

              <Button onClick={this.randomCard} className='ui fluid' color="blue">Random</Button>
              {showForm ?
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
                    <Form.TextArea
                      label="Extra"
                      name="extra"
                      value={this.state.extra}
                      onChange={this.handleChange}
                      maxlength='450'
                    />
                    <Form.Button color="blue">Submit</Form.Button>
                  </Form>
                )
                :
                ""
              }
            </div>
          </div>
          <div style={styles.item}>
            <Icon link name='angle right' size='massive' onClick={this.navButton} />
          </div>
        </div>
      </Container>
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
  card: {
    padding: '37.5px',
    borderRadius: '5px 5px 0px 0px',
    width: '375px',
    height: '425px',
    fontSize: '27px',
    lineHeight: 'normal',
    backgroundColor: '#ebeced'
  },
  qna: {
    position: 'absolute',
    left: '18px',
    top: '12px',
    fontSize: '21px',
  },
  btnSection: {
    width: '375px',
    height: '60px',
    borderRadius: '0px 0px 5px 5px',
    boxShadow: '0px 4px 7px lightgrey',
    marginTop: '0px',
    backgroundColor: '#ebeced'
  },
  bottomBtns: {
    width: '375px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    paddingTop: '15rem'
  }
}

export default ConnectedFlashCard;