import React, { Component } from 'react';
import * as queries from '../queries/queries';
import { connect } from 'react-redux';
import { query } from '../utilities/wasp-graphql/index';
import { API } from './constants/constants';
import * as types from '../state/actions/actions';
import store from '../state/store';

const mapStateToProps = store => ({
  user: store.user
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  logUserIn(val) {
    val.preventDefault();
    let UN = document.getElementById('userName').value;
    let PW = document.getElementById('userPass').value;

    const vars = {
      username: UN
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
        if (resp.data.user.password === PW) {
          store.dispatch(types.updateUser(resp));
        }
      });
  }

  render() {
    if (this.props.user.isLoggedIn) {
      console.log('props logged in ');
    }
    return (
      <div className="loginContainer">
        <div className="loginBox">
          <form className="form login-form">
            <div className="login-space">
              User Name:{' '}
              <input id="userName" className="form-input" type="text" />
            </div>
            <div className="login-space">
              Password:{' '}
              <input id="userPass" className="form-input" type="text" />
            </div>
            <button
              onClick={e => {
                this.logUserIn(e);
              }}
              className="button button__login"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
