import React , { Component } from "react";
import './../Features.css';

class Groups extends Component {

    state = {

        path :"",

    }
    render() {
        console.log(this.props)

        return(
            <div>
                <h1>Hello Groups</h1>
            </div>
        )

    }

}

export default Groups;