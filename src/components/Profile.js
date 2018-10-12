import React, { Component } from 'react';
import { query } from '../utilities/wasp-graphql/index';
let fields = `{
  users {
    userName
  }
}`;
let url = 'http://localhost:8080/api/users/';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData() {
    let data = query(url, JSON.stringify({ fields: fields, mode: 'no-cors' }));
    data.then(function(res) {
      console.log('then');
    });
  }

  render() {
    let test = fetch('http://localhost:8080/api/users/', {
      method: 'GET'
    }).then(res => {
      console.log(res);
      console.log('here');
    });
    console.log(test);
    return (
      <div className="profileContainer">
        <div className="profile">
          <div className="profileImage">{this.state.data}</div>
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
