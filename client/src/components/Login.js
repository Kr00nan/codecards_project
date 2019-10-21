import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Header, Grid } from 'semantic-ui-react';

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <>
        <Grid>
          <Grid.Column width={5}>

            <Header as='h1'style={{marginTop: '350px', color: '#fff'}}>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label="Email"
                autoFocus
                required
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
              <Form.Input
                label="Password"
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
              <Form.Button primary color='purple'>Submit</Form.Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
            {/* // reserved for? */}
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
