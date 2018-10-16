const graphql = require('graphql');
const _ = require('lodash');
const User = require('../users/model');
const Message = require('../messages/model');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    address: { type: GraphQLString },
    biography: { type: GraphQLString },
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parent, args) {
        return Message.find({ userId: parent.id });
      }
    }
  })
});

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: GraphQLID },
    message: { type: GraphQLString },
    userId: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { userName: { type: GraphQLString } },
      resolve(parent, args) {
        return User.findOne({ username: args.userName });
      }
    },
    message: {
      type: MessageType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Message.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        biography: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let newUser = new User({
          username: args.username,
          password: args.password,
          address: args.address,
          biography: args.biography
        });
        return newUser.save();
      }
    },
    addMessage: {
      type: MessageType,
      args: {
        user: { type: new GraphQLNonNull(GraphQLString) },
        message: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let newMessage = new Message({
          userId: args.user,
          message: args.message
        });
        return newMessage.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
