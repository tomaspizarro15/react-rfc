import React, { Component } from 'react'; 
import './../container.css';
import { api } from '../../Components/Axios/Actions/Service/api';


class Products extends Component {


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
                <h1>hello , {this.state.url}</h1>
            </div>
        )
    }

}

export default Products; 