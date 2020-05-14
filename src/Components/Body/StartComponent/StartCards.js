import React from 'react';
import './../Body.css';


const SCard = (props) => {

    return (
        <div className="app_body_about_info_card">
            <h1>{props.title}</h1>
            <p>{props.cnt}</p>

        </div>
    )



}

export default SCard; 