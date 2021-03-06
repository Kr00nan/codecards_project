import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Header, Grid, Container, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
      <div className='login_page'>
        <Container>

          <Grid>
            <Grid.Column width={5}>
              <Header as='h1' style={{ marginTop: '300px', color: '#fff' }}>Register</Header>
              <Form onSubmit={this.handleSubmit} inverted>
                <Form.Input
                  label="Email"
                  required
                  autoFocus
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
                <Form.Input
                  label="Password Confirmation"
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  placeholder='Password Confirmation'
                  type='password'
                  onChange={this.handleChange}
                />
                <Button primary type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}