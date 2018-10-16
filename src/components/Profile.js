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

    this.state = {
      allUsers: []
    };
  }

  componentWillMount() {
    if (this.props.cookies.cookies.loggedIn) {
      const vars = {
        username: this.props.cookies.cookies.loggedIn
      };
      const getBuzzMessages = {
        body: JSON.stringify({
          query: queries.findUserMessages,
          variables: vars
        })
      };

      query(API, getBuzzMessages)
        .then(res => {
          return res.json();
        })
        .then(resp => {
          store.dispatch(types.updateUserMessages(resp));
        });
      this.getAllUsers();
    }
  }

  componentDidMount() {
    if (this.props.cookies.cookies.loggedIn) {
      const vars = {
        username: this.props.cookies.cookies.loggedIn
      };
      const getUserInfo = {
        body: JSON.stringify({
          query: queries.findUser,
          variables: vars
        })
      };

      query(API, getUserInfo)
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
    console.log('running?');
    let message = document.getElementById('buzzMessage').value;
    let addMessageVars = {
      user: this.props.cookies.cookies.userId,
      message: message
    };
    const addMessageBody = {
      body: JSON.stringify({
        query: queries.addMessage,
        variables: addMessageVars
      })
    };
    mutation(API, addMessageBody)
      .then(res => {
        return res.json();
      })
      .then(resp => {
        store.dispatch(types.addMessage(resp));
        document.getElementById('buzzMessage').value = '';
      });
  }

  getAllUsers() {
    query(API, queries.getAllUsers)
      .then(res => {
        return res.json();
      })
      .then(resp => {
        console.log();
        for (let i = 0; i < resp.data.allUsers.length; i++) {
          if (
            this.props.cookies.cookies.loggedIn !=
            resp.data.allUsers[i].username
          ) {
            this.setState(prevState => ({
              allUsers: [
                ...prevState.allUsers,
                <div key={resp.data.allUsers[i].id} className="allUsers">
                  {resp.data.allUsers[i].username}
                </div>
              ]
            }));
          }
        }
      });
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
          <div id="feed" className="feed">
            {this.props.user.messages}
          </div>
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
        <div className="sideBarContainer">
          <div className="sideBarContainer__header">Other Users</div>
          {this.state.allUsers}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
