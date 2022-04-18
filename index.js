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
    categoryId: String!
    category: Category
  }

  type Category {
    id: ID!
    name: String
    products: [Product!]!
  }
`;

// resolvers use the names from the type definition and returns the data
// resolvers have 3 parameters
// - parent -> accesss the values from the parent
// - args -> access the args passed to the resolver
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

  Category: {
    products: (parent, args, context) => {
      const {id} = parent;
      return products.filter((product) => product.categoryId === id);
    },
  },

  Product: {
    category: (parent, args, context) => {
      const {categoryId} = parent;
      return cats.find((category) => category.id === categoryId);
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
