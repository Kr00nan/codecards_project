import React from 'react';
import { Container, Divider, Grid, Header, Card, } from 'semantic-ui-react';

const Home = () => (
  <>
    <Container>
      <Header as="h3" color="violet"textAlign="center">Dev Point Labs Code Card</Header>
      <br />
      <br />
      <br />
      <Grid centered columns='4' >
          <Grid divided vertically>
              <Grid.Column  mobile={4} tablet={8} computer={6}></Grid.Column>
                <div class="ui fluid card">
                  <div class="image"></div>
                    <div class="content">
                      <div class="header">HTML</div>
                        <div class="ui bottom attached button">
                          START
                        </div>
                      </div>
                    </div>
              <br />
              <br />
              <Grid.Column  mobile={4} tablet={8} computer={6}></Grid.Column>
              <div class="ui fluid card">
                <div class="image"></div>
                  <div class="content">
                    <div class="header">JS</div>
                      <div class="ui bottom attached button">
                        START
                      </div>
                    </div>
                  </div>
              <br />
              <br />
              <Grid.Column  mobile={4} tablet={8} computer={6}></Grid.Column>
              <div class="ui fluid card">
                <div class="image"></div>
                  <div class="content">
                    <div class="header">REACT</div>
                      <div class="ui bottom attached button">
                        START
                      </div>
                    </div>
                  </div>
              <br />
              <br />
              <Grid.Column  mobile={4} tablet={8} computer={6}></Grid.Column>
              <div class="ui fluid card">
                <div class="image"></div>
                  <div class="content">
                    <div class="header">RUBY</div>
                      <div class="ui bottom attached button">
                        START
                      </div>
                    </div>
                  </div>
          </Grid>
      </Grid>
    </Container>
  </>
);



export default Home;
