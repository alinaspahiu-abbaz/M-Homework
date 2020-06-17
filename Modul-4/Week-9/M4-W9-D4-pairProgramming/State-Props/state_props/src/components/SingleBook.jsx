import React from 'react';
import {Row, Col, Card, Button } from 'react-bootstrap'

let booksCategory =['fantasy', 'history', 'horror', 'romance',  'scifi'];

let books = {
       fantasy: require('../data/horror.json'),
      }

class SingleBook extends React.Component {
    
   state = { books: books.horror }
   
   render() {
    return (
        <div>
         <Row>
            
                
                    <Col >
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='sdsada' />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                 
             )
          
           
          </Row>
        </div>
    
    )
}}

export default SingleBook;