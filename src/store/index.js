import { createStore } from "vuex";
import * as state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";
export default createStore({
  state,
  mutations,
  actions,
  getters
});
console.log(state.default.products);
