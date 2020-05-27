import React from 'react';
import './../StoreProducts.css';


const StoreForm = (props) => {

    let field;
    let inputBorder ="2px solid rgb(111,0,255)"
    console.log(props.fieldProps.options)

    switch (props.fieldProps.type) {

        case 'input': {
            field = (
                <input onChange = {props.change}></input>
            )
        } break;
        case 'textarea': {
            field = (
                <textarea {...props.fieldProps.config}></textarea>
            )
        } break;
        case 'select': {
            field = (
                <select>
                    <option>A</option>
                    <option>A</option>
                    <option>A</option>
                </select>
            )
        }
    }


    return (
        <React.Fragment>
            <p style={{ fontWeight: "bold", fontSize: "1vw" }}>{props.fieldProps.header}</p>
            {field}
        </React.Fragment>
    );


}
export default StoreForm; 