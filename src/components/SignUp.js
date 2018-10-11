import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="sing-up-header">Sign Up</div>
        <form className="form signUpForm">
          <div className="input-row">
            User Name: <input className="input-box" type="text" />
          </div>
          <div className="input-row">
            Password: <input className="input-box" type="text" />
          </div>
          <div className="input-row">
            Addess: <input className="input-box" type="text" />
          </div>
          <div className="input-row">
            Biography: <input className="input-box" type="text" />
          </div>
          <div className="input-row center">
            <button className="button button__sign-up">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
