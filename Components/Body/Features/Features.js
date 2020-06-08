import React, { PureComponent } from 'react';
import { BrowserRouting, Route, Switch } from 'react-router-dom';
import './Features.css';
import Store from './Str/Store';
import Groups from './Grps/Groups';
import Gallery from './Glry/Gallery';
import StoreAdd from './Str/StoreCmps/StoreProducts/StoreNewProduct/StoreAdd';


class Features extends PureComponent {


    render() {
        return (
                <div className="component_container">
                   <div className = "featured_component">
                   <Switch>
                        <Route path= {`/featured/store`} component={Store} />
                        <Route path= {`/featured/groups`} component={Groups} />
                        <Route path= {`/featured/gallery`} component={Gallery} />
                    </Switch>
                   </div>
                </div>
        )
    }
}
export default Features;

