import React ,{Component} from 'react';
import './ProductList.css';
import Carrito from './../../../StoreUX/StrIcons/icono_carrito.png'
import { NavLink, Link } from 'react-router-dom';
const ProductList = (props) => {
    return (
        <li onClick = {props.click}>
            <div className="product_title">
                <div className="product_name">
                    {props.props.productTitle}
                </div>
                <div className="product_color">
                    <div className="product_color_icon" style={{ borderColor: props.color}}></div>
                </div>
            </div>
            <div className="product_img">

            </div>
            <div className="product_price">
                <div className="price"><p>${props.props.productPrice}</p></div>
                <div className="status"><p>{props.props.productStatus}</p></div>
            </div>
            <div className="product_description">
                <div className="product_carrito">
                    <img alt="carrito" src={Carrito}></img>
                </div>
                <Link to = {"/features/store/products"+ props.props.id}>
                    <div className="product_info_icon">
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default ProductList; 