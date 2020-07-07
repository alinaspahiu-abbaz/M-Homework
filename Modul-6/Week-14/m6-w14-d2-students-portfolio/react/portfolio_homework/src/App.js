import React from 'react';
import './App.css';
import {Container, Row, Col} from "react-bootstrap"
import HomePage from "./components/HomePage"

class App extends React.Component {
  render() {
    
  return (
    <Container>
      <Row>
        <HomePage />
      </Row>
    </Container>
  );
}
}

export default App;
