import React, { Component } from 'react';
import './Body.css'
import { connect } from 'react-redux';
import DecoMoon from './Decoration/Moon';
import Main from './MainComponent/Main';
import { Link } from 'react-router-dom';
class Body extends Component {

    state = {
        charts: [
            { id: "00", title: "Users:", value: 10 },
            { id: "01", title: "Proyects:", value: 3 },
            { id: "02", title: "Courses:", value: 20 },
        ]
    }
    render() {
        return (
            <div className="app_body_container">
                <DecoMoon />
                <div className="app_body">
                    <Main
                        charts={this.state.charts}
                    />
                    <Link to="/register">Registro</Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {


    }
}
const mapStateToDispatch = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, mapStateToDispatch)(Body); 