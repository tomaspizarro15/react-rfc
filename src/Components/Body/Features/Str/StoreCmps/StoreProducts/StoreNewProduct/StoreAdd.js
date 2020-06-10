import React, { Component } from 'react';
import './../StoreProducts.css';
import StoreForm from '../StoreForms/StForm';
import axios from '../../../../../../Axios/Instances/ProductInstance';
import StorePreview from './StPreview';
import * as Api from '../../../../../../Axios/Actions/Service/api';
import * as Regex from './../../../../../../Regex/Regex';
import StoreModal from './StoreModal';
import { NavLink } from 'react-router-dom';
class StoreAdd extends Component {

    state = {
        fields: {
            productTitle: {
                type: "input",
                header: "Name of the new product",
                validation: {
                    required: true,
                    minL: 4,
                    maxL: 32,
                    special: true,
                },
                inputConfig: {
                    placeholder: "Name / Title",
                    type: "text",
                },
                value: "",
                validated: false,


            },
            productPrice: {
                type: "input",
                header: "Product Price",
                validation: {
                    required: true,
                    numeric : true, 
                    minL: 1,
                    maxL: 8,
                },
                inputConfig: {
                    placeholder: "Price",
                    type: "number",
                },
                value: "",
                validated: false,
            },
            productImg: {
                type: "file",
                header: "Images for the product",
                validation: {
                    required: false,
                },
                inputConfig: {
                    placeholder: "Image of product",
                    type: "file",
                    className: "form_field_label",
                },
                value: "Place an image",
                validated: true,
            },
            productStock: {
                type: "input",
                header: "Product Stock Quantity",
                validation: {
                    required: true,
                    numeric : true,
                    minL: 1,
                    maxL: 8,
                },
                inputConfig: {
                    placeholder: "Stock",
                    type: "number",
                },
                value: "",
                validated: false,
            },
            productColor: {
                type: "select",
                header: "Product Color",
                options: [
                    { value: "Black" },
                    { value: "White" },
                    { value: "Grey" },
                    { value: "Yellow" },
                    { value: "Gold" },
                    { value: "Red" },
                    { value: "Blue" },
                    { value: "Pink" }
                ],
                inputConfig: {
                    placeholder: "Status",
                    type: "",
                },
                validation : {
                    required : false, 
                },
                value: "Black",
                validated: true,
            },
            productType: {
                type: "select",
                header: "Product type",
                options: [
                    { value: "Shoes" },
                    { value: "Shirt" },
                    { value: "Scarf" },
                    { value: "Hoodie" },
                    { value: "hat" },
                    { value: "pants" },
                    { value: "jeans" },
                    { value: "glasses" },
                    { value: "watch" },
                    { value: "chain" },
                    { value: "rings" },
                    { value: "earrings" },
                    { value: "others" },
                ],
                inputConfig: {
                    placeholder: "Type of product",
                    type: "text",
                },
                validation : {
                    required : false, 
                },
                value: "Shoes",
                validated: true,
            },
            productStatus: {
                type: "select",
                header: "Product Status",
                options: [
                    { value: "New" },
                    { value: "Used" }
                ],
                inputConfig: {
                    placeholder: "Status",
                    type: "",
                },
                validation: {
                    required: true,
                    special: true,
                },
                value: "New",
                validated: true,
            },
            productDescription: {
                type: "textarea",
                header: "Small Description of the product",
                validation: {
                    required: true,
                    minL: 8,
                    maxL: 128,
                },
                inputConfig: {
                    placeholder: "Description",
                },
                value: "",
                validated: false,
            },
        },
        formIsValid: undefined,
    }
    inputChangeHandler = (event, id) => {
        const newField = { ...this.state.fields[id] }
        const newFields = { ...this.state.fields };
        newField.value = event.target.value;
        newField.validated = this.productValidationHandler(event, newField.validation, newField, id)
        newFields[id] = newField;
        this.setState({ fields: newFields })
    }

    checkValidationHandler = () => {


        const validation = [];
        for (let id in this.state.fields) {

            validation.push(
                this.state.fields[id].validated,
            )

        }
        
        console.log(validation)

    }

    productValidationHandler = (event, validation, obj, id) => {
        const forms = { ...this.state.fields }
        const field = { ...this.state.fields[id] }
        const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

        let isValid = true;

        if (validation.required) {

            if (validation.minL) {
                isValid = obj.value.length >= validation.minL && isValid;
            }
            if (validation.maxL) {
                isValid = obj.value.length <= validation.maxL && isValid;
            }
            if (validation.special) {
                isValid = regex.test(obj.value) && isValid;
            }
            if(validation.numeric) {
                isValid = obj.value > 0 && isValid;
            }
            field.validated = isValid;
            forms[id] = field;
        }
        return (isValid)
    }
    submitHandler = (event) => {
        const productValidation = {}
        const productPost = {}
        let isValid = true;
        event.preventDefault();
        for (let id in this.state.fields) {
            productValidation[id] = this.state.fields[id].validated;

            isValid = productValidation[id] && isValid; 
            productPost[id] = this.state.fields[id].value; 
        }
        if(isValid){

            Api.apiInstance.post("products", productPost)
            this.setState({formIsValid : true})

        }else{

            this.setState({formIsValid : false})

        }
  
    }

    resetValuesHandler = () => {

        let newFields = {...this.state.fields}

        for(let id in newFields){

          if(newFields[id].type ==="input" || newFields[id].type ==="textarea") {
            newFields[id].validated = false;
            newFields[id].value = ""; 

          }
          
        }

        this.setState({fields : newFields})

    }

    closeModalHandler = () =>{

        this.setState({formIsValid : undefined})
        this.resetValuesHandler(); 
    }

    render() {

        let modalDisplay; 

        if(this.state.formIsValid){
            modalDisplay = (
                <StoreModal
                title = "Product Added"
                 message = "A Prouct has been created succesfully to the site!"
                 click = {this.closeModalHandler}
                 />
            )
    }else if(this.state.formIsValid === false){
        modalDisplay = (
            <StoreModal
                title = "Product Error"
                 message = "Please complete all fields with valid data to create product!"
                 click = {this.closeModalHandler}
            />
        )
    }

        const productFields = [];
        for (let id in this.state.fields) {
            productFields.push({
                id: id,
                header: this.state.fields[id].header,
                type: this.state.fields[id].type,
                config: { ...this.state.fields[id].inputConfig },
                value: this.state.fields[id].value,
                options: this.state.fields[id].options,
                currency: this.state.fields[id].currencyOptions,
                validation: this.state.fields[id].validated,
            })
        }
        let fileInput = (
            <div>
                <label>Add Images
                  <input ref={this.fileInput} style={{ opacity: 0, width: "0", height: "0" }} type="file" onChange={(event) => this.fileHandler(event)}></input>
                </label>
            </div>
        )                                                           

        return (
            <div className="new_prod_background">
                <div className="new_prod_container">
                    <form onSubmit={(event) => this.submitHandler(event)}>
                        <div className="new_prod_title">
                            <h1>New Product</h1>
                        </div>
                        <div className="new_prod_fields">
                            {productFields.map((field, i) => {
                                return (
                                    <StoreForm
                                        key={field.id}
                                        fieldProps={field}
                                        onClick={this.submitFileHandler}
                                        fileInput={fileInput}
                                        change={(event) => this.inputChangeHandler(event, field.id)}
                                        value={field.value}
                                        currency={field.currency}
                                        changeDivisa={(event) => this.changeDivisaHandler(event, field.id)}
                                        validated={field.validation}
                                    />
                                )
                            })}
                        </div>
                        <button type = "submit">Create product</button>
                        <NavLink to = {"/features/store"}>Back</NavLink>
                    </form>
                    <StorePreview
                        name={this.state.fields.productTitle.value}
                        price={this.state.fields.productPrice.value}
                        divisa={this.state.fields.productPrice.divisaValue}
                        description={this.state.fields.productDescription.value}
                        status={this.state.fields.productStatus.value}
                        imgs={this.state.thumbnail}
                    />
                    {modalDisplay}   
                </div>
               
            </div>
        )
    }
}

export default StoreAdd; 