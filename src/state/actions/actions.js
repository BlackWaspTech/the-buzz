const UpdateUser = 'UpdateUser';
const NewUser = 'NewUser';
const Logout = 'Logout';
const UpdateUserMessages = 'UpdateUserMessages';

const updateUser = updateInfo => ({ type: UpdateUser, updateInfo });
const newUser = newUserInfo => ({ type: NewUser, newUserInfo });
const logout = logout => ({ type: Logout });
const updateUserMessages = updateMessages => ({
  type: UpdateUserMessages,
  updateMessages
});

module.exports = {
  UpdateUser,
  updateUser,
  NewUser,
  newUser,
  Logout,
  logout,
  UpdateUserMessages,
  updateUserMessages
};
