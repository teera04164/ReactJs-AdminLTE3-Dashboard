import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  BrowserRouter,
  Switch
} from 'react-router-dom'
import './App.css';

import Login from './containers/Login';
import Dasbord from './containers/Dasbord';
import Register from './containers/Register';
import ForgotPassword from './containers/ForgotPassword';
class App extends Component {
  componentDidMount() {
    console.log("in did mount");

    //An array of assets
    let scripts = [
      { src: "plugins/chart.js" }
    ]
    //Append the script element on each iteration
    scripts.map(item => {
    console.log("log =>: ---------------------------------------------")
    console.log("log =>: App -> componentDidMount -> item", item)
    console.log("log =>: ---------------------------------------------")
      const script = document.createElement("script")
      script.src = item.src
      script.async = true
      document.body.appendChild(script)
    })
  }
  renderRouter() {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route path="/dashboard" component={Dasbord} />
        </Switch>
      </Router>

    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;
