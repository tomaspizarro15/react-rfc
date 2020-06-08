import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from './Components/Body/Forms/Register/Register';
import { connect } from 'react-redux';
import Features from './Components/Body/Features/Features';
import StoreAdd from './Components/Body/Features/Str/StoreCmps/StoreProducts/StoreNewProduct/StoreAdd';


class App extends Component {
  render() {


    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Body} />
          <Route path="/featured" render={() => <Features />} />
          <Route path={`/new_product`} render={() => <StoreAdd />} />
          <Route path="/register" exact component={Register} />

          <React.Fragment>
            <Header />
          </React.Fragment>
          <Redirect to="/register" />


        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {

  return {

    validation: state.validation,


  }

}

const mapDispatchToProps = dispatch => {

  return {
    id: null,
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);