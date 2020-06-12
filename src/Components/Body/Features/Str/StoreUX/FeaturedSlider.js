import React, { Component } from 'react';
import './../Store.css';
import * as Api from './../../../../Axios/Actions/Service/api';

class FeaturedSlider extends Component {


    state = {
        sliderCards : [
            {}
        ]
    }

    componentDidMount() {



    }



    render() {

        let cardWidth = 100 * this.state.sliderCards.length; 

        return (
            <div className="str_main">
                <div className="arrow">
                    <div className="arrow_left">
                    </div>
                </div>
                <div className="str_slider">
                    <ul style={{ width: `${cardWidth}%` }}>
                        {this.state.sliderCards.map(card => {
                            return (
                              <li>

                              </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="arrow">
                    <div className="arrow_right">

                    </div>
                </div>
            </div>
        )

    }

}

export default FeaturedSlider;