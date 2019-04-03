import React from 'react';
import ProfileCard from './ProfileCard/ProfileCard';
import Projects from './Projects/Project';
import './Content.css';
 const Content = (props) => {
 	    const forElementsArray = [];
        for (let key in props.posts) {
            forElementsArray.push({
                id:key,
                config: props.posts[key]
            });
        }

        let form = (
                <div className='item2'>
                     {forElementsArray.map(formElement => (
                        <Projects
                             key={formElement.id}
                             title={formElement.config.title}
                             content={formElement.config.content}
                             date={formElement.config.date}
                            />
                         ))}
                  
                </div>
            ) ;


 	return(
 		<div className='grid-container'>
 			<div className='item1'>
	 			<ProfileCard 
	 			name={props.name} 
	 			intro={props.intro}
	 			location={props.location}
	 			website={props.website} 
	 			/>
 			</div>
 			{form}
 
 		</div>
 		)
 }

 export default Content;