import React from 'react';
import './../StoreProducts.css';


const StoreModal = (props) => {

    return (
        <div className="store_modal">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <button className="modal_button" onClick={props.click}>Ok</button>
        </div>
    )

}

export default StoreModal; 