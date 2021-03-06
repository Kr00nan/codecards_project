import React from 'react';
import dpl_logo from '../images/dpl_logo.jpg';
import html from '../images/html.jpeg';
import css from '../images/css.jpg';
import javascript from '../images/javascript-logo.jpeg';
import ruby from '../images/ruby.jpg';
import '../index.css';
import { Container, Grid, Header, Image, } from 'semantic-ui-react';

const Home = () => (

  <Container>
    <br />
    <Image src={dpl_logo} size='small' centered />

    <Header as="h2" color="violet" textAlign="center" size="huge">Dev Point Labs Code Card</Header>
    <Header as="h3" color='#6E54A3' textAlign="center" size="huge">Starter Decks</Header>

    <br />
    <Grid>
      <Grid.Column mobile={8} tablet={6} computer={4}>
        <Image
          src={html}
          as='a'
          href='/decks/1'
          size='meduim' 
          style={styles.card}/>
      </Grid.Column>
      <Grid.Column mobile={8} tablet={6} computer={4}>
        <Image src={css}
          as="a"
          href='/decks/2'
          size='medium' 
          style={styles.card}/>
      </Grid.Column>
      <Grid.Column mobile={8} tablet={6} computer={4}>
        <Image src={ruby}
          as="a"
          href='/decks/3'
          size='medium' 
          style={styles.card}/>
      </Grid.Column>
      <Grid.Column mobile={8} tablet={6} computer={4}>
        <Image
          src={javascript}
          as="a"
          href='/decks/4'
          size='medium' 
          style={styles.card}/>
      </Grid.Column>
    </Grid>
  </Container>
);

const styles ={
  card: {
    padding: '37.5px',
    borderRadius: '5px 5px 0px 0px',
    width: '375px',
    height: '425px',
    fontSize: '27px',
    lineHeight: 'normal',
  },
};
export default Home;