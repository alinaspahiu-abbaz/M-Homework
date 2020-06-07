import React, { Component } from "react";
import books from '../jsons/horror.json';
import {Container, Row, Col, Card, Button} from "react-bootstrap";


class LatestRelease extends Component {

    render() {
        return (
  <Container className='col-xs-3'>
     <Row className='' >
        <Col xs={3} md={4}>
        {books.map((book) => { 
            return (
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
           
             )})}
              

        </Col>
        
     </Row>
  </Container>
            
        )
    }
   
}

export default LatestRelease;