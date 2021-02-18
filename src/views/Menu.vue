<template>
  <div class="default-page">
    
    <NavComp />
    <CartComp />

    <div v-show="showMenu" class="menu-wrapper">
        <h2>Meny</h2>
        <ul>
          <li v-for="item in menu" :key="item.id">
            <div class="li-grid-menu">
              <button class="add-btn" @click="addToCart(item)"></button>
              <div class="name">
                <h3>{{ item.name }}</h3>
              </div>
              <h3 class="price">{{ item.price }}</h3>
              <p class="description">{{ item.description }}</p>
            </div>
          </li>
        </ul>
    </div>
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
    showMenu: function() {
      return this.$store.state.cartClosed;
    },
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
.default-page {
  background-color: var(--color3);
}
.menu-wrapper {
  width: 80%;
}
.li-grid-menu {
  min-width: 80%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 1fr auto;
  justify-content: space-between;
}
.add-btn {
  width: 32px;
  height: 32px;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  background: url('../assets/add-btn.svg');
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
}
.name {
  grid-column: 2;
  grid-row: 1;
  border-bottom: 2px dotted black;
  text-align: left;
}
.name h3 {
  outline: 4px solid var(--color3);
  display: inline;
}
.price {
  grid-column: 3;
  grid-row: 1;
}
.description {
  grid-column: 2;
  grid-row: 2;
  text-align: left;
  margin-bottom: 20px;
  font-size: 10px;
}
</style>