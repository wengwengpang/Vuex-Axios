import axios from "axios";

export let getProducts = ({ commit }) => {
  axios.get("https://fakestoreapi.com/products").then(response => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios.get(`https://fakestoreapi.com/products/${productId}`).then(response => {
    commit("SET_PROUDCT", response.data);
    console.log(response.data);
  });
};

export const addProductToCart = ({ commit }, productp) => {
  // console.log(products[0].product);
  commit("ADD_TO_CART", {
    product: productp.products[0].product,
    quantity: productp.products[0].quantity
  });
  // axios.post("https://fakestoreapi.com/carts", JSON.stringify(productp));
  // console.log(product);
};

// export const getCartItems = ({ commit }) => {
//   axios.get("https://fakestoreapi.com/carts").then(res => {
//     console.log(res);
//     commit("SET_CART", {
//       product: "res.data.products",
//       quantity: res.data.products
//     });
//   });
// };
export const removeProductFromCart = ({ commit }, product) => {
  commit("REMOVE_PRODUCT_FROM_CART", product);
};

export const clearCartItem = ({ commit }) => {
  commit("CLEAR_CART_ITEMS");
};
