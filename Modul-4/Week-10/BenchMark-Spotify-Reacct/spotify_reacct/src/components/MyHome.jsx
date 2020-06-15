import React, {Component} from 'react';
import {Container,Row,Col, Image} from 'react-bootstrap'

class MyHome extends Component {

     constructor(props){
         super(props);
         this.state = {
             rafetelRoman: [],
             mesutKurtish: [],
             beatles: [],

             error: false
         }
     }

     componentDidMount(){
         Promise.all([
             fetch("https://deezerdevs-deezer.p.rapidapi.com/search/track/title?q=eminem")
             .then((response) => response.json())
             .then((responseObject) => this.setState({rafetelRoman: responseObject.Search})
             ),

             fetch("https://deezerdevs-deezer.p.rapidapi.com/search/track/title?q=eminem")
             .then((response) => response.json())
             .then((responseObject) => this.setState({rafetelRoman: responseObject.Search})
             ),


         ])
         .catch(err =>
            {this.setState({error: true})
             console.log("An error: ". err)
            }
          )
     }
    render(props){
        return (
            <Container>
                <Row>
                    <Col>
                    <Image fluid src={props.Album} />
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default MyHome