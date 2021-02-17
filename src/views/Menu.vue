<template>
  <div class="default-page">

      <NavComp />
      <CartComp />


    <h2>Meny</h2>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <button class="add-btn" @click="addToCart(item)"></button>
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
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
    }
  }

}
</script>

<style>
.add-btn {
  width: 32px;
  height: 32px;
  background: url('../assets/add-btn.svg');
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
}
</style>