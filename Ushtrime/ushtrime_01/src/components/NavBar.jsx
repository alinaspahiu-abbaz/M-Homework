import React, { Component } from 'react'
import {Container, Navbar, Nav, Form, NavDropdown, FormControl, Button, ListGroup} from 'react-bootstrap';

export default class NavBar extends Component {

    state = {
        data: ''
    }
    fetchData = async () => {
        await fetch("https://striveschool.herokuapp.com/api/profile/", {
          headers: new Headers({
            'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
            "Content-Type": "application/json",
          }),
        })
          .then(response => response.json())
          .then(respObj => this.setState({
            data: respObj,
          }))
      }
    componentDidMount() { this.fetchData()}

    searchField = (searched) => {
        this.setState({ search: searched})
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                
                </Nav>
                <Form inline>
                <FormControl type="text" 
                
                placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>

                <Container>
                <ListGroup>
                    {this.state.data && this.state.search && this.state.data.filter(user =>
                        user.name.toLowrCase().indexOf((this.state.search.toLowerCase()))
                        !== -1).map(user =>
                        <ListGroup.Item> {user.name}</ListGroup.Item>)}
                </ListGroup>
                </Container>

               
            </div>
        )
    }
}
