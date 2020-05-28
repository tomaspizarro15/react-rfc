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
            productPrice: {
                type: "price",
                header: "Product Price",
                validation: {
                    required: true,
                    minL: 4,
                    maxL: 16,
                },
                currencyOptions: [
                    { value: "USD" },
                    { value: "€" },
                    { value: "ARG" },
                    { value: "CLP" },
                    { value: "R$" }
                ],
                inputConfig: {
                    placeholder: "Price",
                    type: "number",
                    className: "form_field",
                },
                value: 0,
                divisaValue: "USD",


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
                value: 0,
            },
            productColor: {
                type: "select",
                header: "Product Color",
                validation: {},
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
                value: "New",
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
                value: "",
            },
            productStatus: {
                type: "select",
                header: "Product Status",
                validation: {},
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
                    className: "form_field",
                },
                value: "",
            },
        },
        imgs: [

        ],
        thumbnail: ""
    }

    componentDidUpdate() {

        console.log(this.state.imgs)

    }
    inputChangeHandler = (event, id) => {

        console.log(id)

        const newField = { ...this.state.fields[id] }
        const newFields = { ...this.state.fields };
        newField.value = event.target.value;

        newFields[id] = newField;
        this.setState({ fields: newFields })
    }

    changeDivisaHandler = (event, id) => {

        const newField = { ...this.state.fields[id] }
        const newFields = { ...this.state.fields };

        newField.divisaValue = event.target.value;
        newFields[id] = newField;

        this.setState({ fields: newFields })
    }

    fileHandler = (event) => {

        console.log("IMG SRC", event.target.value)
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
                    <form>
                        <div className="new_prod_title">
                            <h1>New Product</h1>
                        </div>
                        <div className="new_prod_fields">
                            {productFields.map((field, i) => {
                                return (
                                    <StoreInput
                                        key={field.id}
                                        fieldProps={field}
                                        refs={this.fileInput}
                                        onClick={this.submitFileHandler}
                                        fileInput={fileInput}
                                        change={(event) => this.inputChangeHandler(event, field.id)}
                                        value={field.value}
                                        currency={field.currency}
                                        changeDivisa={(event) => this.changeDivisaHandler(event, field.id)}
                                    />
                                )
                            })}
                        </div>
                        <button>Create product</button>
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