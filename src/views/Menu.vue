<template>
  <div class="default-page">
    <NavComp />
    <CartComp />
    <h2>Meny</h2>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <button>+</button>
        <h3> {{ item.name }} </h3>
        <h3> {{ item.price }} </h3>
        <p> {{ item.description }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import NavComp from "@/components/NavComp.vue"
import CartComp from '../components/CartComp.vue';

export default {
  components: {
    NavComp,
    CartComp
  },
  computed: {
    menu: function() {
      return this.$store.state.menu;
    }
  }

}
</script>

<style>

</style>