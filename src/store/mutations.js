export const SET_PRODUCTS = (state, products) => {
  // // let ok = Array.prototype.slice.call(products);
  // let data = JSON.parse(JSON.stringify(products));
  // console.log(data);
  // state.default.products.push(data);
  // console.log(`11---${state.default.products}---11`);
  state.products = products;
};

export const SET_PROUDCT = (state, product) => {
  state.product = product;
};
