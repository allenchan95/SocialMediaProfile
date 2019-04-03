import React, { Component } from 'react';
import './App.css';
import Profile from './container/Profile/Profile';

import * as actions from './store/action/index';
import {connect} from 'react-redux';
class App extends Component {
 componentDidMount(){
 	this.props.onTryAutoSignin();
 }
  render() {
    return (
      <div className="App">
      	<Profile />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  }
}
export default connect(null,mapDispatchToProps)(App);
