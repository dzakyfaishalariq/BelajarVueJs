// penggunaan API untuk membuat aplikasi Vue.js
Vue.component("price", {
  data: function () {
    return {};
  },
  // props: ["value", "prefix", "precision"], //sesuaikan dengan atribut di component
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "Rp",
    },
    precision: {
      type: Number,
      default: 2,
    },
  },
  template: /*html*/ `
    <span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>
  `,
});
Vue.component("product-list", {
  props: ["products", "maximum"],
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 aligen-items-center animate__animated animate__fadeInRight";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 aligen-items-center animate__animated animate__fadeOutRight";
      }, delay);
    },
  },
  template: /*html*/ `
  <transition-group
  name="fade"
  tag="div"
  @beforeEnter="before"
  @enter="enter"
  @leave="leave"
  >
  <!-- penggunaan :key wajib untuk perulangan di tiap div untuk memberikan efek transisi ditiap div nya-->
  <div
    class="row d-none mb-3 aligen-items-center"
    v-for="(item, index) in products"
    :key="item.id"
    v-if="item.price <= Number(maximum)"
    :data-index="index"
  >
    <div class="card mb-3 mt-4">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="item.image"
            class="img-fluid rounded-start"
            :alt="item.image_title"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">{{ item.name }}</h1>
            <p class="card-text">{{ item.description }}</p>
            <!-- membuat filters di Vue js dengan menambahkan bilangan desimal 2 angka diblakang koma -->
            <!-- <h5 class="card-subtitle">
              {{ item.price | currencyFormat }}
            </h5> -->
            <div class="h5 float-right">
              <!-- gunakan props -->
              <price
                :value="Number(item.price)"
                :prefix="'Rp'"
                :decimal="2"
              ></price>
            </div>
            <hr />
            <!-- Menggunakan emit untuk berkomunikasi dengan method addItem di objek induk -->
            <button class="btn btn-info" @click="$emit('add',item)">
              + Pilih
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition-group>
  `,
});
var app = new Vue({
  el: "#app",
  data: {
    maximum: 50,
    products: null,
    cart: [],
    style: {
      label: ["form-control", "text-center", "mx-2"],
      // lable2: { width: "60px", "text-align": "center" },
      inputWidth: 60,
      sliderStatus: false,
    },
  },
  mounted: function () {
    // menggunakan fetch API
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  filters: {
    currencyFormat: function (value) {
      return "Rp" + Number.parseFloat(value).toFixed(2); // ubah nilai desimal menjadi desimal 2 angka
    },
  },
  // membuat kumpulan fungsi dari dalam methods
  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? "d-flex" : "d-none"; // pengunaan IF else ke 2
    },
    cartTotal: function () {
      let sum = 0;
      for (key in this.cart) {
        sum += this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (key in this.cart) {
        qty += this.cart[key].qty;
      }
      return qty;
    },
  },
  methods: {
    addItem: function (product) {
      // this.cart.push(product);
      var productIndex;
      var productExist = this.cart.filter(function (item, index) {
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
    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
});
