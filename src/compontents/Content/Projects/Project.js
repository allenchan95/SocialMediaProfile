import React from 'react';
import './Project.css';
 const Project = (props) => {
 	return(
 		<div className='Project'>
 			<h1>{props.title}</h1>
 			<div className='content-body'>
 			<p>{props.content}
 			</p>
 
 			</div>
 		</div>
 	
 		)
 }

 export default Project;