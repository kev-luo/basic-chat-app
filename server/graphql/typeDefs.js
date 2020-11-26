module.exports = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }
  type Query {
    getMessages: [Message!]
  }
  type Mutation {
    newMessage(user: String!, content: String!): Message!
  }
`