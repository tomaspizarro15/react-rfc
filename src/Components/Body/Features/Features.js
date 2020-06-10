import React, { Component } from 'react';
import './Features.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Store from './Str/Store';
import StoreAdd from './Str/StoreCmps/StoreProducts/StoreNewProduct/StoreAdd'
import Gallery from './Glry/Gallery';
import Groups from './Grps/Groups';
import FullProduct from './Str/StoreCmps/StoreProducts/products/FullProduct';

class Features extends Component {

    state = {
        featuresComponents: [
            { id: 0, name: "Store", url: "/store"  , status : false},
            { id: 1, name: "Groups", url: "/groups"  , status : false},
            { id: 2, name: "Gallery", url: "/gallery"  , status : false},
        ]
    }

    alertHandler(event , id) {

    

    }

    render() {

        console.log( " [Features.js] ,  Routing props", this.props.match.url)
        return (
            <BrowserRouter>
                <div className="features">
                    <div className="features_navigator">
                        {this.state.featuresComponents.map(featuresComponent => {
                            return (
                                <NavLink activeClassName = {"features_navlink"} onClick = {(event) => this.alertHandler(event , featuresComponent.id)} key={featuresComponent.id} to={this.props.match.url + featuresComponent.url}>{featuresComponent.name}</NavLink>
                            )

                        })}
                    </div>
                    <div className ="features_component">
                        <Switch>
                            <Route path={this.props.match.url + "/store/new_product"} component= {StoreAdd} />
                            <Route path = {this.props.match.url + '/store/:id'} exact component = {FullProduct}/>
                            <Route path={this.props.match.url + "/store"} exact  component= {Store} />
                            <Route path={this.props.match.url + "/gallery"} exact component= {Gallery} />
                            <Route path={this.props.match.url + "/groups"} exact component= {Groups} />           
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )

    }

}

export default Features;