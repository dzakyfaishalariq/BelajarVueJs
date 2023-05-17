<template>
  <div id="app" class="container mt-5">
    <h1>MyShope</h1>
    <!-- lakukan agar props maximum terhubung di PriceSlider -->
    <!-- <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider> untuk Vue 2 js -->
    <price-slider :sliderStatus="sliderStatus" @update:maximum="maximum = $event"></price-slider>
    <product-list :products="products" :maximum="maximum" @add="addItem"></product-list>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import Price from './components/Price.vue';
import ProductList from "./components/ProductList.vue";
import PriceSlider from "./components/PriceSlider.vue";
export default {
  name: 'App',
  data: function () {
    return {
      maximum: 20,
      products: [],
      cart: [],
      sliderStatus: true,
    }
  },
  components: {
    ProductList,
    PriceSlider,
    // FontAwesomeIcon,
    // Price
  },
  mounted: function () {
    // menggunakan fetch API
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    addItem: function (product) {
      // this.cart.push(product);
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        // cari data array
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
  }
}
</script>


