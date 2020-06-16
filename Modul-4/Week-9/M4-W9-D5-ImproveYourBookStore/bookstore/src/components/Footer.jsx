import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from "../image/logoF.png";






const Footer = () => {
return (
  <div className="d-flex flex-column sticky-bottom" >
    <footer id="foo" className="footer bg-dark text-light foo">
      <Row>
        <Col>
          <img src={logo} />
        </Col>
       
        <Col>
          <p className='mt-3'>  Tirane, Albania</p>
           <span>&copy; BookStore 2020</span>
           
        </Col>

        <Col>
           <p className='mb-0 mt-3'>Facebook</p>
           <p className='m-0'>Instagram</p>
           <p className='m-0'> Twitter</p>
        </Col>
      </Row>
    </footer>
  </div>

    )
}

export default Footer;