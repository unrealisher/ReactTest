import React from "react";

import "./login-form.css";

export default class LoginForm extends React.Component {

  onSignInClick = evt => {
    evt.preventDefault();
    this.props.downloadUser(
      document.querySelector("#login-input").value,
      document.querySelector("#password-input").value
    );
  };

  render() {
    return (
      <div className="login-form">
        <h2 className="form-title">Authorization</h2>
        <form>
          <div className="form-field">
            <label className="form-label" htmlFor="login-input">
              Login:
            </label>
            <input className="form-control" id="login-input" required />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password-input">
              Password:
            </label>
            <input className="form-control" id="password-input" required />
          </div>
          <div className="buttons-field">
            <button className="btn btn-info" onClick={this.onSignInClick}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}
