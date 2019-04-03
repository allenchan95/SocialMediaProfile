import React,{useState} from 'react';
import Input from '../Input/Input';
import './ProfileDataForm.css';
import {checkValidity} from '../../utility';
const ProfileDataForm = (props) => {
  const [dataForm,setDataForm] = useState({
                icon: {
                	elementType: 'input',
                	elementConfig: {
                		type: 'text',
                		placeholder:"Your Icon"
                	},
                	value: props.icon,
                	validation: {
                		required: true,
                		isImage: true
                       
                	},
                	valid: false,
                	touched: false
                },
                    name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:"Your Name"
                    },
                    value: props.name,
                    validation: {
                        required: true,
                        minLength:4
                       
                    },
                    valid: false,
                    touched: false
                },
                    intro: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:"Your Introduction"
                    },
                    value: props.intro,
                    validation: {
                        required: true,
                        maxLength: 100
                       
                    },
                    valid: false,
                    touched: false
                },
                location: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:"Your Location"
                    },
                    value: props.location,
                    validation: {
                        required: true
                       
                    },
                    valid: false,
                    touched: false
                },

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
		props.updateForm(dataForm['icon'].value,dataForm['name'].value,dataForm['intro'].value,dataForm['location'].value);
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
        return (
			<div>
				{form}
		    </div>

      );
 }

export default ProfileDataForm;