let findUser = `query findUser($username: String!){
  user(userName: $username) {
    id
    username
    biography
    password
    address
  }
}`;

let getAllUsers = `{
  allUsers {
    id
    username
  }
}`;

let addUser = `mutation addUser($username: String!, $password: String!, $address: String!, $biography: String!){
  addUser(username: $username, password: $password, address: $address, biography: $biography) {
    id
    username
    password
    address
    biography
  }
}`;

let addMessage = `mutation addMessage($user: String!, $message: String!){
  addMessage(user: $user, message: $message) {
    id
    message
    user {
      username
    }
  }
}`;

let findUserMessages = `query($username: String!) {
  user(userName: $username){
    messages{
      message
      user{
        username
      }
    }
  }
}`;

module.exports = {
  findUser,
  addUser,
  findUserMessages,
  addMessage,
  getAllUsers
};
