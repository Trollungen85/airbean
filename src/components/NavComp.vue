<template>
  <div> 
    <div v-if="navClosed">
      <button class="nav-btn" v-on:click="toggleNav"></button>
    </div>
    <div class="nav-menu-wrapper" v-else>
      <button class="close-btn" v-on:click="toggleNav"/>
      <ul class="nav">
        <li><router-link class="router-link" to="/menu">Meny</router-link></li>
        <hr>
        <li><router-link class="router-link" to="/about">Vårt Kaffe</router-link></li>
        <hr>
        <li><router-link class="router-link" to="/profile">Min Profil</router-link></li>
        <hr>
        <li><router-link class="router-link" to="/status">Orderstatus</router-link></li>
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
      this.$emit("changeOpenedNav");
    }
  },
  created() {
    this.$store.commit("toggleNav"); 
    //Efter som naven är öppen när man navigerar fungerar det att toggla till Stäng
  }
}
</script>

<style>
.nav-menu-wrapper {
  display: flex;
  flex-direction: column;
  background: var(--color1);
  width: 100vw;
  height: 100vh;
}
.nav li {
  margin: 30px 0px;
}
.router-link {
  font-size: 32px;
  color: white;
  text-decoration: none;
}
hr {
  width: 50px;
  margin: auto;
  opacity: 0.2;
}
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
.close-btn {
  width: 50px;
  height: 50px;
  background: url('../assets/close-btn.svg');
  background-size: cover;
  border-radius: 50%;
  outline: none;
  border: none;
  align-self: flex-start;
  margin: 10px;
}
</style>