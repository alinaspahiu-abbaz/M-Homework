import React, {Component} from 'react';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';


 class MediaPlayer extends Component{
    render(){
        return(
            <Container fluid className='bg-dark'>
                <Row>
                    <Col lg={3}>
                    
                  
                    </Col>

                    <Col lg={6}>
                 
                    <ProgressBar varian='success' now={40} />
                    </Col>

                    <Col lg={3}>
                   
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MediaPlayer