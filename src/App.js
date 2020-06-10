import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from './Components/Body/Forms/Register/Register';
import { connect } from 'react-redux';
import Features from './Components/Body/Features/Features';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/features" component = {Features} />
            <Route path="/register" component ={Register} />
            <Route path="/" component={Body} />       
          </Switch>
            <Header />
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
