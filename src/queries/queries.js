let findUser = `query findUser($username: String!){
  user(userName: $username) {
    username
    biography
    password
    address
  }
}`;

module.exports = {
  findUser
};
