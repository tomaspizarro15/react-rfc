import React from 'react';
import Carrito from './../../../StoreUX/StrIcons/icono_carrito.png'
import './StPreview.css';


const StorePreview = (props) => {
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
                <p>{props.status}</p>
            </div>
            <div className ="preview_description">
                <div className ="preview_description_carrito">
                    <img alt ="carrito_img" src = {Carrito}></img>
                </div>
                <div className ="preview_description_info">
                    <div className ="info_icon"></div>
                </div>
            </div>
        </div>
    )

}

export default StorePreview; 