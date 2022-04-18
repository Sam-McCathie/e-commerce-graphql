const {ApolloServer} = require("apollo-server");
// const {products, categories: cats} = require("./data.js");
const {typeDefs} = require("./schema.js");
const {Query} = require("./resolvers/Query");
const {Category} = require("./resolvers/Category");
const {Product} = require("./resolvers/Product");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

server.listen().then(({url}) => {
  console.log("Server is ready at " + url);
});
