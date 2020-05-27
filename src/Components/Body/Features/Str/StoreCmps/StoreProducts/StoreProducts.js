import React, { PureComponent } from 'react';
import './../../Store.css';
import './StoreProducts.css'
import Lupa from '../../StoreUX/StrIcons/StrSearchLupa';
import ProductsList from '../StoreList/ProductsList';

import { BrowserRouter, Route , NavLink} from 'react-router-dom';
import axios from 'axios';



class StoreProducts extends PureComponent {

    state = {
        productsQT: 0,
        searchValue: "",

        products: [

        ],
        test: {},

    }

    componentDidMount(){

        axios.get

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