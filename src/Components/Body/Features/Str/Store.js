import React, { Component } from "react";
import './Store.css';
import FeaturedSlider from "./StoreUX/FeaturedSlider";
import StoreProducts from "./StoreCmps/StoreProducts/StoreProducts";
import { BrowserRouter, Route } from "react-router-dom";
import StoreAdd from "./StoreCmps/StoreProducts/StoreNewProduct/StoreAdd";

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
    }

    counterHandler = (incrementador , avanzar) => {
      
        setTimeout(() => {
            if (incrementador < this.state.sliderCards.length - 1 && avanzar) {
                incrementador++;
                avanzar = true; 
                
                this.counterHandler(incrementador , avanzar);
                this.setState({ value: incrementador })
            }else{
              
                incrementador--;                
                avanzar = false; 
                this.counterHandler(incrementador , avanzar);
                this.setState({value: incrementador})
                if(incrementador === 0){
                    incrementador = 0;                
                    avanzar = true; 
                    this.counterHandler(incrementador , avanzar);
                }
            }
        }, 10000);
    }

    componentDidMount() {

        let incrementador = 0;
        let avanzar = true; 

        this.counterHandler(incrementador ,avanzar)


    }

    render() {
        let cardWidth = 100 * this.state.sliderCards.length;
        return (
            <div className="str_main">
                <h1>{this.state.textInformation.mainTitle}</h1>
                <ul style={{ marginLeft: `-${this.state.value * 100}%`, width: `${cardWidth}%`, }}>
                    {this.state.sliderCards.map(card => {
                        return (
                            <FeaturedSlider
                                id = {this.state.value}
                                key={card.id}
                                title={card.title}
                            />
                        )
                    })}
                </ul>
                <StoreProducts
                    url = {this.props.match.path}
                />
                   
            </div>
        )

    }

}

export default Store;