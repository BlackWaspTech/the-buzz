import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mutation } from 'wasp-graphql';
import * as queries from '../queries/queries';
import { API } from './constants/constants';
import * as types from '../state/actions/actions';
import store from '../state/store';

const mapStateToProps = store => ({
  user: store.user
});

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  submitNewUser(e) {
    e.preventDefault();
    const un = document.getElementById('userName').value;
    const pw = document.getElementById('passWord').value;
    const ad = document.getElementById('address').value;
    const bio = document.getElementById('biography').value;

    const vars = {
      username: un,
      password: pw,
      address: ad,
      biography: bio
    };

    const init = {
      body: JSON.stringify({
        query: queries.addUser,
        variables: vars
      })
    };

    mutation(API, init)
      .then(res => {
        return res.json();
      })
      .then(resp => {
        store.dispatch(types.newUser(resp));
      });
  }

  render() {
    return (
      <div>
        <div className="sing-up-header">Sign Up</div>
        <form className="form signUpForm">
          <div className="input-row">
            User Name: <input id="userName" className="input-box" type="text" />
          </div>
          <div className="input-row">
            Password: <input id="passWord" className="input-box" type="text" />
          </div>
          <div className="input-row">
            Addess: <input id="address" className="input-box" type="text" />
          </div>
          <div className="input-row">
            Biography:{' '}
            <input id="biography" className="input-box" type="text" />
          </div>
          <div className="input-row center">
            <button
              onClick={e => {
                this.submitNewUser(e);
              }}
              className="button button__sign-up"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SignUp);
