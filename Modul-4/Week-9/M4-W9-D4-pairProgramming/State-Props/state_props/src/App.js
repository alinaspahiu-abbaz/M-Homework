import React from 'react';
import logo from './logo.svg';
import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook'

function App() {
  return (
    <div className="App">
      <WarningSign />
      <h1> Hello <MyBadge /></h1>
      <SingleBook />
    </div>
  );
}

export default App;
