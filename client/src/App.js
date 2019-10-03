import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Deck from './components/Deck';
<<<<<<< HEAD
import Profile from './components/Profile'
import User from './components/User'
=======
import FlashCard from './components/FlashCard';
>>>>>>> de32ffaed3fb60e4004c1b7a4cde75761de174aa
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/decks/:id" component={Deck} />
<<<<<<< HEAD
          <ProtectedRoute exact path="/my_profile" component={Profile} />
          <ProtectedRoute exact path="/users/:id" component={User} />
=======
          <Route exact path="/decks/:deck_id/cards/:id" component={FlashCard} />
>>>>>>> de32ffaed3fb60e4004c1b7a4cde75761de174aa
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;