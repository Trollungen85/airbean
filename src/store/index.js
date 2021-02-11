import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      {
        id: 1,
        name: 'Bryggkaffe',
        price: 49,
        description: 'Bryggd på månadens bönor.',
      },
      {
        id: 2,
        name: 'Caffé Doppio',
        price: 49,
        description: 'Bryggd på månadens bönor.',
      },
      {
        id: 3,
        name: 'Cappuccino',
        price: 49,
        description: 'Bryggd på månadens bönor.',
      },
      {
        id: 4,
        name: 'Latte Macchiato',
        price: 49,
        description: 'Bryggd på månadens bönor.',
      },
      {
        id: 5,
        name: 'Kaffe Latte',
        price: 49,
        description: 'Bryggd på månadens bönor.',
      },
      {
        id: 6,
        name: 'Cortado',
        price: 39,
        description: 'Bryggd på månadens bönor.',
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
