import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    products: [],
    product: null
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    }
  },
  getters: {},
  actions: {
    GET_PRODUCTS({ commit }) {
      axios.get("https://fakestoreapi.com/products").then(response => {
        commit("SET_PRODUCTS", response.data);
      });
    },
    GET_PRODUCT({ commit }, productID) {
      axios
        .get(`https://fakestoreapi.com/products/${productID}`)
        .then(response => {
          commit("SET_PRODUCT", response.data);
        });
    }
  }
});
