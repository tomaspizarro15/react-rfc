import React, { Component, PureComponent } from 'react';
import './Features.css';
import { BrowserRouter ,Route } from 'react-router-dom';


class Features extends PureComponent {


    render() {

        return (
            <BrowserRouter>
                <div className="component_container">
                    <Route path='/features/store' component={null} />
                    <Route path='/features/groups' component={null} />
                    <Route path='/features/gallery' component={null} />
                </div>
            </BrowserRouter>


        )
    }
}
export default Features; 