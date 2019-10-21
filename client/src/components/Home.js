import React from 'react';
import dpl_logo from '../images/dpl_logo.jpg';
import { Container, Grid, Header, Image, Segment, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Container>
      <br />
      <br />
    <Image src={dpl_logo} size='tiny' centered />
      <br />
      <Header as="h3" color="violet" textAlign="center" size="huge">Dev Point Labs Code Card</Header>
      <br />
      <br />
      <br />
      <Grid centered columns='4' >
        <Grid divided='vertically'>
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui fluid card">
            <div className="image"></div>
            <div className="content">
              <div className="header">HTML</div>
              <Link to='/decks/1'>START</Link>
            </div>
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui fluid card">
            <div className="image"></div>
            <div className="content">
              <div className="header">JavaScript</div>
              <Link to='/decks/4'>START</Link>
            </div>
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui fluid card">
            <div className="image"></div>
            <div className="content">
              <div className="header">CSS</div>
              <Link to='/decks/2'>START</Link>
            </div>
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui fluid card">
            <div className="image"></div>
            <div className="content">
              <div className="header">RUBY</div>
              <Link to='/decks/3'>START</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
    <br />
    <br />
    <br />
    <Segment fluid>

    </Segment>
  </>
);


export default Home;