import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("https://fakestoreapi.com/products").then(res => {
    commit("GET_PRODUCTS", res.data);
  });
};
