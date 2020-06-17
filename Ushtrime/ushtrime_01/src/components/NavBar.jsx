import React, { Component } from 'react'
import {Dropdown, Navbar, Nav, Form, FormControl, Button, ListGroup} from 'react-bootstrap';

export default class NavBar extends Component {
  


   

    render() {
        return (
            <div>
                <Navbar 
                bg="dark" 
                variant='dark' 
                expand="lg"
                >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Dropdown show={this.props.status} className="mt-5">
                <Dropdown.Menu> {this.props.users} </Dropdown.Menu>
                </Dropdown>

                <Form inline>
                <FormControl onChange={(e) => this.props.search(e.currentTarget.value)} style={{width: 200}}
                type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>

               

               
            </div>
        )
    }
}
