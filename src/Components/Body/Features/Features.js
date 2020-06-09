import React, { Component } from 'react';
import './Features.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Store from './Str/Store';
import StoreAdd from './Str/StoreCmps/StoreProducts/StoreNewProduct/StoreAdd'
import Gallery from './Glry/Gallery';
import Groups from './Grps/Groups';


class Features extends Component {

    state = {
        featuresComponents: [
            { id: 0, name: "Store", url: "/store" },
            { id: 1, name: "Groups", url: "/groups" },
            { id: 2, name: "Gallery", url: "/gallery" },
        ]
    }
    render() {

        console.log("Props in features", this.props.match.url)
        return (
            <BrowserRouter>
                <div className="features">
                    <div className="features_navigator">
                        {this.state.featuresComponents.map(featuresComponent => {
                            return (
                                <NavLink key={featuresComponent.id} to={this.props.match.url + featuresComponent.url}>{featuresComponent.name}</NavLink>
                            )

                        })}
                    </div>
                    <div className ="features_component">
                        <Switch>
                            <Route path={this.props.match.url + "/store/new_product"} component={StoreAdd} />
                            <Route path={this.props.match.url + "/store"} component={Store} />
                            <Route path={this.props.match.url + "/gallery"} component={Gallery} />
                            <Route path={this.props.match.url + "/groups"} component={Groups} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )

    }

}

export default Features;