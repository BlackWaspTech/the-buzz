const UpdateUser = 'UpdateUser';
const NewUser = 'NewUser';
const Logout = 'Logout';

const updateUser = updateInfo => ({ type: UpdateUser, updateInfo });
const newUser = newUserInfo => ({ type: NewUser, newUserInfo });
const logout = logout => ({ type: Logout });

module.exports = {
  UpdateUser,
  updateUser,
  NewUser,
  newUser,
  Logout,
  logout
};
