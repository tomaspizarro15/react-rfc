import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from './Components/Body/Forms/Register/Register';
import { connect } from 'react-redux';
import Features from './Components/Body/Features/Features';

class App extends Component {

  componentDidMount() {
    console.log("IS VALIDATED IN APP?", this.props.validation)
  }
  componentDidUpdate() {
    console.log("IS VALIDATED IN APP?", this.props.validation)
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Body} />
          {this.props.validation ?
            <React.Fragment>
              <Header/>
              <Switch>
                <Route path='/features' exact component={Features}/>
              </Switch>
            </React.Fragment>
            : <Redirect to="/register" />
          }
          <Route path="/register" exact component={Register} />
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
