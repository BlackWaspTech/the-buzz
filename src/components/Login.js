import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="loginBox">
          <form className="form login-form">
            <div className="input-row">
              User Name: <input className="input-box" type="text" />
            </div>
            <div className="input-row">
              Password: <input className="input-box" type="text" />
            </div>
            <button className="button button__login">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
