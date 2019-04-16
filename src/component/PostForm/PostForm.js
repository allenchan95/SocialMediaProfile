import React,{useState}from 'react';
import {checkValidity} from '../../utility';
import Input from '../../component/Input/Input';
import classes from './PostForm.module.css';
import ImageUpload from './ImageUpload/ImageUpload';
const PostForm = (props) => {
const [dataForm,setDataForm] = useState({
                Title: {
                	elementType: 'input',
                	elementConfig: {
                		type: 'text',
                		placeholder:"POST TITLE"
                	},
                	value: props.icon,
                	validation: {
                		required: true
                	},
                	valid: false,
                	touched: false
                },
                Content: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'textarea',
                        placeholder:"POST CONTENT"
                    },
                    value: props.name,
                    validation: {
                        required: true,
                        maxLength: 200
                    },
                    valid: false,
                    touched: false
                }
		});
const [formIsValid, setformIsValid] = useState(false);
	const inputChangeHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...dataForm
		};
		const updatedFormElement = { 
			...updatedOrderForm[inputIdentifier] 
		};
		updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm){
            if(updatedOrderForm[inputIdentifier].value){
                updatedOrderForm[inputIdentifier].valid = checkValidity(updatedOrderForm[inputIdentifier].value, updatedOrderForm[inputIdentifier].validation);
            }
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		setformIsValid(formIsValid);
		setDataForm(updatedOrderForm);

	}
const [imageList,setImageList] = useState([]);
    const onUploadImage = (key,url) =>{
        const imageElementsArray = [];
         for (let index in imageList){
                imageElementsArray.push({
                    id:index,
                    url: imageList[index].url
                })
    }
        imageElementsArray.push({
            id:key,
            url:url
        })
        setImageList(imageElementsArray);
       
    }
    const deleteImage = (index) =>{
       const  value = imageList[index];
    
       let array =  imageList.filter(item => item !== value)
       setImageList(array);
    }



	const onSubmitForm = () => {
		props.updateForm(dataForm['Title'].value,dataForm['Content'].value, new Date().toLocaleString(),imageList);
        props.closed();
	}

        const forElementsArray = [];
        for (let key in dataForm) {
            forElementsArray.push({
                id:key,
                config: dataForm[key]
            });
        }

        let form = (
                <div  className={classes.wrapper}>
                     {forElementsArray.map(formElement => (
                         <Input 
                             label={formElement.id}
                             key={formElement.id}
                             elementType={formElement.config.elementType}
                             elementConfig={formElement.config.elementConfig}
                             value={formElement.config.value? formElement.config.value : '' } 
                             invalid={!formElement.config.valid}
                             shouldValidate={formElement.config.validation}
                             touched={formElement.config.touched}
                             changed={(event) => inputChangeHandler(event,formElement.id)}
                            />
                         ))}
                     <div className={classes.ImageList}>
                         {imageList.map((formElement,index) => (
                            <div  onClick={()=>{deleteImage(index)}} key={formElement.id} className={classes.Image} > <img src={formElement.url}  alt='uploaded'/></div>
                         ))
                     }
                     
                       </div>
                      <ImageUpload  upload={onUploadImage}/>

                      <button className={classes.Button} onClick={onSubmitForm} disabled={!formIsValid} >POST</button>
                </div>
            ) ;
	return(
			<div>
				{form}
			</div>
		)
}

export default PostForm;