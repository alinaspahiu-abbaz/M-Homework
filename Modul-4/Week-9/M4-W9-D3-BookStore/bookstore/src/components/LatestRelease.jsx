import React, { Component } from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";



let books = {  horror: require("../jsons/horror.json")  };

class LatestRelease extends Component {
  state = {   books: books.horror.slice(0,6)   }

render() {
  return (
     <Container>
       <Row className='justify-content-center'>
         {
          this.state.books.map((book) => 
           { 
             return (
              <Col xs={12} md={4}>
                 <Card  style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={book.img}/>
                   <Card.Body>
                     <Card.Title>{book.title}</Card.Title>
                     <Card.Text>
                       Some quick example text to build on the card title and make up the bulk of
                       the card's content.
                     </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                 </Card>
              </Col>
               )
             })
          }  
       </Row>
     </Container>
          )
        }
      }

export default LatestRelease;