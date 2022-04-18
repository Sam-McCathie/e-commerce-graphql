// resolvers use the names from the type definition and returns the data
// resolvers have 3 parameters
// - parent -> accesss the values from the parent
// - args -> access the args passed to the resolver
// - context -> pass data from index file then destructure for use in queries
exports.Query = {
  basic: (parent, args, context) => "Hello",
  products: (parent, args, {products}) => products,
  product: (parent, args, context) => {
    // destructure option 1
    const {id} = args;
    const {products} = context;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, {categories}) => categories,
  category: (parent, {id}, {categories}) => {
    // destructure option 2
    return categories.find((category) => category.id === id);
  },
};
