<template>
  <div class="cart-comp-wrapper">
    <div v-if="cartClosed" class="closed-cart-comp">
      <div class="cart-counter">{{ cartAmount }}</div>
      <button class="cart-btn" v-on:click="toggleCart"></button>
    </div>

    <div v-else class="open-cart-comp">
      <button class="cart-btn" v-on:click="toggleCart"></button>
      <h2>Din beställning</h2>

      <ul class="cart">
        <li v-for="item in cart" :key="item.id">
          <div class="li-grid">
            <div class="cart-name">
              <p class="item-name">{{ item.name }}</p>
            </div>

            <div class="cart-item-total">
              <p class="items-price small-text">{{ item.price * item.amount }}</p> 
            </div>

            <div class="amount-display small-text">
              <button v-on:click="addAmount(item)" class="amount-btn">∧</button>
              <span>{{ item.amount }}</span>
              <button v-on:click="subtractAmount(item)" class="amount-btn">∨</button>
            </div>  
          </div>

          
        </li>
      </ul>

      <div class="cart-bottom">
        <div>
          <h3>Total</h3>
          <p class="small-text">inkl moms + drönarleverans</p>
        </div>

        <div class="cart-dots"></div>

        <h3>{{ totalSum }} kr</h3>
      </div>

      <button v-on:click="confirmOrder" class="default-btn">Take my money!</button>

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
    totalSum: function() {
      let cart = this.$store.state.cart;
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].amount * cart[i].price;
      }
      return sum;
    },
    cartAmount: function() {
      let cart = this.$store.state.cart;
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].amount;
      }
      return sum;
    }
  },
  methods: {
    toggleCart() {
      this.$store.commit("toggleCart");
    },
    confirmOrder() {
      let order = {};
      order.cart = this.$store.state.cart;
      order.totalSum = this.totalSum;
      order.orderNumber = Date.now();
      
      let date = new Date();
      let year = date.getUTCFullYear().toString().substr(-2);
      let month = date.getUTCMonth() + 1; //months from 1-12
      let day = date.getUTCDate();
      order.date = year + "/" + month + "/" + day;

      this.$store.state.orders.push(order);

      this.$store.commit("clearCart");

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
.closed-cart-comp {
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 50px;
  width: 50px;
  height: 50px;
}
.cart-btn {
  grid-row: 1;
  grid-column: 1;

  background: url("../assets/cart-btn.svg");
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
  align-self: flex-end;
} 
.cart-counter {
  grid-row: 1;
  grid-column: 1;
  justify-self: right;

  background-color: red;
  width: 14px;
  height: 14px;
  font-size: 12px;
  border-radius: 50%;
  color: white;
  z-index: 1;
}
.li-grid {
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
}
.cart-name {
  border-bottom: 2px dotted black;
  outline: 4px solid white;
  grid-column: 1;
  grid-row: 1;
  display: inline;
  text-align: left;
}
.cart-name p {
  outline: 4px solid white;
  display: inline;
  text-align: left;
}
.cart-item-total {
  grid-column: 1;
  grid-row: 2;
}
.cart p {
  background-color: white;
  font-weight: 600;
  text-align: left;
}
.item-name {
  font-size: 20px;
}
.cart .items-price {
  font-weight: 100;
}
.amount-display {
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  font-weight: 900;
  outline: 4px solid white;
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
</style> 