const {products, categories} = require("../data.js");

// resolvers use the names from the type definition and returns the data
// resolvers have 3 parameters
// - parent -> accesss the values from the parent
// - args -> access the args passed to the resolver
// - context
exports.Query = {
  basic: () => "Hello",
  products: () => products,
  product: (parent, args, context) => {
    const {id} = args;
    return products.find((product) => product.id === id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const {id} = args;
    return categories.find((category) => category.id === id);
  },
};
