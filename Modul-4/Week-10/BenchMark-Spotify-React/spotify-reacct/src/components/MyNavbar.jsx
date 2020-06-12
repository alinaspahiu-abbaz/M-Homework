import React from "react";
import {Navbar} from 'react-bootstrap';


  class MyNavbar extends React.Component {
    render() {
        const mystyle = {
            position: "sticky",
            top: "0",
            height: "130 vh",
           
            alignContent: "space-between",
          };
          const mystyle1 = {
            backgroundColor: "black",
            color: "whitesmoke", 
            border: "1px solid white", 
            fontWeight: "500",
            
          };
        
        return (
<div className="conatiner-fluid home-content">
      <div className="row w-100 ml-0 mr-0">
        <nav className="col-sm-3 col-md-3 col-lg-2 d-none d-md-block  sidebar">
          <div className="sidebar-sticky d-flex   flex-column justify-content-between" style={ mystyle}>
            
    <Navbar  expand="lg" id="Navbar">
    <div className="col" >
                <ul className="nav flex-column justify-content-center  mb-3  mb-auto">
                    <li className="nav-item mt-2  w-100 justify-content-center align-items-center">
                    <i className="fa fa-spotify" style={{fontSize: "35px"}}>Spotify</i>
                    </li>
                    <li className="mt-3  nav-item active"><a href="/"><i className="fa fa-home mr-3"></i>Home</a></li>
                    <li className="mt-3  nav-item"><a href="/"><i className="fa fa-search mr-3"></i>Search</a></li>
                    <li className="mt-3  nav-item"><a href="/"><i className="fa fa-book  mr-3"></i>Your Library</a></li>
                    </ul>
         <div className="col d-flex flex-column w-100">
                <ul className="nav flex-column justify-content-center align-items-center w-100 mt-auto pb-5">
                  <li className="nav-item w-100 mb-3">
                      <button type="button" className="btn btn-light  w-100 rounded-pill" style={{fontWeight:"500", marginTop: "350px"}}>SIGN UP</button>
                  </li>
                  <li className="nav-item w-100 mb-2">
                     <button type="button" onClick="goToLogin()" className="btn btn-secondary w-100 rounded-pill" style={mystyle1}>LOGIN</button>
                  </li>
                  <li className="nav-item">
                    <small className="mr-2">Cookie</small>|<small className="ml-2">Privacy Policy</small>
                  </li>
                 
                </ul>
         </div>
    </div>
    
    </Navbar>
</div>
</nav>
<div className="col-sm-9 col-md-9 col-lg-10 pb-sm-4 " >
              <nav className="navbar navbar-expand-lg navbar-light   pt-3 mb-3">
                 
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                 <div className="d-flex align-items-center m-auto">
                      <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto ">
                          <li className="nav-item active mr-3">
                            <a className="nav-link bolder" href="#">Trending <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item mr-3">
                            <a className="nav-link bolder" href="#">Podcast</a>
                          </li>
                         
                          <li className="nav-item mr-3">
                            <a className="nav-link bolder" href="#" >Moods and genres</a>
                          </li>
                          <li className="nav-item mr-3">
                              <a className="nav-link bolder" href="#" >New Releases</a>
                            </li>
                            <li className="nav-item mr-3">
                              <a className="nav-link bolder" href="#" >Discover</a>
                            </li>
                        </ul>
                       
                      </div>
                 </div>
                </nav>
          <div>
               
                <div className="row">
              <div className="col-10"></div>
            </div>
            <div className="row ml-5">
              <div className="col-10">
                <div id="rock">
                  <h2>Eminem</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="Eminem"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row ml-5">
              <div className="col-10">
                <div id="rock">
                  <h2>Rihanna</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="Rihanna"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row ml-5">
              <div className="col-10">
                <div id="rock">
                  <h2>Metallica</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="Metallica"
                  ></div>
                </div>
              </div>
            </div>
            </div>



           </div>

                



</div>
</div>
 );
        };
};
export default MyNavbar;