let findUser = `query findUser($username: String!){
  user(userName: $username) {
    id
    username
    biography
    password
    address
  }
}`;

let addUser = `mutation addUser($username: String!, $password: String!, $address: String!, $biography: String!){
  addUser(username: $username, password: $password, address: $address, biography: $biography) {
    username
    password
    address
    biography
  }
}`;

let addMessage = `mutation addMessage($user: String!, $message: String!){
  addMessage(user: $user, message: $message) {
    message
  }
}`;

let findUserMessages = `query($username: String!) {
  user(userName: $username){
    messages{
      message
    }
  }
}`;

module.exports = {
  findUser,
  addUser,
  findUserMessages,
  addMessage
};
