import React, {Component} from "react"
import {Container, Row} from "react-bootstrap"
import StudentListItem from "./StudentListItem"

class StudentList extends Component {
    render (){
        return(
            <Container className="my-5">
                <Row>
                    {this.props.students.map(x => <StudentListItem key={x.studentId} item={x} />)}
                </Row>
            </Container>
        )
    }
}

export default StudentList