import React, { Component } from 'react';
import './Features.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './Str/Store';
import StoreAdd from './Str/StoreCmps/StoreProducts/StoreNewProduct/StoreAdd'


class Features extends Component {

    render() {
        return (
            <div className ="features">
                <BrowserRouter>
                    <Switch>
                        <Route path ={"/store"} component = {Store}/>
                        <Route path = {}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )

    }

}

export default Features;