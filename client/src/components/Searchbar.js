// import React, { Component } from 'react'
// import axios from 'axios'
// import Suggestions from './Suggestions'
  


// class Search extends Component {
//   state = {
//     query: '',
//     results: []
//   }

//   componentDidMount() {
//     this.getCard();

//     axios.get(`/api/decks/${this.props.match.params.deck_id}`)
//       .then(res => this.setState({ owner_id: res.data.user_id, }))

//     const { deck_id, } = this.props.match.params
//     axios.get(`/api/decks/${deck_id}/cards`)
//       .then(res => {
//         this.setState({ cards: res.data, })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   getInfo = () => {
//   const { deck_id, id, } = this.props.match.params
//       axios.get(`/api/decks/${deck_id}/cards`)
//         .then(res => {
//           this.setState({ cards: res.data, })
//         })
//         .catch(err => {
//           console.log(err)
//         })};
  
//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } else if (!this.state.query) {
//       }
//     })
//   }
  
//   getInfo = () => {
//     axios.get(`/api/decks/${deck_id}/cards/${id}`)
//       .then(({ data }) => {
//         this.setState({
//           results: data.data
//         })
//       })
//   }

//   render() {
//     return (
//       <form>
//         <input
//           placeholder="Search for..."
//           ref={input => this.search = input}
//           onChange={this.handleInputChange}
//         />
//         <Suggestions results={this.state.results} />
//       </form>
//     )
//   }
// }

// export default Search
import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid, } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' }



export class Searchbar extends Component {
  state = initialState

  handleResultSelect = (_e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (_e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter( isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
         
        </Grid.Column>
      </Grid>
    )
  }
}

export default Searchbar;