import React from 'react';
import './StPreview.css';


const StorePreview = (props) => {

    console.log(props.imgs[0])



    return (
        <div className="new_prod_preview">
            <div className="preview_title">
                <h1>{props.name}</h1>
            </div>
            <div className="preview_img">
                <img src = {props.imgs} alt = "thumbnail"></img>
            </div>
            <div className="preview_price">
                <h1>${props.price}</h1>
                <div style={{ width: "90%" }}></div>
                <p>{props.divisa}</p><p>{props.status}</p>
            </div>
        </div>
    )

}

export default StorePreview; 