import React from 'react';
import './ProfileCard.css';
 const profileCard = (props) => {
 	return(
 		<div className='card'>
 			<div className='name'>{props.name}</div>
 			<div className="tag">{props.intro}</div>
 			<div className="tag">{props.location}</div>
 			<div className="tag"><a href={props.website} target='_blank'  rel="noopener noreferrer">@{props.name}</a></div>
 			<div className="tag">Joined May 2009</div>
 		</div>
 		)
 }

 export default profileCard;