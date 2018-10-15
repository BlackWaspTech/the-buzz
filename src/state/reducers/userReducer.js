import * as types from '../actions/actions';

const initState = {
  isLoggedIn: false,
  userName: '',
  userAddress: '',
  userBiography: '',
  age: null,
  profileImage: ''
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
    default:
      return state;
  }
};

export default userReducer;
