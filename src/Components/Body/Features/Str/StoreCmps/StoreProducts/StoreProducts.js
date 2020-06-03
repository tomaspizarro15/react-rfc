import React, { PureComponent } from 'react';
import './../../Store.css';
import './StoreProducts.css'
import Lupa from '../../StoreUX/StrIcons/StrSearchLupa';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import * as Api from '../../../../../Axios/Actions/Service/api';



class StoreProducts extends PureComponent {

    state = {
        prods: {},
        prodsList: [],
    }

    componentDidMount() {
        Api.apiInstance.get("products").then(data => this.setState({ prods: data }))
        console.log("State Mounted [StoreProducts.js]")

        this.displayHandler(this.state.prods);
    }

    componentDidUpdate() {
        console.log("Backend received products", this.state.prods)
        console.log("State Updated [StoreProducts.js]", this.state.prodsList)


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
        console.log(products)
        let ComponentDisplay;
        if (products.length === 0) {

            ComponentDisplay = (

                <div className="str_prds_alert">
                    <h1>No Products match your search</h1>
                </div>

            )

        } else {

            ComponentDisplay = (
                <div className ="products_list">
                    <ol className="products_ol">
                        {products.map(product => {
                            return (
                                <li key={product}>
                                    {product.id}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            )
        }

        return (
            <div className="products_container">
                <div className="products">
                    <div className="products_search">
                        <p>Search for products</p><Lupa /><input type="text"></input>
                    </div>
                    <div className="products_info">
                    </div>
                    {ComponentDisplay}
                    <div className="products_ui">
                        <div className="products_add">
                            <NavLink to="/new_product">+</NavLink>
                        </div>
                        <div className="products_toggle">

                        </div>
                    </div>

                </div>

            </div>

        );
    }

}

export default StoreProducts;               