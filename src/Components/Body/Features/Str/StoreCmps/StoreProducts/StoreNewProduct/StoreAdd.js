import React, { Component } from 'react';
import './../StoreProducts.css';
import StoreForm from '../StoreForms/StForm';
import axios from '../../../../../../Axios/Instances/ProductInstance';
import StorePreview from './StPreview';
import * as Api from '../../../../../../Axios/Actions/Service/api';
import * as Regex from './../../../../../../Regex/Regex';
class StoreAdd extends Component {

    state = {
        fields: {
            productTitle: {
                type: "input",
                header: "Name of the new product",
                validation: {
                    required: true,
                    minL: 4,
                    maxL: 16,
                    special: true,
                },
                inputConfig: {
                    placeholder: "Name / Title",
                    type: "text",
                    className: "form_field",
                },
                value: "",
                validated : false, 


            },
            productPrice: {
                type: "input",
                header: "Product Price",
                validation: {
                    required: true,
                    minL: 1,
                    maxL: 8,
                },
                inputConfig: {
                    placeholder: "Price",
                    type: "number",
                    className: "form_field",
                },
                value: 0,
                validated : false, 
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
                validated : true, 
            },
            productStock: {
                type: "input",
                header: "Product Stock Quantity",
                validation: {
                    required: true,
                    special: true,
                },
                inputConfig: {
                    placeholder: "Stock",
                    type: "number",
                    className: "form_field",
                },
                value: 0,
                validated : false, 
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
                    className: "form_field",
                },
                value: "Black",
                validated : true, 
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
                    className: "form_field",
                },
                value: "Shoes",
                validated : true, 
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
                    className: "form_field",
                },
                value: "New",
                validated : true, 
            },
            productDescription: {
                type: "textarea",
                header: "Small Description of the product",
                validation: {
                    required: true,
                    minL: 8,
                    maxL: 128,
                    special: true,
                },
                inputConfig: {
                    placeholder: "Description",
                    className: "form_field",
                },
                value: "",
                validated : false, 
            },
        },
        formIsValid : false,
    }
    inputChangeHandler = (event, id) => {
        const newField = { ...this.state.fields[id] }
        const newFields = { ...this.state.fields };
        newField.value = event.target.value;
        newField.validated = this.productValidationHandler(event, newField.validation , newField ,id)
        newFields[id] = newField;
        this.setState({ fields: newFields })
    }

    checkValidationHandler = () => {


        const validation = []; 
        for(let id in this.state.fields){

            validation.push(
                this.state.fields[id].validated, 
            )

        }

        console.log(validation)

    }

    productValidationHandler = (event , validation , obj , id) => {
        const forms = {...this.state.fields}
        const field = {...this.state.fields[id]}
        const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

        let isValid = true; 
    
            if(validation.minL) {
                isValid = obj.value.length >= validation.minL && isValid; 
            }
            if(validation.maxL) {
                isValid = obj.value.length <= validation.maxL && isValid; 
            }
            if(validation.special){
                isValid = regex.test(obj.value) && isValid
            }

        field.validated = isValid; 
        forms[id] = field; 

        return(isValid)
    }

    fileHandler = (event) => {
        console.log("IMG SRC", event.target.value)
    }
    submitHandler = (event) => {
        const productPost = {}
        event.preventDefault();
        for (let id in this.state.fields) {
            productPost[id] = this.state.fields[id].value
        }
        Api.apiInstance.post("products", productPost);
    }
    render() {
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
                validation : this.state.fields[id].validated,
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
                                        validated = {field.validation}
                                    />
                                )
                            })}
                        </div>
                        <button type="submit" onClick = {this.checkValidationHandler}>Create product</button>
                    </form>
                    <StorePreview
                        name={this.state.fields.productTitle.value}
                        price={this.state.fields.productPrice.value}
                        divisa={this.state.fields.productPrice.divisaValue}
                        description={this.state.fields.productDescription.value}
                        status={this.state.fields.productStatus.value}
                        imgs={this.state.thumbnail}
                    />
                </div>
            </div>
        )

    }

}

export default StoreAdd; 