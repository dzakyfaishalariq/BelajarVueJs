<template>
    <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave">
        <!-- penggunaan :key wajib untuk perulangan di tiap div untuk memberikan efek transisi ditiap div nya-->
        <div class="row d-none mb-3 aligen-items-center" v-for="(item, index) in showItem" :key="item.id"
            :data-index="index">
            <div class="card mb-3 mt-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="item.image" class="img-fluid rounded-start" :alt="item.image_title" />
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
                                <Price :value="Number(item.price)"></Price>
                            </div>
                            <hr />
                            <!-- Menggunakan emit untuk berkomunikasi dengan method addItem di objek induk -->
                            <button class="btn btn-info" @click="$emit('add', item)">
                                + Pilih
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
import Price from "./Price.vue";
export default {
    name: "product-list",
    components: {
        Price
    },
    props: [
        "products",
        "maximum"
    ],
    computed: {
        showItem: function () { // mengantikan fungsi if
            let max = this.maximum;
            return this.products.filter(function (item) {
                return item.price <= Number(max);
            });
        }
    },
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
    }
}
</script>