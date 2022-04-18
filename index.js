const {ApolloServer, gql} = require("apollo-server");

// Scaler types
// - String
// - Int
// - Float
// - Boolean
// - ID

// Arrays
// - could pass the above types instead of string
// - []! - means null cannot be returned instead of the array

// Type definitions of data/ how it is going to look
// adds type safety
// ! - prevents null values from being returned

// Product type defines an object.
const typeDefs = gql`
  type Query {
    aString: String!
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

// Resolvers return the data
// resolver names must match the type definitions above
const resolvers = {
  Query: {
    aString: () => {
      return "World!@";
    },
    products: () => {
      return [
        {
          name: "Chair",
          description: "Ergonomic",
          quantity: 5,
          price: 300,
          onSale: false,
        },
      ];
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
