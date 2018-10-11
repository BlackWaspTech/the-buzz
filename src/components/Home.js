import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="loginBox">
          <form className="login-form">
            <div>
              User Name: <input className="form-input" type="text" />
            </div>
            <div>
              Password: <input className="form-input" type="text" />
            </div>
            <submit className="button button__login">Login</submit>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
