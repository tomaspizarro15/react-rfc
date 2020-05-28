import React, { Component } from 'react';
import './../StoreProducts.css';
import StoreInput from '../StoreForms/StForm';
import axios from './../../../../../../../Axios/AxiosProducts';
import StorePreview from '../StoreForms/StPreview';

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
                },
                inputConfig: {
                    placeholder: "Name / Title",
                    type: "text",
                    className: "form_field",
                },
                value: "",


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
                value: "",


            },
            productPrice: {
                type: "price",
                header: "Product Price",
                validation: {
                    required: true,
                    minL: 4,
                    maxL: 16,
                },
                currencyOptions : [
                    {value : "ARG"},
                    {value : "€"},
                    {value : "USD"},
                    {value : "CLP"},
                    {value : "R$"}
                ],
                inputConfig: {
                    placeholder: "Price",
                    type: "number",
                    className: "form_field",
                },
                value: 0,
                divisaValue : "",


            },
            productDescription: {
                type: "textarea",
                header: "Small Description of the product",
                validation: {
                    required: true,
                    minL: 4,
                    maxL: 128,
                },
                inputConfig: {
                    placeholder: "Description",
                    value: "",
                    className: "form_field",
                },
                value : "", 
            },
            productType: {
                type: "select",
                header: "Product type",
                validation: {},
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
                value : "", 
            },
            productStatus: {
                type: "select",
                header: "Product Status",
                validation: {},
                options: [
                    { value: "new" },
                    { value: "used" }
                ],
                inputConfig: {
                    placeholder: "Status",
                    type: "",
                    className: "form_field",
                },
                value : "", 
            },
            productStock: {
                type: "input",
                header: "Product Stock Quantity",
                validation: {
                    required: true,
                },
                inputConfig: {
                    placeholder: "Stock",
                    type: "number",
                    className: "form_field",
                }, 
                value : 0 , 
            }
        }

    }

    constructor() {
        super()
        this.submitFileHandler = this.submitFileHandler.bind(this);
        this.fileInput = React.createRef()
    }

    submitFileHandler = (event) => {
        event.preventDefault()
        console.log("ref input created", this.fileInput.current)
    }

    inputChangeHandler = (event , id)  => {

        const newField = {...this.state.fields[id]}

        newField.value = event.target.value; 

        const newFields = {...this.state.fields}; 

        newFields[id] = newField; 

        this.setState({fields : newFields})

        console.log(newField)
    }

    changeDivisaHandler = (event , id) => {

        
        const newField = {...this.state.fields[id]}

        newField.divisaValue = event.target.value; 

        const newFields = {...this.state.fields}; 

        newFields[id] = newField; 

        this.setState({fields : newFields})

        console.log(newField)

    }

    render() {

        console.log("Ref created by react", this.fileInput)

        let productFields = [];
        let previewValues = {
            name : this.state.fields.productTitle.value, 
            price: this.state.fields.productPrice.value,
            description: this.state.fields.productDescription.value,
        }; 

        for (let id in this.state.fields) {

            productFields.push({
                id: id,
                header: this.state.fields[id].header,
                type: this.state.fields[id].type,
                config: { ...this.state.fields[id].inputConfig },
                value: this.state.fields[id].value,
                options: this.state.fields[id].options,
                currency : this.state.fields[id].currencyOptions,
            })
        }

        let fileInput = (
            <div>
                <label  style={{ width: "2vw" , border : "2px solid #aaa" , padding : "0.40vw 2vw 0.40vw 2vw" , borderRadius :"16px" ,background :"#2b2b2b" , color :"#ffffff" ,border : "none"}}>Add Images
                  <input ref={this.fileInput} style={{ opacity : 0 , width :"0" , height : "0"}} type="file"></input>
                </label>
            </div>
        )

        return (
            <div className="new_prod_background">
                <div className="new_prod_container">

                    <form>
                        <div className="new_prod_title">
                            <h1>Create a new product</h1>
                        </div>
                        <div className="new_prod_fields">
                            {productFields.map((field , i) => {
                                return (
                                    <StoreInput
                                        key={field.id}
                                        fieldProps={field}
                                        ref={this.fileInput}
                                        onClick={this.submitFileHandler}
                                        fileInput = {fileInput}
                                        change = {(event) => this.inputChangeHandler(event , field.id)}
                                        value = {field.value}
                                        currency = {field.currency}
                                        changeDivisa = {(event) => this.changeDivisaHandler(event , field.id)}
                                    />
                                )
                            })}
                        </div>
                        <button>Create product</button>
                    </form>
                    <StorePreview
                    />
                </div>
            </div>
        )

    }

}

export default StoreAdd; 