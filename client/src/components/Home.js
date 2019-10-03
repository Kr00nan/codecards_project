import React from 'react';
import { Container, Divider, Grid, Header, Button, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (



  <>
    <Container>
      <br />
      <Header as="h3" color="violet" textAlign="center">Dev Point Labs Code Card</Header>
      <br />
      <br />
      <br />
      <Grid centered columns='4' >
        <Grid divided vertically>
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div class="ui fluid card">
            <div class="image"></div>
            <div class="content">
              <div class="header">HTML</div>
              <Link to='/decks/1'>START</Link>
            </div>
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div class="ui fluid card">
            <div class="image"></div>
            <div class="content">
              <div class="header">JavaScript</div>
              <Link to='/decks/4'>START</Link>
            </div>
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div class="ui fluid card">
            <div class="image"></div>
            <div class="content">
              <div class="header">CSS</div>
              <Link to='/decks/2'>START</Link>
            </div>
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div class="ui fluid card">
            <div class="image"></div>
            <div class="content">
              <div class="header">RUBY</div>
              <Link to='/decks/3'>START</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </>
);



export default Home;
