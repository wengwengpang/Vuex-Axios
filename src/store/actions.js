import axios from "axios";

export let getProducts = ({ commit }) => {
  axios.get("https://fakestoreapi.com/products").then(response => {
    console.log(response.data);
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios.get(`https://fakestoreapi.com/products/${productId}`).then(response => {
    commit("SET_PROUDCT", response.data);
  });
};
