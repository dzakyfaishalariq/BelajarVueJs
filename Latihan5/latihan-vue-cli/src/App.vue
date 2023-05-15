<template>
  <div id="app" class="container mt-5">
    <!-- implementasi CSS boosterp -->
    <h1>IDShope</h1>
    <p class="animate__animated animate__fadeInRight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere saepe, omnis error
      voluptatibus dolorem fuga
      nemo modi recusandae ratione?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro sunt quis quae. Sit necessitatibus eligendi vero
      ratione? Debitis quae neque voluptatibus laudantium ratione possimus, sunt quam fugiat quaerat harum placeat cumque?
      Perspiciatis ipsum et nemo earum, rerum consequuntur. Hic eum corporis dicta provident accusamus dolore quidem non
      illum aspernatur, sunt culpa fugit debitis blanditiis soluta cupiditate perspiciatis a nam quaerat, eius itaque
      velit consequatur praesentium. Praesentium veniam sint, atque beatae illo consequatur maiores odio reiciendis nulla
      autem saepe iusto perferendis voluptatem dicta molestiae sed eligendi suscipit eos. At voluptatibus id, cupiditate
      adipisci reprehenderit repellendus dolorum. Fugiat amet ab nihil?
    </p>
    <!-- memanggil faShoppingCart kedalam porps font-awesome-icon -->
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price :value="100"></price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Price from './components/Price.vue';

export default {
  name: 'App',
  components: {
    FontAwesomeIcon,
    Price
  }
}
</script>
