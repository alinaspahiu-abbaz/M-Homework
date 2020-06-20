import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Home from './Home'

export default function SingleSong(props) {
    return (
        <div>
            <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={props.props.album.cover}/>
                  <Card.Body>
                  <Card.Title>{props.props.title}</Card.Title>
                  <Card.Text>
                    This is the description.
                   </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
        </div>
    )
}
