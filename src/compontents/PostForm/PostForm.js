import React,{useState}from 'react';
import {checkValidity} from '../../utility';
import Input from '../../compontents/Input/Input';

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
                    elementType: 'input',
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
	const onSubmitForm = () => {
		console.log('submit');
		props.updateForm(dataForm['Title'].value,dataForm['Content'].value, new Date().toLocaleString());
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
                <div >
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
                      <button  onClick={onSubmitForm} disabled={!formIsValid} >Update</button>
                </div>
            ) ;
	return(
			<div>
				{form}
			</div>
		)
}

export default PostForm;