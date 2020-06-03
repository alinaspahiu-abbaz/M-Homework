import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import item from '../jsons/horror.json'




const Books = () => {
    return (
        <Container className="main" fluid>
          <h3>History Books</h3>
          <div class="row m-5 justify-content-center">
          <Card style={{ width: '18rem' }}>
              
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81qxqy2R%2BmL.jpg" style={{width:'300px' }} style={{height:'250px'}} />
  <Card.Body>
    <Card.Title>Killers of the Flower Moon</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/811iZOA9%2B8L.jpg" style={{width:'300px' }} style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title>21 Lessons </Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81WNVAgspxL.jpg" style={{width:'300px' }} style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title>Wild</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71O3WN6oyzL.jpg" style={{width:'300px' }} style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title>Hidden Figures</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</div>

{/* ------------------------- */}

<h3>Horror Books</h3>
          <div class="row m-5 justify-content-center">
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/61ZJTk%2BkoGL.jpg" style={{width:'300px' }} style={{height:'250px'}} />
  <Card.Body>
    <Card.Title>The lost ones</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/91xI4GjM7jL.jpg" style={{width:'300px' }} style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title>Celtic Empire</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51an6r%2B508L.jpg" style={{width:'300px' }} style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title>The girl with all gifts</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81sIePWJQwL.jpg" style={{width:'300px' }} style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title>Memory man</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</div>




        </Container>

        
    )
}

export default Books;