import React from 'react';
import './Nav.css';
import Spinner from '../../component/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/action/index';
const Nav = (props) => {
return (
	     	<div>
	          <div className='Nav'>
	          {props.loading?<Spinner />:null}
	          <ul>
	          {props.isAuthenticated? 
	          		<li onClick={()=>props.onLogout()}><div>SIGNOUT</div></li>
	          	: <li onClick={()=>props.onAuth('a@gmail.com','123123',false)}><div>SIGNIN</div></li>
	          }
	          	
	           	<li><input type="search"  className='search' placeholder="Keywords"/><div></div></li>
	          </ul>
	          </div>
	        	  {props.children}
			 </div>
	    

      );
 }

const mapStateToProps = state => {
	return {
		token : state.auth.token,
		isAuthenticated : state.auth.token !== null,
		userId :state.auth.userId,
		loading :state.auth.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout()),
		onAuth: (email,password,isSignup) => dispatch(actions.auth(email,password,isSignup))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);