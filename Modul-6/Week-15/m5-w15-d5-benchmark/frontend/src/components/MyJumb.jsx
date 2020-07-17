import React, { Component } from 'react'
import { Button, Jumbotron, Container, Row } from "react-bootstrap"

export default class MyJumb extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Jumbotron className='mt-3'>
                        <Row className="justify-content-center">
                            <h1>Welcome to Amazon Shop!</h1>
                        </Row>
                        <Row className="justify-content-center">
                            <p>
                                Here you can find the best products in the world!....
                           </p>
                        </Row>




                    </Jumbotron>
                </Container>

            </div>
        )
    }
}
