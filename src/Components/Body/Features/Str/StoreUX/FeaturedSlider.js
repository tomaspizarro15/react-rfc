import React, { Component } from 'react';
import './../Store.css';
import * as Api from './../../../../Axios/Actions/Service/api';

class FeaturedSlider extends Component {

    state = {
        sliderCards: [
            {}
        ],
        products: {},
        value: 0,
    }
    slideHandler = (value, stopValue) => {
        if (this.state.value !== stopValue) {
            let valor = this.state.value
            this.setState({ value: valor + value })
        }
    }

    render() {
        let sliderCards = [];

        for (let id in this.props.products) {

            sliderCards.push(
                { ...this.props.products[id] }
            )

        }

        console.log("Array of products", sliderCards)
        let cardWidth = 100 * sliderCards.length;
        let slideValue = cardWidth - 100; 
        return (
            <div className="str_main">
                <div className="arrow">
                    <div className="arrow_left" onClick={() => this.slideHandler(100, 0)}>
                    </div>
                </div>
                <div className="str_slider">
                    <ul style={{ width: `${cardWidth}%` , marginLeft : `${this.state.value}%` }}>
                        {sliderCards.map(card => {
                            return (
                                <li>
                                    <h1>{card.productTitle}</h1>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="arrow">
                    <div className="arrow_right" onClick={() => this.slideHandler(-100, -slideValue)}>

                    </div>
                </div>
            </div>
        )

    }

}

export default FeaturedSlider;