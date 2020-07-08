import React, { Component } from 'react'
import {Container, Row, Col, Button} from "react-bootstrap"

export default class Students extends Component {
    state ={
        students:[],
        
    }
    
    
    render() {
      

        return (
            <Container>
     
            <div>
            { this.state.students.map(student =>
                <Row className="mb-3">
                 
                 <Col sm={2}>{student.name}</Col> 
                 <Col sm={2}>{student.surname}</Col>
                 <Col sm={2}>{student.email}</Col>
                 <Col sm={2}>{student.year}</Col>
                 <Col sm={2}>{student.country}</Col>
                 <Col sm={2}><Button className="mr-2" variant="info">Edit</Button>
                 <Button variant="danger"

                 >Delete</Button></Col>
               
                 
                 </Row> )}
            </div>
        </Container>
        )
    }
    componentDidMount = async () => {

        const studentsResp = await fetch("http://localhost:3032/students")
        const students = await studentsResp.json()
        this.setState({
            students: students
        })
        console.log(students)
    }
}
