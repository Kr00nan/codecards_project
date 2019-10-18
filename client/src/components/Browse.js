import React from 'react'
import { Menu, Card, Grid} from 'semantic-ui-react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import Flippy, { FrontSide, BackSide, } from 'react-flippy'
import _ from 'lodash';

class Browse extends React.Component {
  state = { activeItem: 'decks', decks: [], cards: [], isLoading: false, value: "", results: [], search: "", }

  componentDidMount() {
    axios.get('/api/public_decks')
      .then( res => this.setState({ decks: res.data, }))
    axios.get('/api/public_cards')
      .then( res => this.setState({ cards: res.data, }))
  }

  handleItemClick = (e, {name}) => this.setState({ activeItem: name })

  handleResultSelect = (_e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (_e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      const initialState = { isLoading: false, results: [], value: '' }
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter( isMatch),
      })
    }, 300)
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }


  render() {
    let filteredCards = this.state.cards.filter(
      (card)=>{
        return card.question.indexOf(
          this.state.search)
        !== -1;
      }
    );
    const { activeItem, decks, } = this.state
    return (
      <>
      <br />
      <br />
      <Grid>
      <input type="text"
      placeholder="search..."
      value={this.state.search}
      onChange={this.updateSearch.bind(this)}
      />
        <Grid.Column width={6}>
          {/* <Input type="text"
            onChange={this.updateSearch.bind(this)}
            results={results}
            value={value}
          /> */}
        </Grid.Column>
      </Grid>
      <br />
      <br />
        <Menu fluid widths={2}>
          <Menu.Item
            name='decks'
            active={activeItem === 'decks'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='cards'
            active={activeItem === 'cards'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Card.Group itemsPerRow={4}>
          {(activeItem === 'decks') &&
            decks.map( deck =>
              <Card 
                key={deck.id}
                as={Link} 
                to={`/decks/${deck.id}`}
                color="grey"
                style={styles.deck}
              >
                {deck.title}
              </Card>
            )
          }
          {(activeItem === 'cards') &&
            filteredCards.map( card =>
              <Card 
                key={card.id}
                style={{margin: '12px'}}
                as={Flippy}
                flipOnClick={true}
              >
                <FrontSide style={styles.card}>
                  <div style={styles.qna}>Q</div>
                  {card.question}
                  <a href={`/decks/${card.deck_id}`} style={styles.title}>{card.title}</a>
                </FrontSide>
                <BackSide style={styles.card}>
                  <div style={styles.qna}>A</div>
                  {card.answer}
                  <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                    {card.extra}
                  </pre>
                  <a href={`/decks/${card.deck_id}`} style={styles.title}>{card.title}</a>
                </BackSide>
              </Card>
            )
          }
        </Card.Group>
      </>
    )
  }
}

const styles = {
  deck: {
    borderRadius: '18px', 
    height: '335px',
    fontSize: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  card: {
    margin: '6.5px',
    padding: '25px',
    borderRadius: '18px',
    height: '335px',
    width: '250px',
    fontSize: '18px',
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
  }
}

export default Browse