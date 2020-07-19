import React, { Component } from "react"
import { Col, Image,Row, Button, Card } from "react-bootstrap"

class StudentListItem extends Component {
    render() {
        const { _id, name, surname, birthday, email, img } = this.props.item
        return (
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    
                    <Card.Body>
                    <Row className="justify-content-center">
                        <Card.Title>{name} - {surname}</Card.Title>

                        
                        <Card.Text>
                         <Row className="justify-content-center">
                            {email}

                         </Row>
                         <Row className="justify-content-center">

                            {birthday}
                         </Row>
                            
                         
                            
                           
                    </Card.Text>    
                        <Button variant="primary">Go somewhere</Button>
                        </Row>
                    </Card.Body>
                   
                </Card>

            </Col>
        )
    }
}

export default StudentListItem