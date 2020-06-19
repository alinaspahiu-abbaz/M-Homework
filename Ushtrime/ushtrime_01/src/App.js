import React, { Component } from 'react';
import './App.css';
import { Container, ListGroup, Dropdown } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NewSearch from './components/NewSearch'
import SearchLinkedInProfile from './components/SearchLinkedInProfile';



class App extends Component {


  // state = {
  //   data: '',
  //   search: null,
  //   status: false
  // }

  // fetchData = async () => {
  //   await fetch("https://striveschool.herokuapp.com/api/profile/", {
  //     headers: new Headers({
  //       'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
  //       "Content-Type": "application/json",
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(respObj => this.setState({
  //       data: respObj,
  //     }))

  // }

  // componentDidMount() {
  //   this.fetchData()
  // }

  // searchedField = (searched) => {
  //   if (searched) {
  //     this.setState({
  //       search: searched,
  //       status: true
  //     });
  //   } else {
  //     this.setState({
  //       search: '',
  //       status: false
  //     });
  //   }
  // }


  render() {
    return (
      <div className="App">
        {/* <NavBar 
        search={this.searchedField} 
        status={this.state.status} 
        users={this.state.data && this.state.search &&
          this.state.data.filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase())).length > 0 ?
          this.state.data
            .filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
            .map((user, i) =>
              <Dropdown.Item key={i} href="#/action-1">{user.name}</Dropdown.Item>
            )
          :
          <Dropdown.Item href="#/action-1">No user</Dropdown.Item>
        } /> */}
        <NewSearch />
        {/* <Home /> */}
       {/* <SearchLinkedInProfile /> */}
      </div>

    );
  }
}

export default App;