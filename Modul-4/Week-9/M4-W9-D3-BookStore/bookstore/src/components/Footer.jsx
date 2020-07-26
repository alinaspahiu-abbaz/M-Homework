import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from "../image/logoF.png";
import {GrInstagram, GrFacebook, GrTwitter} from "react-icons/gr"






const Footer = () => {
return (
  <div className="d-flex flex-column sticky-bottom" >
    <footer id="foo" className="footer bg-dark text-light foo">
      <Row className="justify-content-center">
        <Col>
          <img className="logo"src={logo} />
        </Col>
       
        <Col>
          <p className='mt-3'>  Tirane, Albania</p>
           <span>&copy; BookStore 2020</span>
           
        </Col>

        <Col>
           <Row  className='justify-content-left pt-2'> <p className= "my-1"> <GrFacebook />   Facebook  </p> </Row>
           <Row  className='justify-content-left'> <p className= "my-1"> <GrInstagram />  Instagram </p> </Row>
           <Row  className='justify-content-left'> <p className= "my-0"> <GrTwitter />    Twitter   </p> </Row>
        </Col>
      </Row>
    </footer>
  </div>

    )
}

export default Footer;