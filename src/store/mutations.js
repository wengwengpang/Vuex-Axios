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

export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find(item => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.cart.push({
    product,
    quantity
  });
};
// export const SET_CART = (state, getCartItems) => {
//   state.cart = getCartItems;
// };
export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter(item => {
    return item.product.id !== product.id;
  });
};

export const CLEAR_CART_ITEMS = state => {
  state.cart = [];
};
