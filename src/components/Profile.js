import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  user: store.user
});

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

  render() {
    return (
      <div className="profileContainer">
        <div className="profile">
          <div className="profileImage">Images to come</div>
          <div className="user-information">
            User Name: {this.props.user.userName}
          </div>
          <div className="user-information">
            Address: {this.props.user.userAddress}
          </div>
          <div className="user-information">
            Biography: {this.props.user.userBiography}
          </div>
        </div>
        <div className="feed">Feed</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
