import React, { Component } from 'react';
import store from '../state/store';
import * as types from '../state/actions/actions';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.cookies.remove('loggedIn', { path: '/' });
    this.props.cookies.remove('userId', { path: '/' });
    store.dispatch(types.logout());
  }

  render() {
    return <div>Log out</div>;
  }
}

export default Logout;
