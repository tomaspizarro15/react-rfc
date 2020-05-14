import React, { Component } from 'react'; 
import './../Header.css';

class SearchBar extends Component {

    state = {


        inputProps: {
            value :"",
            config : {
                type : "text",
                placeholder :"search...",
                className :"header_input",
            },
        }

    }

    render(){
        return(
                <input  {...this.state.inputProps.config}></input>
        );
    }
}

export default SearchBar; 