<template>
  <div class="cart-comp-wrapper">
    <div v-if="cartClosed" >
      <button class="cart-btn" v-on:click="toggleCart"></button>
    </div>

    <div v-else>
      <button class="cart-btn" v-on:click="toggleCart"></button>
      <h2>Din beställning</h2>

        <!-- In med allt kaffe som du beställt -->
      <ul class="cart">
        <li v-for="item in cart" :key="item.id">
          <div>
            <p>{{ item.name }}</p>

            <!-- räkna ut priset här! -->
            <p class="items-price">{{ item.price }}</p> 
          </div>

          <div class="cart-dots"></div>

          <div class="amount-display">
            <button v-on:click="addAmount(item)">∧</button>
            <span>{{ item.amount }}</span>
            <button v-on:click="subtractAmount(item)">∨</button>
          </div>
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
    },
    addAmount(item) {
      this.$store.commit('addToCart', item);
    },
    subtractAmount(item) {
      let cart = this.$store.state.cart;
      let index = cart.findIndex(cartItem => cartItem === item);
      let subtract = {
        item: item,
        index: index
      }
      this.$store.commit('subtractAmount', subtract);
    }
  }
}
</script>

<style>

.cart-comp-wrapper {
  width: 90%;
}

.cart-btn {
  background: url("../assets/cart-btn.svg");
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
} 
.cart li {
  display: grid;
  grid-template-columns: auto auto auto;
}
.cart p {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}
.cart .items-price {
  font-size: 12px;
  font-weight: 100;
}
.amount-display {
  display: flex;
  flex-direction: column;
}
.cart-dots {
  border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
}
</style> 