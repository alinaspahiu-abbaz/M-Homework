import React, {Component} from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';



const nav1 = {
  backgroundColor:'black',
  color: "white",
  width: '30%',
  height: '85vh',
  margin: '0',
  paddingLeft: '0'
  };
 class SpotifyNavBar extends Component{
  

 
  

    render(){
       return(
            
               <>
                <Col >
                   <Nav className='nav-1' >
                    <ul className='nav-1'>
                      <li><h2><i className="fa fa-spotify"></i> SPOTIFY</h2></li>
                      <li><i className="fa fa-home p-2"></i>Home</li>
                      <li><i className="fa fa-search p-2"></i>Search</li>
                      <li><i className="fa fa-bookmark p-2"></i>Your Library</li>
                     </ul>
 


                   </Nav>
                </Col>
              </>
            
        )
    }
}

export default SpotifyNavBar;