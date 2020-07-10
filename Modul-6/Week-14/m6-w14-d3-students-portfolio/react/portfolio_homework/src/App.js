import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css'
import { Container, Row, Col, Pagination } from "react-bootstrap"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import BackOffice from './components/BackOffice';

class App extends React.Component {

  render() {

    return (
      <>

        <MyNavbar />


        <Container >

          <HomePage />
          <Row className="mt-3 justify-content-center">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />


              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item >{3}</Pagination.Item>




              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>

        </Container>
      </>
    );
  }

}

export default App;
