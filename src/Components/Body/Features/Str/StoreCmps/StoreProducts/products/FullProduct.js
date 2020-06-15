import React, { Component } from 'react';
import './FullProduct.css';
import * as Api from './../../../../../../Axios/Actions/Service/api';

class FullProduct extends Component {


    state = {

    }

    componentDidMount() {
        let url = this.props.match.url;
        let urls = url.split("/")
        let id = urls[3];

        console.log("[Products.js]", id)
        Api.apiInstance.get("products/" + id).then(resp => {
            console.log("Firebase Response", resp)
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <div className="full_product_container">
                <div className="full_product">
                    <div className ="product"></div>
                    <div className ="product"></div>
                </div>
            </div>
        )
    }

}

export default FullProduct; 