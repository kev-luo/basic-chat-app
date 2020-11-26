const Message = require("../models/Message");

const NEW_MESSAGE = "NEW_MESSAGE";

module.exports = {
  Query: {
    getMessages: async () => {
      const messages = await Message.find({});
      return messages;
    },
  },
  Mutation: {
    newMessage: async (_, args, context) => {
      const newMsg = await Message.create(args);
      context.pubsub.publish(NEW_MESSAGE, {
        newMessage: newMsg
      })
      return newMsg;
    },
  },
  Subscription: {
    newMessage: {
      subscribe: (_, __, context) => {
        console.log(context.pubsub);
        return context.pubsub.asyncIterator(NEW_MESSAGE);
      },
    },
  },
};
