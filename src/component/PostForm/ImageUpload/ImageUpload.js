import React,{useState} from 'react';
import classes from './ImageUpload.module.css';
import icon from '../../../assets/images/image-upload.png';


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
	}


	const handleImageChange= (e)=> {
	    e.preventDefault();
	    let reader = new FileReader();
	    let file = e.target.files[0];
	    reader.onloadend = () => {
		      setUrl(reader.result);
		      setTouched(true);
			  setVaild(true);
	    }

	    reader.readAsDataURL(file)
  }

	const form = <div className={classes.ImageForm}>
						
						{ showForm?
							<div>
								
							<div className={classes.file} onChange={(e)=>handleImageChange(e)}>
							{vaild ? "FILE CHOSEN" : "CHOSE A FILE"}
								    <input type="file"  accept="image/x-png,image/gif,image/jpeg" />
								<button className={classes.Button} disabled={!vaild} onClick={onOkayButtonClick}>OKAY</button>
								{ !vaild && touched ? 
									<div className={classes.tag}>PLEASE ENTER VAILD IMAGE URL </div>
									:null
								}
							</div>
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