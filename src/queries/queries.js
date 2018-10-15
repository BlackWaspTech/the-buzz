let findUser = `query findUser($username: String!){
  user(userName: $username) {
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

module.exports = {
  findUser,
  addUser
};
