const { GraphQLServer } = require("graphql-yoga");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(({ port }) => {
  console.log(`port started on port ${port}`)
})