import React from 'react';
import './../Body.css';

const Start = (props) => {

    return (
    <button onClick = {props.click}>{props.title}</button>
    );


}


export default Start;