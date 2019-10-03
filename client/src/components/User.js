import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Header, Form, } from 'semantic-ui-react';
import axios from 'axios';

class User extends React.Component {
  state = { user: {}, }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ user: res.data, })
      })
      .catch( err => {
        console.log(err)
      })
  }
  
  handleChange = (e, { value, }) => {
    this.setState({ user: { ...this.state.user, admin: value, }, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/users/${this.props.match.params.id}`, this.state.user)
      .then( alert("Succesfully updated user") )
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { user, } = this.state
    return (
      <>
        {
          this.props.admin_authenticated ?
            <>
              <Header as="h1">{user.email}</Header>
              <Header>Admin Status: </Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Dropdown
                  fluid
                  selection
                  value={user.admin}
                  options={adminOptions}
                  onChange={this.handleChange}
                />
                <Form.Button>Submit</Form.Button>
              </Form>
            </>
          :
            this.props.history.push('/')
        }
      </>
    )
  }
}

const adminOptions = [
  { key: 'true', text: 'true', value: true, },
  { key: 'false', text: 'false', value: false, }
];

const ConnectedUser = (props) => (
  <AuthConsumer>
    { auth => 
      <User 
        {...props} 
        auth={auth} 
        admin_authenticated={auth.user.admin === true} 
      />
    }
  </AuthConsumer>
)

export default ConnectedUser;