import React from 'react';
import Searchbar from './Searchbar';
import { AuthConsumer, } from "../providers/AuthProvider";
import {  Menu, Dropdown, Icon, Image} from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Searchbar position='center' /> 
          <Link to='/my_decks'>
            <Menu.Item
              position='right'
              size='huge'
              id='my_decks'
              name='my decks'
              active={this.props.location.pathname === '/my_decks'}
            />
          </Link>
          <Menu.Item>
            <Dropdown text={user.email}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/my_profile'>Profile</Dropdown.Item>
                <Dropdown.Item onClick={ () => handleLogout(this.props.history) } >
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
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  
  render() {
    return (
      <nav> 
        <Menu pointing secondary>

          <Link to='/'>
          <Icon name='home' 
          size='big'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </nav>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
