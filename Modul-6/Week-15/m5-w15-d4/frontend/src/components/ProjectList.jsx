import React, {Component} from "react"
import {Container, Row} from "react-bootstrap"
import ProjectListItem from "./ProjectListItem"

class ProjectList extends Component {
    render (){
        return(
            <Container className="my-5">
                <Row>
                    {/* {this.props.projects.map(x => <ProjectListItem key={x._id} item={x} />)} */}
                </Row>
            </Container>
        )
    }
}

export default ProjectList