import React, { Component } from 'react';
import './Body.css'
import Start from './StartComponent/Start';
import { connect } from 'react-redux';
import SCard from './StartComponent/StartCards';
import ActionTypes from './../../Redux/Store/Actions';
import { v4 as uuidv4 } from 'uuid';
import HeaderTools from '../Header/HeaderTools/HeaderTools';
import DecoMoon from './Decoration/Moon';
import Main from './MainComponent/Main';
class Body extends Component  {

    state = {
        charts : [
            { id : "00" , title : "Users:" , value : 10},
            { id : "01" , title : "Proyects:" , value : 3},
            { id : "02" , title : "Courses:" , value : 20},
        ]
    }


    render() {
            return (
                <div className="app_body_container">
                     <DecoMoon/>
                    <div className="app_body">
                        <Main
                        charts = {this.state.charts}
                        />
                    </div>
                </div>  
            );
        }
    }


const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results : state.results, 
        

    }
}
const mapStateToDispatch = dispatch => {
    return {
       
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(Body); 