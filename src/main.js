import { createApp } from "vue";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(bootstrap)
  .mount("#app");
