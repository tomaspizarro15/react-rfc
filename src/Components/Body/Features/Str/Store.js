import React, { Component } from "react";
import './Store.css';
import FeaturedSlider from "./StoreUX/FeaturedSlider";
import StoreProducts from "./StoreCmps/StoreProducts/StoreProducts";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import StoreAdd from "./StoreCmps/StoreProducts/StoreNewProduct/StoreAdd";
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
        value: 0,
        url: this.props.match.url,

    }
    componentDidMount() {

        let uuid1 = uuid.v4();
        console.log(uuid1)

    }
    componentDidMount() {

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


    componentDidUpdate() {

        console.log(this.state.url)

    }

    counterHandler = (incrementador, avanzar) => {

        setTimeout(() => {
            if (incrementador < this.state.sliderCards.length - 1 && avanzar) {
                incrementador++;
                avanzar = true;

                this.counterHandler(incrementador, avanzar);
                this.setState({ value: incrementador })
            } else {

                incrementador--;
                avanzar = false;
                this.counterHandler(incrementador, avanzar);
                this.setState({ value: incrementador })
                if (incrementador === 0) {
                    incrementador = 0;
                    avanzar = true;
                    this.counterHandler(incrementador, avanzar);
                }
            }
        }, 10000);
    }

    slideLeft = () => {

        

    }

    render() {


        let cardWidth = 100 * this.state.sliderCards.length;
        return (
            <React.Fragment>
                <div className="str_main">
                    <div className="arrow">
                        <div className="arrow_left">
                        </div>
                    </div>
                    <div className ="str_slider">
                        <ul style={{ width: `${cardWidth}%` }}>
                            {this.state.sliderCards.map(card => {
                                return (
                                    <FeaturedSlider
                                        id={this.state.value}
                                        key={card.id}
                                        title={card.title}
                                    />
                                )
                            })}
                        </ul> 
                    </div>
                    <div className="arrow">
                        <div className="arrow_right">

                        </div>
                    </div>
                </div>
                <div>
                    <StoreProducts
                        click={this.navToProduct}
                        url={this.props.match.path}
                        navProp={this.props.history.push}
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