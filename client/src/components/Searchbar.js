import _ from 'lodash';
import faker from 'faker';
import React, { Component } from 'react';
// import { AuthConsumer, } from "../providers/AuthProvider";
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(50, () => ({
  title: faker.system.commonFileName(),
  description: faker.lorem.paragraph(),
})) 

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
        results: _.filter(source, isMatch),
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
          {/* <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment> */}
        </Grid.Column>
      </Grid>
    )
  }
}

export default Searchbar;