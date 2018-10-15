import React, { Component } from 'react';
import { query } from '../utilities/wasp-graphql/index';
import { connect } from 'react-redux';
import * as queries from '../queries/queries';

const mapStateToProps = store => ({
  user: store.user
});

let API = 'http://localhost:8080/graphql';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: 'Profile Image Text Replace',
      userName: '',
      userAddress: '',
      userBiography: ''
    };
  }

  componentDidMount() {
    query(API, { fields: queries.fields })
      .then(res => {
        return res.json();
      })
      .then(resp => {
        this.setState({
          userName: resp.data.user.username,
          userAddress: resp.data.user.address,
          userBiography: resp.data.user.biography
        });
      });
  }
  render() {
    return (
      <div className="profileContainer">
        <div className="profile">
          <div className="profileImage">{this.state.profileImage}</div>
          <div className="user-information">
            User Name: {this.state.userName}
          </div>
          <div className="user-information">
            Address: {this.state.userAddress}
          </div>
          <div className="user-information">
            Biography: {this.state.userBiography}
          </div>
        </div>
        <div className="feed">Feed</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
