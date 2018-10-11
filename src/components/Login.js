import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="loginBox">
          <form className="login-form">
            <div className="login-space">
              User Name: <input className="form-input" type="text" />
            </div>
            <div className="login-space">
              Password: <input className="form-input" type="text" />
            </div>
            <button className="button button__login">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
