import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Button, Header, Grid, Container } from 'semantic-ui-react';

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
      <div className='login_page'>
        <Container>
          <Grid>
            <Grid.Column width={5}>
              <Header as='h1' style={{ marginTop: '300px', color: '#fff' }}>Login</Header>
              <Form onSubmit={this.handleSubmit} inverted>
                <Form.Input
                  label="Email"
                  autofocus
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
                <Button primary type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              {/* // reserved for? */}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
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
