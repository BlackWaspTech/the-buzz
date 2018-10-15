import * as types from '../actions/actions';

const initState = {
  isLoggedIn: false,
  userName: '',
  userAddress: '',
  userBiography: '',
  age: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UpdateUser:
      let updateUserState = Object.assign({}, state);

      return updateUserState;
    default:
      return state;
  }
};

export default userReducer;
