import React, { Component } from 'react'
import {Button, Card, Col, Row} from 'react-bootstrap'
import SingleSong from './SingleSong'



export default class Home extends Component {
state = {
    songs: [],
    }

componentDidMount = async() => {
    
    
 // therret metoden fetch per te marr data nga deezer  
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "aace0c7e4amsh7c2f6c39d590f79p1b4736jsn2092501aedba"
	}
})
//.then eshte nje funksion
.then(response => response.json() )//konverton response ne nje objekt
.then (data =>data.data)//ketu na vijnte te dhenat(objekt me objekt mrena)
.then(songs => this.setState({songs}))// kete pergjigje e quajme songs dhe kete e dergojme ne setState



.catch(err => {
	console.log(err);
});

}
    render() {
        return (
            <div>
                 <Row className='mt-5 justify-content-center'>
                    {this.state.songs &&
                    this.state.songs.slice(10,11).map(song => <SingleSong props={song} key={song.id} />)}
                </Row>
                <h1>Fetch</h1>
                <Row className='justify-content-center'>
                
                {/* //{console.log(this.state.songs)} */}
                { this.state.songs && 
                    this.state.songs.slice(0,4).map( song => 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={song.album.cover_medium}/>
                  <Card.Body>
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Text>
                    This is the description part, also!
                   </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
                )
                 
                
                }
              
                </Row>
               
            </div>
        )
    }
}
