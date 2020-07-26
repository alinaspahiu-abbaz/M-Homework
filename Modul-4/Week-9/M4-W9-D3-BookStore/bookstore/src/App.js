import React from "react";
import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import JumboTron from "./components/Jumbotron";
import LatestRelease from './components/LatestRelease'


function App()
 {
   return (
           <div className="App">
              <NavBar title="MyBookStore" />
                 <JumboTron/>
                 <LatestRelease />
              <Footer />
           </div> 
          );
 }

export default App;