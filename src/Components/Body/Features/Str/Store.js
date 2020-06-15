import React, { Component } from "react";
import './Store.css';
import FeaturedSlider from "./StoreUX/FeaturedSlider";
import StoreProducts from "./StoreCmps/StoreProducts/StoreProducts";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import StoreAdd from "./StoreCmps/StoreProducts/StoreNewProduct/StoreAdd";
import * as Api from "../../../Axios/Actions/Service/api";
const uuid = require("uuid")

class Store extends Component {

    state = {

        textInformation: {
            mainTitle: "Featured",
        },
        sliderCards: [
            { id: 0, title: "Courses", content: "" },
            { id: 1, title: "Masterclasses", content: "" },
            { id: 2, title: "Tips", content: "" },
            { id: 3, title: "Courses", content: "" },
            { id: 4, title: "Courses", content: "" },
        ],
        products: undefined,
        value: 0,
        url: this.props.match.url,

    }
    componentDidMount() {

        let uuid1 = uuid.v4();
        console.log(uuid1)

    }
    componentDidMount() {

        Api.apiInstance.get("products").then(products => this.setState({products : products}))

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

        let cardWidth = 100 * this.state.sliderCards.length;
        return (
            <React.Fragment>
                <FeaturedSlider
                    products = {this.state.products}
                />
                <div>
                    <StoreProducts
                        click={this.navToProduct}
                        url={this.props.match.path}
                        navProp={this.props.history.push}
                        products = {this.state.products}
                    />
                    <div className="add_container">
                        <div className="products_add">
                            <NavLink to={this.props.match.url + "/new_product"}>+</NavLink>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        )

    }

}

export default Store;