import React, { Component } from "react"
import { Col, Image,Row, Button, Card } from "react-bootstrap"

class ProjectListItem extends Component {

    componentDidMount = async ()=>{
        const res = await fetch("http://localhost:4000/projects")
        //http://localhost:3032/students
        //http:&//localhost:5432/students
        const projects = await res.json()
        this.setState({
          projects: projects.rows
        })
      }

    deleteProject = async(projectId) => {
        const res = await fetch("http://localhost:4000/projects/" + projectId, {
            method:"DELETE"
        })
        if(res.ok){
            // here we contact with parent to delete this is(book). The parent is on the BackOffice Component
            //this.props.onDelete(_id)
            alert("Deleted!")
        window.location.reload()      }

    }
  
    render() {
        const { projectId, name, repoUrl, liveUrl, description, creationDate } = this.props.item
        return (
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    
                    <Card.Body>
                    <Row className="justify-content-center">
                        <Card.Title>{name} - {projectId}</Card.Title>

                        
                        <Card.Text>
                         <Row className="justify-content-center">
                            {description}

                         </Row>
                         
                            
                         
                            
                           
                    </Card.Text>   
                    <Row>
                        <Button className="mr-2" variant="outline-success">Projects</Button>
                        <Button className="mr-2" variant="outline-info">Edit</Button>
                        <Button 
                       onClick= {() => this.deleteProject(projectId) }
                        variant="outline-danger">Delete</Button>
                    </Row> 
                        
                        </Row>
                    </Card.Body>
                   
                </Card>

            </Col>
        )
    }
}

export default ProjectListItem