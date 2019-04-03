import React, { Component } from 'react';
import './App.css';
import Profile from './container/Profile/Profile';
import Nav from './compontents/Nav/Nav';

class App extends Component {
	
	




  render() {
    return (
      <div className="App">
      	<Nav ><Profile /></Nav>

      </div>
    );
  }
}

export default App;
