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
      updateUserState.userName = action.information.data.user.username;
      updateUserState.userAddress = action.information.data.user.address;
      updateUserState.userBiography = action.information.data.user.biography;

      return updateUserState;
    default:
      return state;
  }
};

export default userReducer;
