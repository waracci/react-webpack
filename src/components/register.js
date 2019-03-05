import React, { Component } from 'react'

export default class RegisterComponent extends Component {
  render() {
    return (
        <div className="row row-wide">
        <div className="content">
            <div className="">
                <h1>Store Manager sign up</h1>
                <hr />
                <div className="row row-narrow">
                    <form action="">
                        <div className="form-item">
                            <label for="name">Enter name</label>
                            <input type="text" className="form-input" name="name" placeholder="Enter name" />
                        </div>
                        <div className="form-item">
                            <label for="email">Enter email</label>
                            <input type="email" className="form-input" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-item">
                            <label for="password">Enter password</label>
                            <input type="password"className="form-input" name="password" placeholder="Enter password" />
                        </div>
                        <div className="form-item">
                            <label for="confirm-password">Confirm password</label>
                            <input type="password"className="form-input" name="confirm-password" placeholder="Confirm password" />
                        </div>
                        <div className="form-item">
                            <button className="button button-green">sign up</button>
                        </div>
                    </form>
                    <p>Already have an account? <a href="/login">sign in</a></p>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
