const {ApolloServer, gql} = require("apollo-server");
const {products, categories: cats} = require("./data.js");

//type definitions describes how the data will look.
const typeDefs = gql`
  type Query {
    basic: String
    products: [Product!]!
    product(id: String!): Product
    categories: [Category!]!
    category(id: String!): Category
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

  type Category {
    id: ID!
    name: String
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
    products: () => products,
    product: (parent, args, context) => {
      const {id} = args;
      return products.find((product) => product.id === id);
    },
    categories: () => cats,
    category: (parent, args, context) => {
      const {id} = args;
      return cats.find((category) => category.id === id);
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
