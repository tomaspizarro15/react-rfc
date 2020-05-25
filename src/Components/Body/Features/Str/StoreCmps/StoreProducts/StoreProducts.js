import React, { PureComponent } from 'react';
import './../../Store.css';
import './StoreProducts.css'
import Lupa from '../../StoreUX/StrIcons/StrSearchLupa';
import ProductsList from '../StoreList/ProductsList';

import { BrowserRouter, Route , NavLink} from 'react-router-dom';



class StoreProducts extends PureComponent {

    state = {
        productsQT: 0,
        searchValue: "",

        products: [
            { id: 0, name: "Black Gucci Bag", price: 200, opacity: 1 },
            { id: 1, name: "White Lacoste Shirt", price: 120, opacity: 1 },
            { id: 2, name: "Red DC shirt", price: 70, opacity: 1 },
            { id: 3, name: "Blue jeans", price: 35, opacity: 1 },
            { id: 4, name: "Red Vinicio Scarf", price: 300, opacity: 1 },
            { id: 5, name: "Green Vinicio Scarf", price: 300, opacity: 1 },
            { id: 6, name: "Blue jeans", price: 35, opacity: 1 },
            { id: 7, name: "Red Vinicio Scarf", price: 300, opacity: 1 },
            { id: 8, name: "Green Vinicio Scarf", price: 300, opacity: 1 },
            { id: 9, name: "Blue jeans", price: 35, opacity: 1 },
            { id: 10, name: "Red Vinicio Scarf", price: 300, opacity: 1 },
        ],
        test: {},

    }


    render() {

        let products = [];
        let posicion = 0;
        let rows = this.state.products.length / 3;
        rows = Math.ceil(rows);

        const productsRow = [];


        for (let i = 0; i < rows; i++) {


            for (let j = 0; j < 3; j++) {
                products.push({
                    id: i,
                    ...this.state.products[posicion]
                })
                posicion++;
            }

            productsRow[i] = {
                products,
            }

            products = [];

        }

        console.log(productsRow)


        return (
            <div className="str_prds_container">
                <div className="str_prds">
                    <div className="str_searcher">
                        <p>Search for products</p><Lupa /><input type="text"></input>
                    </div>
                    <div className="str_prds_info_container">
                        <div className="str_prds_info">
                        </div>
                    </div>
                    <div className="str_prds_list">
                        {productsRow.map((row, i) => {
                            return (
                                <ProductsList
                                    key={i}
                                    prd={row.products}
                                />
                            )
                        })}
                    </div>
                    <div className="store_add_cpm">
                        <NavLink to="/featured/new_product">+</NavLink>
                    </div>
                </div>
            </div>
        );
    }

}

export default StoreProducts;               