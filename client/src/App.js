import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Deck from './components/Deck';
import FlashCard from './components/FlashCard';
import Profile from './components/Profile'
import User from './components/User'
import MyDecks from './components/MyDecks';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/decks/:id" component={Deck} />
          <ProtectedRoute exact path="/decks/:deck_id/cards/:id" component={FlashCard} />
          <ProtectedRoute exact path="/my_profile" component={Profile} />
          <ProtectedRoute exact path="/my_decks" component={MyDecks} />
          <ProtectedRoute exact path="/users/:id" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;