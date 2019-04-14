import React,{useState} from 'react';
import classes from './ImageUpload.module.css';
import icon from '../../../assets/images/image-upload.png';
import {checkValidity} from '../../../utility';

const imageUpload = (props) =>{
	const [showForm,setShowForm] = useState(false);
	const [url,setUrl] = useState('');
	const [vaild,setVaild] = useState(false);
	const [touched,setTouched] = useState(false);
	const onImageClick = () => {
		setShowForm(!showForm);
		setTouched(false);
		setVaild(false);
	}
	const onOkayButtonClick = () => {
		props.upload('sadas',url);
		setShowForm(!showForm);
		setTouched(false);
		setVaild(false);
		console.log(url);
	}
	const onInputChange = (event) => {
		const valication = checkValidity(event.target.value, {isImage:true});
		setTouched(true);
		setVaild(valication);
		setUrl(event.target.value);

	}

	const form = <div className={classes.ImageForm}>
						
						{ showForm?
							<div>
								<input className={classes.Input} type='text' placeholder='YOUR IMAGE URL HERE' onChange={onInputChange}  />
								<button className={classes.Button} disabled={!vaild} onClick={onOkayButtonClick}>OKAY</button>
								{ !vaild && touched ? 
									<div className={classes.tag}>PLEASE ENTER VAILD IMAGE URL </div>
									:null
								}
							</div>
							:<div className={classes.ImageIcon}><img className={classes.img} src={icon} alt='icon' onClick={onImageClick}/>
						</div>}
				 </div>
	return(
		<div className={classes.ImageFormContainer}>
			{form}
			
		</div>
		)
}

export default imageUpload;