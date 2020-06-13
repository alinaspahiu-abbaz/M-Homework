import React, {Component} from 'react';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';


 class MyFooter extends Component{
    render(){
        return(
            <Container fluid className='bg-dark' >
                <Row className='theFooter'>
                    <Col lg={3}> </Col>

                    <Col lg={6} >
                        <Row className='justify-content-center'>
                           <button class="btn-dark btnStyle" onclick="playBack()"><i class="fa fa-random pr-2 pt-1"></i></button>
                           <button class="btn-dark btnStyle" onclick="togglePlay()" id="play"><i class="fa fa-step-backward pr-2 pt-1"></i></button>
                           <button class="btn-dark btnStyle" id="play" onclick="playNext()"><i class="fa fa-play-circle pr-2"></i></button>
                           <button class="btn-dark btnStyle" onclick="loop()" id="loop"><i class="fa fa-step-forward pr-2 pt-1"></i></button>
                           <button class="btn-dark btnStyle"><i class="fa fa-retweet pt-1"></i></button>
                        </Row>
                           <div className='mb-1'> <ProgressBar variant='success' now={60} /> </div>
                    </Col>

                    <Col lg={3}>
                        {/* <Row> <button class="btn-dark text-dark btnStyle"><i class="fa fa-retweet pt-1"></i></button> </Row>
                         <div className='mb-1 justify-content-end'> <ProgressBar className='w-50' variant='success' now={60} /> </div> */}
                   
                   
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MyFooter;