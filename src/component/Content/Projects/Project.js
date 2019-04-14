import React from 'react';
import './Project.css';
import ImageGallery from '../../ImageGallery/ImageGallery';
 const Project = (props) => {
 	   const forElementsArray = [];
        for (let key in props.imageList) {
            forElementsArray.push({
                id:key,
                config: props.imageList[key]
            });
        }
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
 			    <div className='ImageList'>
             <ImageGallery imageList={forElementsArray} />
 			    </div>
 			  <div className='date'>{props.date} </div>
 			</div>
 		</div>
 	
 		)
 }

 export default Project;