import React, { PureComponent } from "react";
import './Register.css';
import axios from './../../../../Axios/AxiosInstance01';
import Fields from "./RegisterForm";
import { connect } from "react-redux";
import RegisterInfo from "./RegisterInfo";
import * as validation from './../../../../Redux/Validation/ValidationActions';
import { Redirect } from "react-router-dom";


class Register extends PureComponent {

    state = {
        // API DATA
        users: {},
        // FORMS

        registerForms: {
            username: {
                valid: false,
                title: "User Name",
                type: "num",
                value: "",
                placeholder: "Username",
                border: "2px solid rgb(100,0 ,255)",
                validation: {
                    sc: true,
                    required: true,
                    touched: false,
                    minL: 6,
                    maxL: 18,
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
                    sc: true,
                    required: true,
                    minL: 2,
                    maxL: 16,
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
                    sc: true,
                    required: true,
                    minL: 2,
                    maxL: 16,
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
                    e: true,
                    touched: false,
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
                    p: true,
                    required: true,
                    minL: 8,
                    maxL: 64,
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
                    p: true,
                    match: true,
                    required: true,
                    minL: 8,
                    maxL: 64,
                    touched: false,
                }
            },
        },

        validation: false,

    }

    componentDidMount() {
        axios.get("/users.json")
            .then(response => response.data)
            .then(users => {

                this.setState({ users: users })

            })
            .catch(error => console.log("ERROR GETTING API RESPONES :::::>", error));
            console.log("maxi" , this.props.maxi)
    }


    inputChangeHandler = (event, id) => {
       
        const newFields = {
            ...this.state.registerForms,
        }
        const newField = {
            ...newFields[id],
        }

        newField.value = event.target.value
        newField.valid = this.validateInputHandler(id, newField.validation, newField.value)
        newFields[id] = newField;

        this.setState({ registerForms: newFields })

        if (newField.valid) {

            newField.border = "2px solid green";

        } else {

            newField.border = "2px solid red"

        }

        let allValidated = true;

        for (let i in newFields) {

            allValidated = newFields[i].valid && allValidated;

        }
        if (allValidated) {

            this.setState({ validation: true })

        } else {

            this.setState({ validation: false })

        }
    }
    validateInputHandler = (id, rules, value) => {

        const scRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
        const pRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
        const eRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;

        if (rules.minL) {
            isValid = value.length >= rules.minL && isValid;
        }
        if (rules.maxL) {
            isValid = value.length <= rules.maxL && isValid;
        }
        if (rules.sc) {
            isValid = scRegex.test(String(value)) && isValid;
        }
        if (rules.e) {
            isValid = eRegex.test(String(value)) && isValid;
        }
        if (rules.p) {
            isValid = pRegex.test(String(value)) && isValid;
        }
        if (rules.match) {
            isValid = value === this.state.registerForms.password.value && isValid;
        }
        return isValid
    }

    postRegisterHandler = (values) => {

        console.log(values)
        axios.post('/users.json', values)
            .then(response => console.log(response))
            .then(console.log("Axios request sended"))
            .then(this.props.validateUser)
            .catch(error => console.log("something went wrong", error))
    }

    submitRegisterHandler = (event) => {

        event.preventDefault();

        let formValue = {};

        for (let i in this.state.registerForms) {
            formValue[i] = this.state.registerForms[i].value;
        }

        console.log(formValue)

        if (this.state.validation) {

            this.postRegisterHandler(formValue);



        }
    }
    render() {
        let registerButtonClass = 'register_button';
        let invalidFormAlert;
        let redirect; 

        if(this.props.validation){

            redirect = (
                <Redirect to ="/"/>
            )

        }else null; 

        let rForms = [];
        if (this.state.validation) {

            registerButtonClass = 'register_button enabled'

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
                <form className="register_form" onSubmit={(event) => this.submitRegisterHandler(event)}>
                    {rForms.map((form, i) => {
                        return (
                            <Fields
                                key={i}
                                ph={form.placeholder}
                                title={form.title}
                                border={form.border}
                                value={form.value}
                                type={form.type}
                                changed={(event) => this.inputChangeHandler(event, form.id)}
                            />
                        )
                    })}
                    {redirect}
                    <button type="submit" className={registerButtonClass} disabled ={!this.state.validation}>Register</button>
                    <a href ="/login_new_user?" style ={{color : "black" , fontSize :"0.8vw"}}>i have an account</a>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return (
        {
            validation: state.validation,
            maxi : state.maxi,
        }
    )
}
const mapPropsToDispatch = dispatch => {
    return {
        validateUser: () => dispatch({ type: validation.VALIDATE_USER }),
        invalidateUser: () => dispatch({ type: validation.INVALIDATE_USER })

    }

}
export default connect(mapStateToProps, mapPropsToDispatch)(Register)