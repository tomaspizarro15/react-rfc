import React from 'react';
import './ProductList.css';
import Carrito from './../../../StoreUX/StrIcons/icono_carrito.png'
import { NavLink } from 'react-router-dom';
const ProductList = (props) => {
    return (
        <li>
            <div className="product_title">
                <div className="product_name">
                    {props.name}
                </div>
                <div className="product_color">
                    <div className="product_color_icon" style={{ borderColor: props.color }}></div>
                </div>
            </div>
            <div className="product_img">

            </div>
            <div className="product_price">
                <div className="price"><p>${props.price}</p></div>
                <div className="status"><p>{props.status}</p></div>
            </div>
            <div className="product_description">
                <div className="product_carrito">
                    <img alt="carrito" src={Carrito}></img>
                </div>
                <NavLink to="/products">
                    <div className="product_info_icon">
                    </div>
                </NavLink>
            </div>
        </li>
    )
}

export default ProductList; 