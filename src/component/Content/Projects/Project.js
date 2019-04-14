import React from 'react';
import './Project.css';
 const Project = (props) => {
 	
 	return(
 		<div className='Project'>
 			<h3>{props.title}</h3>
 			<div className='content-body'>

 			  <p>
 			
              {props.content.split('\n').map(function(item,index) {
                  return (
                    <span key={index}>
                      {item}
                      <br/>
                    </span>
                  )
                })} </p>
 			<div className='date'>{props.date} </div>
 			</div>
 		</div>
 	
 		)
 }

 export default Project;