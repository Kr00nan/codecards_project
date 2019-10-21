import React from 'react';
import dpl_logo from '../images/dpl_logo.jpg';
import html from '../images/html.jpeg';
import css from '../images/css.jpg';
import javascript from '../images/javascript-logo.jpeg';
import ruby from '../images/ruby.jpg';
import { Container, Grid, Header, Image, Segment, } from 'semantic-ui-react';

const Home = () => (
  <>
    <Container>
      <br />
      <br />
      <Image src={dpl_logo} size='small' centered />
      <br />
      <Header as="h2" color="violet" textAlign="center" size="huge">Dev Point Labs Code Card</Header>
      <br />
      <br />
      <Header as="h3" color="black" textAlign="center" size="huge">Starter Decks</Header>
      <br />
      <br />
      <br />
      <Grid centered columns='4' >
        <Grid divided='vertically'>
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui card">
            <Image 
            src={html} 
            as='a'
            href='/decks/1'
            size='huge' centered  />
            </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui card">
            <Image 
            src={javascript} 
            as="a"
            href='/decks/4'
            size='huge' centered  />
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui card">
            <Image src={css} 
            as="a"
            href='/decks/2'
            size='huge' centered  />
          </div>
          <br />
          <br />
          <Grid.Column mobile={4} tablet={8} computer={6}></Grid.Column>
          <div className="ui card">
            <Image src={ruby} 
            as="a"
            href='/decks/3'
            size='huge' centered  />
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