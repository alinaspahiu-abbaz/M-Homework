import React from 'react';
import './App.css';
import {Container, Row, Col} from "react-bootstrap"
import HomePage from "./components/HomePage"
import {Router, Switch, Route} from "react-router"
import BackOffice from './components/BackOffice';

class App extends React.Component {
  render() {
    
  return (
    // <Router>
    
    //     <Switch>
    //       <Route path="/details/:_id">
    //         <div> Details for a single Student</div>
    //       </Route>

    //       <Route path="/backoffice">
    //         <BackOffice />
    //       </Route>

    //       <Route path="/" exact>
    //         <HomePage />
    //       </Route>
    //     </Switch>
     
    // </Router>
    <HomePage />
  );
}
}

export default App;
