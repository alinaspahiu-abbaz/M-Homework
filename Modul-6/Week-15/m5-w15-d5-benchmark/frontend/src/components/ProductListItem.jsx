import React, { Component } from "react"
import { Col, Image, Row, Button, Card } from "react-bootstrap"

class ProductListItem extends Component {

    componentDidMount = async () => {
        const res = await fetch("http://localhost:4000/products")
        //http://localhost:3032/products
        //http:&//localhost:5432/products
        const products = await res.json()
        this.setState({
            products: products
        })
    }

    deleteProduct = async (p_id) => {
        const res = await fetch("http://localhost:4000/products/" + p_id, {
            method: "DELETE"
        })
        if (res.ok) {
            // here we contact with parent to delete this is(book). The parent is on the BackOffice Component
            //this.props.onDelete(studentId)
            alert("Deleted!")
            window.location.reload()
        }

    }

    render() {
        const { p_id, name, description, imgUrl, category, price } = this.props.item
        return (
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="img" src={imgUrl} />

                    <Card.Body>
                        <Row className="justify-content-center">
                            <Card.Title>{name}</Card.Title>
                        </Row>

                        <Row className="justify-content-center">
                            <Card.Text>
                            <Row> {category}</Row>
                               <Row> {description}</Row>
                            </Card.Text>
                        </Row>
                        <Row className="justify-content-center mt-4">
                            {/* <Button className="mr-2" variant="outline-success">Reviews</Button> */}
                            <Button className="mr-2" variant="outline-info">Edit</Button>
                            <Button
                                onClick={() => this.deleteProduct(p_id)}
                                variant="outline-danger">Delete</Button>
                        </Row>


                    </Card.Body>

                </Card>

            </Col>
        )
    }
}

export default ProductListItem