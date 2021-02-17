<template>
  <div class="cart-comp-wrapper">
    <div v-if="cartClosed" >
      <button class="cart-btn" v-on:click="toggleCart"></button>
    </div>

    <div v-else class="open-cart-comp">
      <button class="cart-btn" v-on:click="toggleCart"></button>
      <h2>Din beställning</h2>

        <!-- In med allt kaffe som du beställt -->
      <ul class="cart">
        <li v-for="item in cart" :key="item.id">
          <div>
            <p>{{ item.name }}</p>

            <!-- räkna ut priset här! -->
            <p class="items-price">{{ item.price * item.amount }}</p> 
          </div>

          <div class="cart-dots"></div>

          <div class="amount-display">
            <button v-on:click="addAmount(item)" class="amount-btn">∧</button>
            <span>{{ item.amount }}</span>
            <button v-on:click="subtractAmount(item)" class="amount-btn">∨</button>
          </div>
        </li>
      </ul>

      <div class="cart-bottom">
        <div>
          <h3>Total</h3>
          <p>inkl moms + drönarleverans</p>
        </div>

        <div class="cart-dots"></div>

        <h3>123 kr</h3>
      </div>

      <button v-on:click="toStatus" class="default-btn">Take my money!</button>

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
    },
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
    },
  }
}
</script>

<style>

.cart-comp-wrapper {
  width: 90%;
}
.open-cart-comp {
  display: flex;
  flex-direction: column;
}

.cart-btn {
  background: url("../assets/cart-btn.svg");
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
  align-self: flex-end;
} 
.cart li {
  display: grid;
  grid-template-columns: auto auto 20px;
  margin-bottom: 10px;
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
  font-size: 12px;
  font-weight: 900;
}
.cart-dots {
  border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
}
.amount-btn {
  outline: none;
  border: none;
  background: transparent;
}

.cart-bottom {
  justify-self: center;
  align-self: bottom;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-bottom: 10px;
  text-align: left;
  font-size: 23px;
  margin: 32px 0;
}
.cart-bottom p {
  font-size: 12px;
}
</style> 