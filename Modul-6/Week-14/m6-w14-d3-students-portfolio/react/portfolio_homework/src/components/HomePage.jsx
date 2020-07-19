import React, { Component } from 'react'
import Students from "./Students"
import { Accordion, Card, Col, Button, Row, Container } from "react-bootstrap"
import SingleStudent from './SingleStudent'


export default class HomePage extends Component {
    state = {
        students:[],
       
    }
    
  
      
    render() {
        return (
            <Container >
                <Row >
            
                    {this.state.students.map(student =>
                        <Col md={4}>
                         <SingleStudent item={student} />
                         </Col>
                         )}
                </Row>
            </Container>
         

        )
    }
    
    componentDidMount = async () => {

        const studentsResp = await fetch("http://localhost:3032/students")
        const students = await studentsResp.json()
        this.setState({
            students: students
       
         
        })
      
    }


}
