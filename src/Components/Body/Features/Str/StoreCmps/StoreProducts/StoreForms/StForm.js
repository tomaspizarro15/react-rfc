import React from 'react';
import './../StoreProducts.css';


const StoreForm = (props) => {

    let field;
    let inputBorder = "2px solid rgb(111,0,255)"

    switch (props.fieldProps.type) {

        case 'input': {
            field = (
                <input onChange = {props.change} value = {props.value} {...props.fieldProps.config}onChange={props.change}></input>
            )
        } break;
        case 'textarea': {
            field = (
                <textarea onChange = {props.change} value = {props.value}{...props.fieldProps.config}></textarea>
            )
        } break;
        case 'select': {
            field = (
                <select value = {props.value} onChange = {props.change}> 
                    {props.fieldProps.options.map(option => {
                        return (
                            <option>{option.value}</option>
                        )
                    })}
                </select>
            )
        }break; 
        case 'file' : {
            field = (
                props.fileInput
            )
        }break; 
        case 'price' : {
            field = (
                <div className ="new_prod_price_container">
                    <input style = {{width : "20%"}} value = {props.value}  onChange = {props.change} {...props.fieldProps.config}></input>
                    <select value = {props.currency.value} onChange = {props.change}>
                        {props.currency.map(currency => {
                            return(
                            <option>{currency.value}</option>
                            )
                        })}
                    </select>
                </div>
            ) 
        }
    }


    return (
        <React.Fragment>
            <p style={{ fontSize: "1vw" , margin :"0.65vw" }}>{props.fieldProps.header}</p>
            {field}
        </React.Fragment>
    );


}
export default StoreForm; 