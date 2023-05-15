import { createApp } from "vue";
import App from "./App.vue";

// import boostrep
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import animate.css
import "animate.css/animate.min.css";
// import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);
createApp(App).mount("#app");
