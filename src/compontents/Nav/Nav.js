import React from 'react';
import './Nav.css';
const Nav = (props) => {
return (
	     	<div>
	          <div className='Nav'>
	          <ul>
	           	<li><input type="search"  className='search' placeholder="Keywords"/><div></div></li>
	          </ul>
	          </div>

	          {props.children}
			 </div>
	    

      );
 }

export default Nav;