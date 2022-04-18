const {ApolloServer, gql} = require("apollo-server");

// Scaler types
// - String
// - Int
// - Float
// - Boolean
// - ID

// Type definitions of data/ how it is going to look
// adds type safety
// ! - prevents null values from being returned
const typeDefs = gql`
  type Query {
    aString: String!
    anInt: Int
    aFloat: Float
    aBoolean: Boolean
  }
`;

// Resolvers return the data
// resolver names must match the type definitions above
const resolvers = {
  Query: {
    aString: () => {
      return "World!@";
    },
    anInt: () => {
      return 2022;
    },
    aFloat: () => {
      return 1.5;
    },
    aBoolean: () => {
      return true;
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
