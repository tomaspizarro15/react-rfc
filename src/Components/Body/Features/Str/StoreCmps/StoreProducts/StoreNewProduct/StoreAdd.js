import React, { Component } from 'react';
import './../StoreProducts.css';
import StoreInput from '../StoreForms/StForm';
import axios from './../../../../../../../Axios/AxiosProducts';

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
                type: "input",
                header: "Images for the product",
                validation: {
                    required: false,
                },
                inputConfig: {
                    placeholder: "Image of product",
                    type: "image",
                    className: "form_field_img",
                },
                value: "",


            },
            productPrice: {
                type: "input",
                header: "Product Price",
                validation: {
                    required: true,
                    minL: 4,
                    maxL: 16,
                },
                inputConfig: {
                    placeholder: "Price of product",
                    type: "number",
                    className: "form_field",
                },
                value: "",


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
                    { value: "wp" }
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
                inputConfig: {
                    placeholder: "Status",
                    type: "",
                    className: "form_field",
                },
                value: "",
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

                }
            }
        }

    }
    render() {

        let productFields = [];

        for (let id in this.state.fields) {

            productFields.push({
                id: id,
                header: this.state.fields[id].header,
                type: this.state.fields[id].type,
                config: { ...this.state.fields[id].inputConfig },
                value: this.state.fields[id].value,
                options: this.state.fields[id].options
            })
        }

        return (
            <div className="new_prod_background">
                <div className="new_prod_container">
                    <form>
                        <div className ="new_prod_title">
                            <h1>Create a new product</h1>
                        </div>
                        <div className ="new_prod_fields">
                            {productFields.map(field => {
                                return (
                                    <StoreInput
                                        key={field.id}
                                        fieldProps={field}
                                    />
                                )
                            })}
                        </div>
                        <button>Create product</button>
                    </form>
                    <div className="new_prod_preview">
                    </div>
                </div>
            </div>
        )

    }

}

export default StoreAdd; 