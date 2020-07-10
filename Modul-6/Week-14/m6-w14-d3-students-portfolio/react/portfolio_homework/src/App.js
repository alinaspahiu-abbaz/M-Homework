import React,{useState, useEffect} from 'react';
import './App.css';
import './index.css'
import {Container, Row, Col,Pagination} from "react-bootstrap"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

import BackOffice from './components/BackOffice';

class App extends React.Component {
 
  render() {
    
  return (
    <>
   
    <MyNavbar  />
   
     
      <Container >
    
      <HomePage/>
    
      </Container>
   </>
  );
}

}

export default App;
