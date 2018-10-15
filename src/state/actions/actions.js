const UpdateUser = 'UpdateUser';
const NewUser = 'NewUser';

const updateUser = updateInfo => ({ type: UpdateUser, updateInfo });
const newUser = newUserInfo => ({ type: NewUser, newUserInfo });

module.exports = {
  UpdateUser,
  updateUser,
  NewUser,
  newUser
};
