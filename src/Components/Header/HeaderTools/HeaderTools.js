import React from 'react';
import './../Header.css';
import { NavLink } from 'react-router-dom';

const HeaderTools = props => {

    return (
           <NavLink to = {props.href}>{props.id}</NavLink>
    );


}

export default HeaderTools; 