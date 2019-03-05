import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class LoginComponent extends Component {
  render() {
    return (
        <div className="row row-wide">
        <div className="content">
            <div className="">
                <h1>Store Manager sign in</h1>
               <hr />
               <div className="row row-narrow">
                <form action="">
                     <div className="form-item">
                         <label for="email">Enter email</label>
                         <input type="email" className="form-input" name="email" placeholder="Enter email" />
                     </div>
                     <div className="form-item">
                         <label for="password">Enter password</label>
                         <input type="password"className="form-input" name="password" placeholder="Enter password" />
                     </div>
                     <div className="form-item">
                         <button className="button button-green">sign in</button>
                     </div>
                 </form>
                 <p>No account? <NavLink to="/register" id="link">register</NavLink></p>
               </div>
            </div>
        </div>
    </div>
    )
  }
}
