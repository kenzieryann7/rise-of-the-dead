import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import tooltip from "@/directives/tooltips.js";
import "@/assets/tooltips.css";

import "vue-directive-tooltip/dist/vueDirectiveTooltip.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "@/css/style.css";

const app = createApp(App)
  .use(store)
  .use(router);

app.config.globalProperties.axios = axios;
app.directive("tooltip", tooltip);
app.mount("#app");
