import React from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios'
import { Button, Card, Image, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom' 
import CardImageA1 from "../images/Ruby_A1.png"
import CardImageQ1 from "../images/Ruby_Q1.png"
// import CardImageA2 from "../images/Ruby_A2.png"
// import CardImageQ2 from "../images/Ruby_Q2.png"
// import CardImageA3 from "../images/Ruby_A3.png"
// import CardImageQ3 from "../images/Ruby_Q3.png"
// import CardImageA4 from "../images/Ruby_A4.png"
// import CardImageQ4 from "../images/Ruby_Q4.png"
import Flippy, { FrontSide, BackSide } from 'react-flippy'

class Deck extends React.Component  {
  state = { decks:[] }

  componentDidMount() {
    axios.get('api/decks')
    .then(res => {this.setState({decks:res.data})})

  }
 
  

// OnClick () {
// axios



  render() {return(


    
         <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >             <Container>
                  <FrontSide
                     style={{
                     backgroundColor: '#41669d',
                     }} ><Image src={CardImageQ1} width='200px' length='200px' />
                  </FrontSide>
                   <BackSide
                      style={{ backgroundColor: '#41669d'}}>
                      <Image src={CardImageA1} width='200px' length='200px'></Image>
                   </BackSide>
                </Container>
      </Flippy>

      


   //   <Card>
   //    {this.state.decks.map(deck => 
      
   //       <Card.Content>
   //             <Card.Header>
   //                <Link to="/CSS">
   //                    {deck.title}
   //                </Link>
   //             </Card.Header>
   //          </Card.Content>
   //       )}
  
         /* <Card.Content>
          <Card.Header>
           <Link to="/CSS">
              
           </Link>
          </Card.Header>
         </Card.Content>
         


         <Card.Content>
          <Card.Header>
           <Link to="/CSS">
            
           </Link>
          </Card.Header>
         </Card.Content>

 
         <Card.Content>
          <Card.Header>
           <Link to="/CSS">
            
           </Link>
          </Card.Header>
         </Card.Content>
 
         <Card.Content>
          <Card.Header>
           <Link to="/CSS">
         
           </Link>
          </Card.Header>
         </Card.Content>

    </Card> */
  
       )
     }
   }
export default Deck
