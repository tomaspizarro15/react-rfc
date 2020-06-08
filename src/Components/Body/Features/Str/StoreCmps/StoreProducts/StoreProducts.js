import React, { PureComponent } from 'react';
import './../../Store.css';
import './StoreProducts.css'
import Lupa from '../../StoreUX/StrIcons/StrSearchLupa';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import * as Api from '../../../../../Axios/Actions/Service/api';
import ProductList from './ProductList/ProductList';
import ProductSearcher from './ProductSearcher/ProductSearcher';



class StoreProducts extends PureComponent {

    state = {
        prods: {},
        prodsList: [],
    }

    componentDidMount() {
        Api.apiInstance.get("products").then(data => this.setState({ prods: data }))

        this.displayHandler(this.state.prods);
    }

    displayHandler = () => {

        let newProducts = [];
        for (let id in this.state.prods) {
            console.log("backend prods iterations")
            newProducts.push({
                id: id,
                ...this.state.prods[id],
            })
        }

        return (newProducts)

    }

    render() {

        const products = this.displayHandler();
        let ComponentDisplay;
        if (products.length === 0) {

            ComponentDisplay = (

                <div className="products_alert">
                    <h1>No Products match your search</h1>
                </div>

            )

        } else {

            ComponentDisplay = (
                <div className="products_list">
                    <ol className="products_ol">
                        {products.map(product => {
                            return (
                              <ProductList
                                key = {product.id}
                                id = {product.id}
                                name = {product.productTitle}
                                price = {product.productPrice}
                                color = {product.productColor}
                                status = {product.productStatus}
                                type = {product.productType}
                                description ={product.productDescription}
                                ref = {null}
                              />
                            )
                        })}
                    </ol>
                </div>
            )
        }

        return (
            <div className="products_container">
                <div className="products">
                    <ProductSearcher/>
                    <div className="products_info">
                    </div>
                    {ComponentDisplay}
                        <div className="products_add">
                            <NavLink to="/new_product">+</NavLink>
                        </div>
                </div>

            </div>

        );
    }

}

export default StoreProducts;               