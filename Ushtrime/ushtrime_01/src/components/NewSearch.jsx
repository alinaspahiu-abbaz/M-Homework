import React, { Component } from 'react'
import {Form, FormControl, Button, Row, Col, Container} from 'react-bootstrap'

export default class NewSearch extends Component {

    state ={
        songs: [],
        search: ''
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
                songs: data.data
            });
        }
    }

  updateState = (event) => {
      this.setState({
          search: event.currentTarget.value
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
                <Button variant="outline-success">Search</Button>
               
                </Row>
                </Container>
            </div>
            </>
           
        )
    }
}
