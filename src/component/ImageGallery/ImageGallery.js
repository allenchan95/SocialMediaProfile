import React,{useState} from 'react';
import classes from './ImageGallery.module.css';

import Modal from '../Modal/Modal';
import Image from './Image/Image';
const ImageGallery = (props) => {
	const [showModal,setShowModal] = useState(false);
	const [iconUrl,setIconUrl] = useState('');
	const [style,setStyle] = useState('Modal ModalClosed');
	const ModalToggle = (url) => {
		if (style === 'Modal ModalClosed' ){
			setStyle('Modal ModalOpen')
		}else{
			setStyle('Modal ModalClosed')
		}
		setIconUrl(url);
		setShowModal(!showModal);
	}

	return(
		<div>		
			<Modal style={style} show={showModal} closed={()=>ModalToggle(iconUrl)}>
				{showModal ? <img className={classes.ModalImage}src={iconUrl} alt='icon' />:null}
			</Modal>
			<div className={classes.ImageGallery}>
				{
					props.imageList.map(formElement => (
                        
                           		 <Image key={formElement.config.id} url={formElement.config.url} clicked={()=>ModalToggle(formElement.config.url)} />
                           
                         ))
			}
			</div>
		</div>
		)
}
export default ImageGallery;