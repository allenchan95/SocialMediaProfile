import React from 'react';
import './profileNav.css';
import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
const profileNav = (props) => {

return (
	<div className='app-container'>
	 <div className='container'>
		<Nav className='Nav' onSearchClicked={props.onShowSearchFormClicked}/>
		  <div className='bg' > 
		  </div>
		 	{!props.showSearch?
			 	<nav className='nav' >
			          <div className='icon-container'><img className='icon' src={props.IconUrl} alt='icon' onClick={props.onIconClick}/></div>
			          <div className='profileNav'>
		          {props.isAuthenticated? 
		          	<ul>
			           <li onClick={props.onUpdateFormClick}><p>UPDATE PROFILE</p></li>
			           <li onClick={props.onPostFormClick}><p>NEW POST</p></li>
		            </ul>
		            :null
	          	}
	          </div>
	        </nav>:null}

        </div>
    </div>

      );
 }
const mapStateToProps = state => {
	return {
		
		isAuthenticated : state.auth.token !== null,
		
	}
}

export default connect(mapStateToProps,null)(profileNav);