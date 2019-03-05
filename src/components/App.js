import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './Home'
import '../public/css/style.css'
import LoginComponent from "./Login";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import RegisterComponent from "./register";

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact={true} path="/" component={HomeComponent} />
            <Route exact path="/login" component={LoginComponent} />
            <Route exact path="/register" component={ RegisterComponent } />
          </Switch>
          < Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
