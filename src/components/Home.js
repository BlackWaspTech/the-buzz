import React, { Component } from 'react';
import image from '../assets/img/black-wasp.png';
import { query } from 'wasp-graphql';
import * as queries from '../queries/queries';
import { API } from './constants/constants';
import * as types from '../state/actions/actions';
import store from '../state/store';

class Home extends Component {
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

  render() {
    return (
      <div>
        <img src={image} />
        <div className="homeContainer">Welcome to The Buzz</div>
      </div>
    );
  }
}

export default Home;
