import React from 'react';
import { Container, Divider, Grid, Header, Image, } from 'semantic-ui-react';

const Home = () => (
  <>
    <Container>
      <Header as="h3" color="violet"textAlign="center">Dev Point Labs Code Card</Header>
      <Grid>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Header>HTML</Header>
      </Grid.Column>   
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Header>CSS</Header>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Header>REACT</Header>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Header>RUBY</Header>
      </Grid.Column>
      </Grid>
    </Container>
  </>
);



export default Home;
