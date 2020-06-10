import React, { Component } from 'react'; 
import './FullProduct.css';


class FullProduct extends Component {


    state = {
        url : "",
    }

    componentDidMount(){
        let url = this.props.match.url; 
        let urls = url.split("/")
        let id = urls[3];

        console.log("[Products.js]", id)
        this.setState({url : id})

    }

    componentDidUpdate(){
    

    }

    render() {
        return(
            <div className ="products_container">
            </div>
        )
    }

}

export default FullProduct; 