import React from 'react';
import classes from './Image.module.css';

const Image = (props) => {
	
	return(
		<div className={classes.ImageContainer}>
			<div className={classes.ImageBorder}>
				<img className={classes.Image} src={props.url} alt='userImage' onClick={props.clicked}/>
			</div>
		</div>
		)
}

export default Image;