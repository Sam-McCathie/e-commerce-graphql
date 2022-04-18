const {ApolloServer, gql} = require("apollo-server");

// Type definitions of data/ how it is going to look
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolvers return the data
const resolvers = {
  Query: {
    hello: () => {
      return "World!@";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({url}) => {
  console.log("Server is ready at " + url);
});
