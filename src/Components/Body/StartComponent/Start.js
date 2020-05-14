import React from 'react';
import icon from './../.././Icons/startIcon.png';
import './../Body.css';
import SCard from './StartCards';
import { connect } from 'react-redux';

const Start = (props) => {

    return (
    <button onClick = {props.click}>{props.title}</button>
    );


}


export default Start;