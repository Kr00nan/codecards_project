import React, { Fragment, } from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Grid, Image, Container, Divider, Header, Button, Segment, } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = { editing: false, formValues: { email: '', file: '', name: ''}, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  componentDidMount() {
    const { auth: { user: { email, }, }, } = this.props;
    this.setState({ formValues: { email, }, });
  }

  toggleEdit = () => {
    this.setState(state => {
      return { editing: !state.editing, };
    })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        [name]: value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { email, file, name,}, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { email, file, name,});
    // after the form has been submitted, reset form values.
    this.setState({
      editing: false,
      formValues: {
        email: '',
        file: "",
      },
    });
  }

  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <Fragment>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{user.name}</Header>
          <Header as="h1">{user.email}</Header>
        </Grid.Column>
      </Fragment>
    )
  }

  editView = () => {
    const { formValues: {name, email, password, } } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* <Grid.Column width={4}> */}
            <Dropzone
              onDrop={this.onDrop}
              multiple={false}
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    style={styles.dropzone}
                  >
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop files here...</p> :
                        <p>Drop image here, or click to select image to upload.</p>
                    }
                  </div>
                )
              }}
            </Dropzone>
          {/* </Grid.Column> */}
        {/* </Form> */}
        {/* <Grid.Column width={8}> */}
          {/* <Form onSubmit={this.handleSubmit}> */}
          <Form.Input
              label="Name"
              autoFocus
              name='name'
              value={name}
              placeholder='User Name'
              onChange={this.handleChange}
            />
            <Form.Input
              label="Email"
              autoFocus
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <Form.Input
              label="Password"
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
            <Segment textAlign='center' basic>
              <Button primary type='submit'>Submit</Button>
            </Segment>
          </Form>
        {/* </Grid.Column> */}
      </>
    )
  }

  render() {
    const { editing, } = this.state;
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            {editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <Button color="blue" onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    {auth =>
      <Profile {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;
