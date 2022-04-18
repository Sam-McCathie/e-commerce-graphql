const {categories} = require("../data.js");

exports.Product = {
  category: (parent, args, context) => {
    const {categoryId} = parent;
    console.log(parent);
    return categories.find((category) => category.id === categoryId);
  },
};
