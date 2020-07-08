import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"

export default class SingleStudent extends Component {
    
    render() {

        const {name, surname, email, year, country, _id, img} = this.props.item

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
        <Card.Title>{name} - {surname}</Card.Title>
                    <Card.Text>
                       {email} - {year} - {country}
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}
