// penggunaan API untuk membuat aplikasi Vue.js
var app = new Vue({
  el: "#app",
  data: {
    maximum: 50,
    products: null,
  },
  mounted: function () {
    // menggunakan fetch API
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
});
