import React, { Component } from "react";
import '../public/css/style.css'

class App extends Component {
  render() {
    return (
      <div>
        <div class="row row-wide">
        <div class="banner">
            <a href="index.html" class="logo">store-manager</a>
            <nav>
                <ul class="nav">
                    <li><a href="index.html">home</a></li>
                    <li><a href="login.html" class="button-green">sign in</a></li>
                    <li><a href="register.html" class="button-blue">sign up</a></li>
                </ul>
            </nav>
        </div>
        <div class="content">
            <div class="center">
                <h1>Store Manager</h1>
                <div class="pad">
                    <p>Store Manager is a web application that helps store owners manage sales and product inventory records. This application is meant for use in a single store.</p>
                </div>
                <hr/>
                <a class="button button-green" href="login.html">sign in</a>
                <a class="button button-blue" href="register.html">sign up</a>
                <hr />
                <img src="../assets/images/world.png" alt="store manager app" />
            </div>
        </div>
        <div class="footer">
            <p>Store Manager</p>
            <p>Copyright 2018</p>
        </div>
    </div>
      </div>
    );
  }
}

export default App;
