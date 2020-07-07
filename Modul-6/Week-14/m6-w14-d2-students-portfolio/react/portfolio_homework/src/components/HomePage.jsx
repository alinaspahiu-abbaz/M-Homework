import React, { Component } from 'react'
import Students from "./Students"
import { Accordion, Card, Col, Button, Row, Container } from "react-bootstrap"


export default class HomePage extends Component {

    render() {
        return (
            <Container fluid >
                <Row className="mb-5 justify-content-center">
                    <h1> Welcome to Students Portofolio</h1>
                </Row>
                <Row>

                    <Container>
                        
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
                                        Click to open the List!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <>
                                    <Card.Header style={{backgroundColor:"#ab3562"}}>
                                          <Row style={{fontSize:"20px", fontWeight:"bold"}} className="mb-3 justify-content-center">
                                            <Col sm={2}>Name</Col>
                                            <Col sm={2}>Surname</Col>
                                            <Col sm={2}>Email</Col>
                                           <Col sm={2}>Birthday</Col>
                                           <Col sm={2}>Country</Col>
                                           <Col sm={2}>Changes</Col>
                                           
                                           </Row>
                                             
                                    </Card.Header>
                                    <Card.Body style={{backgroundColor:"#de85a7"}}>
                                    <Students />
                                    <Row className="justify-content-center">
                                    <Button className="mt-4" variant="outline-dark">Add a new Student</Button>
                                    
                                    
                                    </Row>
                                    </Card.Body>
                                    </>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>
                    </Container>
                </Row>
            </Container>

        )
    }


}
