const messages = [];

module.exports = {
  Query: {
    getMessages: () => messages,
  },
  Mutation: {
    newMessage: (_, args) => {
      const newMessg = {...args, id: messages.length};
      messages.push(newMessg);
      return newMessg;
    }
  }
}