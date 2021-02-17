<template>
  <div>
    <div v-if="cartClosed" >
      <button class="cart-btn" v-on:click="toggleCart"></button>
    </div>

    <div v-else>
      <button class="cart-btn" v-on:click="toggleCart"></button>
      <h2>Din beställning</h2>

        <!-- In med allt kaffe som du beställt -->
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }}
          <button>Upp</button>
          <span>{{ item.amount }}</span>
          <button>Ner</button>
        </li>
      </ul>

      <div>
        <h3>Total</h3>
        <h3>kr</h3>
        <p>inkl moms + drönarleverans</p>
      </div>

      <button v-on:click="toStatus">Take my money!</button>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartClosed: function() {
      return this.$store.state.cartClosed;
    },
    cart: function() {
      return this.$store.state.cart;
    }
  },
  methods: {
    toggleCart() {
      this.$store.commit("toggleCart");
    },
    toStatus() {
      this.$router.push("/status");
    }
  }
}
</script>

<style>
.cart-btn {
  background: url("../assets/cart-btn.svg");
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
} 
</style> 