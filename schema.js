const {gql} = require("apollo-server");

//type definitions describes how the data will look.
exports.typeDefs = gql`
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
