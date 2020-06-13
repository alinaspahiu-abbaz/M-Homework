import React from 'react';

import MyFooter from './components/MyFooter'
import Search from './components/Search';
import SpotifyNavBar from './components/SpotifyNavBar'
import {Container, Row, Col} from 'react-bootstrap'
import './App.css'



function App() {
  return (
    <div className="App">
      <Container fluid> 
        <Row>
          <Col sm={"none"} md={2}> 
            <SpotifyNavBar />
          </Col>

          <Col  md={10}>
             <Search />
          </Col>

        <MyFooter />
        </Row>
        </Container>
      

      
     
    </div>
  );
}

export default App;
