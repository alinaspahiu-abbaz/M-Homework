import React, {Component} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';


export default class search extends Component {

   state={
       loading: false,
       searchValue: '',
       data: []
   }
   componentDidMount(){
       
       console.log(this.state.data)
   }
   fetch(value) {
       const get = {
           method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/search/track/title?q=${value}`,
           headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
           },

           }
           axios(get).then(data => this.setState({data: data.data.data.slice(0,12)}))
           
           
       
   }
    render() {
    
    return(
        <>
        <Container fluid>
            <Row>
                <Col lg={2}>
                </Col>
                <Col lg={10}>
                <Form.Control onChange={ (e) => {
                    this.fetch(e.target.value);
                    if(e.target.value.length >3) {
                          this.setState({searchValue: e.target.value,
                                       loading:true})
                          
                       
                    } else { this.setState({loading:false})

                    }
                         }}
                            className='w-25' size="sm" type="text" placeholder="Small text" />
                    <Container fluid>
                        {this.state.loading ? 
                        <Row> {
                        this.state.data.map(element =>
                            {
                                return (
                                    <Col lg={2}>
                                    <img src = {element.album.cover_medium}classNAme='img-fluid' />
                                    <p>{element.artist.id}</p>
                                    <p>{element.title}</p>
                                    </Col>
                                )
                            })
                         } </Row> 
                        : <div>Loading</div>
    }
                    </Container>
                
                </Col>
            </Row>
        </Container>
        </>

    )}
}