import React, { PureComponent } from "react";
import './Register.css';
import axios from './../../../../Axios/AxiosInstance01';
import Fields from "./RegisterForm";
import { connect } from "react-redux";
import RegisterInfo from "./RegisterInfo";
import * as validation from './../../../../Redux/Validation/ValidationActions';


class Register extends PureComponent {

    state = {
        // API DATA
        users: {},
        // FORMS
        
        registerForms: {
            username: {
                valid: false,
                title: "User Name",
                type: "text",
                value: "",
                placeholder: "Username",
                border: "2px solid rgb(100,0 ,255)",
                validation: {
                    specialCarac: true,
                    required: true,
                    touched: false,
                    minLength: 6,
                    maxLength: 18,
                }
            },
            name: {
                valid: false,
                title: "First Name",
                type: "text",
                value: "",
                placeholder: "First Name",
                border: "2px solid rgb(100,0 ,255)",
                validation: {
                    specialCarac: true,
                    required: true,
                    minLength: 2,
                    maxLength: 16,
                    touched: false,
                }
            },
            lastname: {
                valid: false,
                title: "Last Name",
                type: "text",
                value: "",
                placeholder: "Last Name",
                border: "2px solid rgb(100,0 ,255)",
                validation: {
                    specialCarac: true,
                    required: true,
                    minLength: 2,
                    maxLength: 16,
                    touched: false,
                }
            },
            email: {
                valid: false,
                title: "Email",
                type: "email",
                value: "",
                placeholder: "example123@example.exp",
                border: "2px solid rgb(100,0 ,255)",
                validation: {
                    required: true,
                    emailValid: true,
                    touched: false,
                    emailValidation : true, 
                }
            },
            password: {
                valid: false,
                title: "Password",
                type: "password",
                value: "",
                placeholder: "Password",
                border: "2px solid rgb(100,0 ,255)",
                validation: { 
                    specialCarac: true,
                    required: true,
                    confirmed: true,
                    minLength: 8,
                    maxLength: 64,
                    touched: false,
                }
            },
            cPassword: {
                valid: false,
                title: "Confirm Password",
                type: "password",
                value: "",
                placeholder: "Confirm Password",
                border: "2px solid rgb(100,0 ,255)",
                validation: {
                    specialCarac: true,
                    match : true, 
                    required: true,
                    confirmed: true,
                    minLength: 8,
                    maxLength: 64,
                    touched: false,
                }
            },
        },
       
    }


    componentDidMount() {
        axios.get("/users.json")
            .then(response => response.data)
            .then(users => {

                this.setState({ users: users })

            })
            .catch(error => console.log("ERROR GETTING API RESPONES :::::>", error));
    }

    inputChangeHandler = (event, id) => {

        const newFields = {
            ...this.state.registerForms,
        }
        const newField = {
            ...newFields[id],
        }
        newField.value = event.target.value
        newField.validation.touched = true;
        newField.valid = this.validateInputHandler(id, newField , newFields.password.value)
        newFields[id] = newField;

        this.setState({ registerForms: newFields }) 

        let valid = true;  

        for(let id in newFields){

            valid = newFields[id].valid && valid; 

        }
        if(valid === true){
            
            this.props.validateUser()

        }else{

            this.props.invalidateUser()

        }
    }

    validateInputHandler = (id, forms , password) => {
        const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;

        let isValidated = false;

        if(forms.validation.touched !== true && isValidated){

            isValidated = true; 

        }
        if(forms.validation.minLength){
            
              if(forms.value.length >= forms.validation.minLength){

                isValidated = true; 
    
              }
              else{
                  isValidated = false; 
              }    
        }
        if(forms.validation.maxLength){

            if(forms.validation.maxLength >= forms.value.length && isValidated){
                isValidated = true;       
            }
            else {
                isValidated = false; 
            }
      } 
      if(forms.validation.match){

        if(forms.value === password && isValidated) {

            isValidated = true;

        }else{
            isValidated = false;
        }
      }
      if(forms.validation.emailValid) {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        isValidated = re.test(forms.value) && isValidated; 


      }
      if(forms.validation.specialCarac){

        isValidated = regex.test(forms.value) && isValidated;

      }

        if (!isValidated) {
            forms.border = '2px solid rgb(255,0,0)';
        }else{
            forms.border = '2px solid rgb(0,255,0)';
        }
        return(isValidated)
    }

    submitRegisterHandler = (event) => {

        event.preventDefault();

        const user = {...this.state.registerForms}; 
        const values = [];
        
        for(let id in user) {

            values[id] = user[id].value
        }
        
        console.log(values)

    }
    render() {

        let registerButtonClass= 'register_button'; 
        let invalidFormAlert; 
        
        let rForms = [];
        if(this.props.validation) {

            registerButtonClass ='register_button enabled'

        }
        for (let id in this.state.registerForms) {

            rForms.push({
                id: id,
                ...this.state.registerForms[id],
            })
        }
        return (

            <div className="register_container">

                <RegisterInfo />
                <form className="register_form" onSubmit={this.submitRegisterHandler}>
                    {rForms.map(form => {
                        return (
                            <Fields
                                ph={form.placeholder}
                                title={form.title}
                                border={form.border}
                                value={form.value}
                                type = {form.type}
                                changed={(event) => this.inputChangeHandler(event, form.id)}
                            />
                        )
                    })}
                    <button type="submit" className = {registerButtonClass} /* disabled = {!this.props.validation} */>Register</button>
                </form>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return (
        {
            validation: state.validation,
        }
    )
}
const mapPropsToDispatch = dispatch => {

    return {
        validateUser: () => dispatch({ type: validation.VALIDATE_USER }),
        invalidateUser : () => dispatch({type : validation.INVALIDATE_USER})

    }

}
export default connect(mapStateToProps, mapPropsToDispatch)(Register)