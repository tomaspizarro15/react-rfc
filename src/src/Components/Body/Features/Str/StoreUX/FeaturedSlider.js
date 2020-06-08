import React from 'react';
import './../Store.css';


const FeaturedSlider = props => {

    return (
        <li>
            {props.title}
            <a>{props.id}</a>
            <button onClick={props.click}>Test</button>
        </li>
    )

}

export default FeaturedSlider; 