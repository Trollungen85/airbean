<template>
  <div> 
    <div v-if="navClosed">
      <button class="nav-btn" v-on:click="toggleNav"></button>
    </div>
    <div v-else>
      <button v-on:click="toggleNav">X</button>
      <ul class="nav">
        <li><router-link to="/menu">Meny</router-link></li>
        <li><router-link to="/about">Vårt Kaffe</router-link></li>
        <li><router-link to="/profile">Min Profil</router-link></li>
        <li><router-link to="/status">Orderstatus</router-link></li>
      </ul>
    </div>  
  </div>
</template>

<script>
export default {
  computed: {
    navClosed: function() {
      return this.$store.state.navClosed;
    }
  },
  methods: {
    toggleNav() {
      this.$store.commit("toggleNav");
    }
  },
  created() {
    this.$store.commit("toggleNav"); 
    //Efter som naven är öppne när man navigerar fungerar det att toggla till Stäng
  }
}
</script>

<style>
.nav {
  padding: 0;
  list-style: none;
}
.nav-btn {
    width: 50px;
    height: 50px;
    background: url('../assets/navicon.svg');
    background-size: cover;
    border-radius: 50%;
    outline: none;
    border: none;
}
</style>