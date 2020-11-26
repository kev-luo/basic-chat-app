const Message = require("../models/Message");

module.exports = {
  Query: {
    getMessages: async () => {
      const messages = await Message.find({});
      return messages;
    },
  },
  Mutation: {
    newMessage: async (_, args) => {
      const newMsg = await Message.create(args);
      return newMsg;
    },
  },
  Subscription: {
    subscribe: (_, args, { pubsub }) => {
      const channel = Math.random().toString(36).slice(2, 15);
      return pubsub.asyncIterator(channel);
    },
  },
};
