import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navibar from './components/Navibar';
import Footer from './components/footer';
import Home from './pages/Home';
import info from './pages/info';
import "./App.css"

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navibar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/info" component={info}/>
          </Switch>
          <Footer />
        </BrowserRouter>
    );
  }
}
