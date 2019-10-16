import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import beaker32 from '../images/beaker32.png';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/my_decks'>
            <Menu.Item
              position='right'
              size='huge'
              id='my_decks'
              name='my decks'
              active={this.props.location.pathname === '/my_decks'}
            />
          </Link>
          <Link to='/browse'>
            <Menu.Item
              position='right'
              size='huge'
              id='browse'
              name='browse'
              active={this.props.location.pathname === '/browse'}
            />
          </Link>
          <Link to='/study'>
            <Menu.Item
              position='right'
              size='huge'
              id='study'
              name='study'
              active={this.props.location.pathname === '/study'}
            />
          </Link>
          <Menu.Item>
            <Dropdown text={user.email}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/my_profile'>Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLogout(this.props.history)} >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
              style={styles.links}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
              style={styles.links}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <nav>
        <Menu pointing secondary style={styles.navBar}>
            <Image
              src={beaker32}
              as='a'
              // size='medium'
              href={this.props.location.pathname && '/'}
            />
          {this.rightNavItems()}
        </Menu>
      </nav>
    )
  }
}

const styles = {
  navBar: {
    backgroundColor: '#6E54A3',
    padding: '10px 15px'
  },
  links: {
    color: '#fff',
    fontSize: '1.2rem',
    letterSpacing: '3px'
  }
};

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
