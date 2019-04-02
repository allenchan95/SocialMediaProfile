import React from 'react';
import './profileNav.css';
const profileNav = (props) => {
return (
	<div className='app-container'>
		<div className='container'>
		  <div className='bg' > </div>
	       <nav className='nav' >
	          <div className='icon-container'><img className='icon' src={props.IconUrl} alt='icon' onClick={props.onIconClick}/></div>
	          <div className='profileNav'>
	          <ul>
	           <li onClick={props.onUpdateFormClick}><p>UPDATE PROFILE</p></li>
	           <li onClick={props.onNewPost}><p>NEW POST</p></li>
	          </ul>
	          </div>
	        </nav>
        </div>
    </div>

      );
 }

export default profileNav;