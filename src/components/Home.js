import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="row row-wide">
        <div className="content">
            <div className="center">
                <h1>Store Manager</h1>
                <div className="pad">
                    <p>Store Manager is a web application that helps store owners manage sales and product inventory records. This application is meant for use in a single store.</p>
                </div>
                <hr/>
                <NavLink className="button button-green" to="/login" id="link">login</NavLink>
                <NavLink className="button button-blue" to="/register" id="link">register</NavLink>
                <hr />
            </div>
        </div>
    </div>
      </div>
      </div>
    )
  }
}

export default HomeComponent;
