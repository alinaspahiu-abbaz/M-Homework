import React, { Component } from 'react'
import {FormControl, Button, Row, Col, Container, Card} from 'react-bootstrap'

export default class NewSearch extends Component {

    state ={
        songs: [],
        search: '',
        favoriteSongs:[]
    }

    fetchData = async () => {
        let resp = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=` + this.state.search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
            }
        })
        if (resp.ok) {
            const data = await resp.json()
            this.setState({
                songs: data.data.filter(song => song.album.title="Kalbimin Sultanı")
                
            });
        }
    }

    
    updateState = (event) => {
        this.setState({
            search: event.currentTarget.value
        });}

    kengaPreferuar = (kenga) => {
        this.setState({
            songs: this.state.songs.filter(song => song.id !== kenga.id),
            favoriteSongs:[...this.state.favoriteSongs, kenga]// this.state.favoriteSongs.concat(kenga)
        })
    }



    render() {
        return (
            <>
            
            <div> 
                <Container>
                <Row className='justify-content-center mt-3'>
                  
                 <FormControl 
                 onChange={this.updateState}
                 type="text" 
                 placeholder="Search" 
                 className="mr-sm-2" />
                <Button 
                onClick={() => this.fetchData()}
                variant="outline-success">Search</Button>
               
                </Row>
                <Row>
                    <h1> Songs </h1>
                    <Col>
                    {this.state.songs.map(song =>
                    <Card onClick={()=>this.kengaPreferuar(song)} style={{width: '18rem'}}>
                      <Card.Img variant='top' src={song.album.cover_xl} />
                        <Card.Body>
                            <Card.Title>{song.title}</Card.Title>
                        </Card.Body>
                    </Card>
                    )}
                    </Col>
                    <h1>Best Songs</h1>
                    <Col>
                    

                    {this.state.favoriteSongs.map(song =>
                    <Card style={{width: '18rem'}}>
                      <Card.Img variant='top' src={song.album.cover_xl} />
                        <Card.Body>
                            <Card.Title>{song.title}</Card.Title>
                        </Card.Body>
                    </Card>
                    )}
                    
                    </Col>
                </Row>
                </Container>
            </div>
            </>
           
        )
    }
}
