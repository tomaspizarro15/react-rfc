import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from './Components/Body/Forms/Register/Register';

class App extends Component {
  render() {

    let auth = true; 
    let HeaderComponents; 

      if(auth === true){
        HeaderComponents = (
          <Switch>
            <Route path ='/store' exact component = {null}/>
            <Route path ='/groups' exact component = {null}/>
            <Route path ='/gallery' exact component = {null}/>
          </Switch>
        ); 
      }else {
        HeaderComponents = <Redirect to ="/register"/>
      }
     
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
         <Route path ="/" exact component = {Body}/>
          {HeaderComponents}
         <Route path ="/register" exact component = {Register}/>   
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
