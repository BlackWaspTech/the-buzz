import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as queries from '../queries/queries';
import { query, mutation } from 'wasp-graphql';
import { API } from './constants/constants';
import * as types from '../state/actions/actions';
import store from '../state/store';

const mapStateToProps = (store, ownProps) => ({
  user: store.user,
  cookies: ownProps.cookies
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.cookies.cookies.loggedIn) {
      const vars = {
        username: this.props.cookies.cookies.loggedIn
      };
      const init = {
        body: JSON.stringify({
          query: queries.findUser,
          variables: vars
        })
      };

      query(API, init)
        .then(res => {
          return res.json();
        })
        .then(resp => {
          store.dispatch(types.updateUser(resp));
        });
    }
  }

  submitBuzz(e) {
    e.preventDefault();
    let message = document.getElementById('buzzMessage').value;
    console.log(message);
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
        <div className="feedContainer">
          <div id="feed" className="feed" />
          <div>
            <form className="buzzMessageContainer">
              Message: <input id="buzzMessage" type="text" />
              <button
                onClick={e => {
                  this.submitBuzz(e);
                }}
                className="button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
