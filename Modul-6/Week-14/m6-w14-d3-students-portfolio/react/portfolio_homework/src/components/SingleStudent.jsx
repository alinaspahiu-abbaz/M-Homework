import React, { Component } from 'react'
import {Card, Button, Row} from "react-bootstrap"

export default class SingleStudent extends Component {
    
    render() {

        const {name, surname, email, year, country, _id, img} = this.props.item

        return (
            
            <Row className="mt-4 d-flex align-items0center justify-content-space-between">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{}} src={img} />
                <Card.Body style={{backgroundColor:"grey"}}>
                <Row className="justify-content-center">
                <Card.Title >{name} {surname}</Card.Title></Row>
                    <Card.Text>
                       {email} - {year} - {country}
                </Card.Text>
                <Row className="justify-content-center">
                    <Button className="mr-3" variant="outline-warning">Projects</Button>
                    <Button className="mr-3" variant="outline-info">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                    </Row>
                </Card.Body>
                </Card>
                </Row>
        )
    }
}
