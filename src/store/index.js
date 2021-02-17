import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navClosed: true,
    cartClosed: true,
    user: { loggedIn: false},
    cart: [],
    orders: [],
    menu: [
      {
        id: 1,
        name: 'Bryggkaffe',
        price: 49,
        description: 'Bryggd på månadens bönor.',
        amount: 1
      },
      {
        id: 2,
        name: 'Caffé Doppio',
        price: 49,
        description: 'Bryggd på månadens bönor.',
        amount: 1
      },
      {
        id: 3,
        name: 'Cappuccino',
        price: 49,
        description: 'Bryggd på månadens bönor.',
        amount: 1
      },
      {
        id: 4,
        name: 'Latte Macchiato',
        price: 49,
        description: 'Bryggd på månadens bönor.',
        amount: 1
      },
      {
        id: 5,
        name: 'Kaffe Latte',
        price: 49,
        description: 'Bryggd på månadens bönor.',
        amount: 1
      },
      {
        id: 6,
        name: 'Cortado',
        price: 39,
        description: 'Bryggd på månadens bönor.',
        amount: 1
      }
    ]
  },
  getters:{
  },
  mutations: {
    toggleNav(state) {
      state.navClosed = !state.navClosed;
    },
    toggleCart(state) {
      state.cartClosed = !state.cartClosed; 
    },
    addUser(state, newUser) {
      state.user = newUser;
    },
    addToCart(state, item) {

      if (state.cart.length !== 0) {
        let foundItem = state.cart.find(cartItem => cartItem.id === item.id);
        foundItem.amount++;
        console.log(foundItem);
        state.cart[0].amount = foundItem.amount;
      }
      else {
        state.cart.push(item);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
