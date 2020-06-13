import React from 'react';

import MyFooter from './components/MyFooter'
import Search from './components/Search';
import SpotifyNavBar from './components/SpotifyNavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <SpotifyNavBar />
      
       <MyFooter />

      
     
    </div>
  );
}

export default App;
