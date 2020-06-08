import React, { Component } from 'react';
import Lupa from '../../../StoreUX/StrIcons/StrSearchLupa';
import './ProductSearcher.css'
class ProductSearcher extends Component {
    render() {
        return (
            <div className="products_search">
                <p>Search for products : </p><input type="text" placeholder ="search..."></input>
            </div>
        )

    }
}
export default ProductSearcher; 