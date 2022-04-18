exports.Category = {
  products: ({id}, {filter}, {products}) => {
    const categoryProducts = products.filter(
      (product) => product.categoryId === id
    );
    let filteredProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
  },
};
