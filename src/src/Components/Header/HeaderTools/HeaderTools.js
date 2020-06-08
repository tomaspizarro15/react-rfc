import React from 'react';
import './../Header.css';
import { NavLink } from 'react-router-dom';

const HeaderTools = props => {

    return (
        <React.Fragment>
           <NavLink to = {props.href}>{props.id}</NavLink>
        </React.Fragment>
    );


}

export default HeaderTools; 