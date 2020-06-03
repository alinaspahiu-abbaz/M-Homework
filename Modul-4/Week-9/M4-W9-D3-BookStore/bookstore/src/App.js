import React from "react";
import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import JumboTron from "./components/Jumbotron";
import Books from "./components/Books";


function App()
 {
   return (
     <>
           <div className="App">
              <NavBar title="MyBookStore" />
              <JumboTron/>
              <Books />
              <Footer />
           </div>
           </>

           
          );
 }

export default App;