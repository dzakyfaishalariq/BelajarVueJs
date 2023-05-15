import Vue from "vue";
import App from "./App.vue";
// import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import animate.css
import "animate.css/animate.min.css";
// import font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// lakukan penambahan library.add untuk setiap icon yang akan digunakan
library.add(faShoppingCart);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
