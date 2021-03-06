import * as types from '../actions/actions';
import React from 'react';

const initState = {
  isLoggedIn: false,
  userName: '',
  userAddress: '',
  userBiography: '',
  age: null,
  profileImage: '',
  messages: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UpdateUser:
      let updateUserState = Object.assign({}, state);
      updateUserState.isLoggedIn = true;
      updateUserState.userName = action.updateInfo.data.user.username;
      updateUserState.userAddress = action.updateInfo.data.user.address;
      updateUserState.userBiography = action.updateInfo.data.user.biography;
      return updateUserState;
    case types.NewUser:
      let newUserState = Object.assign({}, state);
      newUserState.isLoggedIn = true;
      newUserState.userName = action.newUserInfo.data.addUser.username;
      newUserState.userAddress = action.newUserInfo.data.addUser.address;
      newUserState.userBiography = action.newUserInfo.data.addUser.biography;
      return newUserState;
    case types.Logout:
      let logoutState = Object.assign({}, state);
      logoutState.isLoggedIn = false;
      logoutState.userName = '';
      logoutState.userAddress = '';
      logoutState.userBiography = '';
      logoutState.messages = [];
      return logoutState;
    case types.UpdateUserMessages:
      let updateUserMessageState = Object.assign({}, state);
      if (action.updateMessages.data) {
        let userMessages = action.updateMessages.data.user.messages;
        for (let i = 0; i < userMessages.length; i++) {
          updateUserMessageState.messages.push(
            <div className="feed__message" key={i}>
              <div>{userMessages[i].user.username}:</div>{' '}
              <div>{userMessages[i].message}</div>
            </div>
          );
        }
      }
    case types.AddMessage:
      let addMessageState = Object.assign({}, state);
      if (action.message) {
        addMessageState.messages.push(
          <div
            className="feed__message"
            key={action.message.data.addMessage.id}
          >
            <div>{action.message.data.addMessage.user.username}</div>
            <div>{action.message.data.addMessage.message}</div>
          </div>
        );
      }
      return addMessageState;
    default:
      return state;
  }
};

export default userReducer;
