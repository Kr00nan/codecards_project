import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Header, } from 'semantic-ui-react';

class Profile extends React.Component {


  render() {
    const { user, } = this.props.auth;
    return (
      <>
        <Header as="h1">{user.email}</Header>
      </>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;