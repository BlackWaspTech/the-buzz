import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profileContainer">
        <div className="profile">
          <div className="profileImage">
            <img src="../../assets/images/bw-logo.png" />
          </div>
          <div className="user-information">User Name</div>
          <div className="user-information">Address</div>
          <div className="user-information">Biography</div>
        </div>
        <div className="feed">Feed</div>
      </div>
    );
  }
}

export default Login;
