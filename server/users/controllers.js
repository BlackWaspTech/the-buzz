const Users = require('./model');

const createUser = (req, res) => {
  const {
    username,
    password,
    address,
    profileImage,
    biography,
    messages
  } = req.body;
  const whitelist = {
    username,
    password,
    address,
    profileImage,
    biography,
    messages
  };
  Users.create(whitelist, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document });
    else return res.status(200).send(document);
  });
};

const getAllUsers = (_, res) => {
  Users.find({}, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document });
    else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).send(document);
    }
  });
};

const findUserByUsername = (req, res) => {
  const { username } = req.params;
  Users.findOne({ username }, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document });
    else return res.status(200).send(document);
  });
};

const findUserById = (req, res) => {
  const { id } = req.params;
  Users.findOne({ _id: id }, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document });
    else return res.status(200).send(document);
  });
};

const updateUserById = (req, res) => {
  const { id } = req.params;
  const { prop, replace } = req.body;
  Users.findOneAndUpdate(
    { _id: id },
    { [prop]: replace },
    { new: true },
    (err, document) => {
      if (err || !document) return res.status(400).end({ err, document });
      else return res.status(200).send(document);
    }
  );
};

const deleteUserById = (req, res) => {
  const { id } = req.params;

  Users.findOneAndRemove({ _id: id }, (err, document) => {
    if (err || !document) return res.status(400).end({ err, document });
    else return res.status(200).send(document);
  });
};

module.exports = {
  createUser,
  getAllUsers,
  findUserByUsername,
  findUserById,
  updateUserById,
  deleteUserById
};
