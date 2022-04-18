const {ApolloServer, gql} = require("apollo-server");
const {products} = require("./data.js");

//type definitions describes how the data will look.
const typeDefs = gql`
  type Query {
    basic: String
    products: [Product!]!
    product(id: String!): Product
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

// resolvers use the names from the type definition and returns the data
// resolvers have 3 parameters
// - parent
// - args
// - context
const resolvers = {
  Query: {
    basic: () => "Hello",
    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      const {id} = args;
      const product = products.find((product) => product.id === id);
      if (!product) return null;
      return product;
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
