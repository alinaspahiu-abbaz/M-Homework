import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Home from './Home'

export default function SingleSong(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={props.props.album.cover}/>
                  <Card.Body>
                  <Card.Title>{props.props.title}</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                   </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
        </div>
    )
}
