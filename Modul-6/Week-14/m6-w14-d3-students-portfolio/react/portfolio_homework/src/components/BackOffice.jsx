import React, { Component } from 'react'
import Students from "./Students"
import { Accordion, Card, Col, Button, Row, Container } from "react-bootstrap"
import SingleStudentListItem from './SingleStudentListItem'


export default class BackOffice extends Component {
    state = {
        students:[]
    }

    render() {
        return (
            <Container>
                <Row>
            
                    {this.state.students.map(student =>
                        <Col md={4}>
                         <SingleStudentListItem item={student} />
                         </Col>
                         )}
                </Row>
            </Container>

        )
    }
    componentDidMount = async () => {

        const studentsResp = await fetch("http://localhost:3035/students")
        const students = await studentsResp.json()
        this.setState({
            students: students
        })
        console.log(students)
    }


}
