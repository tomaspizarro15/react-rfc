import React from 'react';
import './../StoreProducts.css';


const StoreForm = (props) => {

    const border = "green"
    let field;
    let inputClass = "input_style"; 
    let textAreaClass = "textarea_style"
    let selectClass ="select_style"

    if(props.validated){   

        inputClass = "input_style valid"
        textAreaClass = "textarea_style valid"
        selectClass ="select_style valid"
    }

    let inputBorder = "2px solid rgb(111,0,255)"

    switch (props.fieldProps.type) {

        case 'input': {
            field = (
                <input className = {inputClass} onChange = {props.change} value = {props.value} {...props.fieldProps.config}onChange={props.change}></input>
            )
        } break;
        case 'textarea': {
            field = (
                <textarea className = {textAreaClass}  onKeyUp = {props.change} onChange = {props.change} value = {props.value}{...props.fieldProps.config}></textarea>
            )
        } break;
        case 'select': {
            field = (
                <select  className = {selectClass} value = {props.value} onChange = {props.change}> 
                    {props.fieldProps.options.map((option , i) => {
                        return (
                            <option key = {i}>{option.value}</option>
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
                    <input className = {selectClass} className = {inputClass}value = {props.value}  onChange = {props.change} {...props.fieldProps.config}></input>
                    <select value = {props.currency.value} onChange = {props.changeDivisa}>
                        {props.currency.map((currency , i) => {
                            return(
                            <option key = {i}>{currency.value}</option>
                            )
                        })}
                    </select>
                </div>
            ) 
        }
    }
    return (
        <React.Fragment>
            <p>{props.fieldProps.header}</p>
            {field}
        </React.Fragment>
    );


}
export default StoreForm; 