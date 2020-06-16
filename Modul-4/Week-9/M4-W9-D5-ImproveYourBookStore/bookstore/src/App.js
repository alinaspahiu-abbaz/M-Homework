import React from "react";
import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import JumboTron from "./components/Jumbotron";
import MyBooks from "./components/MyBooks";
import LatestRelease from './components/LatestRelease'
import {Container, Row, Col} from "react-bootstrap";




class App extends React.Component {
 render(){
   return (
     
           <div className="App">
              <NavBar title="MyBookStore" />
                <Container>
                  <JumboTron/>
                  <LatestRelease />
                </Container>
              <Footer />
           </div>
           

           
          );
 }
}
export default App;