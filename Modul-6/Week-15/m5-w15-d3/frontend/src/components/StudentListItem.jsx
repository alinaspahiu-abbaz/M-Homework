import React, { Component } from "react"
import { Col, Image,Row, Button, Card } from "react-bootstrap"

class StudentListItem extends Component {

    componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3028/students")
        //http://localhost:3032/students
        //http:&//localhost:5432/students
        const students = await res.json()
        this.setState({
          students: students.rows
        })
      }

    deleteStudent = async(_id) => {
        const res = await fetch("http://localhost:3028/students/" + _id, {
            method:"DELETE"
        })
        if(res.ok){
            // here we contact with parent to delete this is(book). The parent is on the BackOffice Component
            //this.props.onDelete(_id)
            alert("Deleted!")
        window.location.reload()      }

    }
  
    render() {
        const { _id, name, surname, birthday, email, img } = this.props.item
        return (
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    
                    <Card.Body>
                    <Row className="justify-content-center">
                        <Card.Title>{name} - {surname}</Card.Title>

                        
                        <Card.Text>
                         <Row className="justify-content-center">
                            {email}

                         </Row>
                         <Row className="justify-content-center">

                            {birthday}
                         </Row>
                            
                         
                            
                           
                    </Card.Text>   
                    <Row>
                        <Button className="mr-2" variant="outline-success">Projects</Button>
                        <Button className="mr-2" variant="outline-info">Edit</Button>
                        <Button 
                       onClick= {() => this.deleteStudent(_id) }
                        variant="outline-danger">Delete</Button>
                    </Row> 
                        
                        </Row>
                    </Card.Body>
                   
                </Card>

            </Col>
        )
    }
}

export default StudentListItem