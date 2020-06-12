import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFooter from './components/MyFooter'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyFooter />
    </div>
  );
}

export default App;
