<template>
  <div>
    <img src="../assets/airbean_logo.svg" alt="" class="logo-mini">
    <h2>Välkommen till AirBean-familjen!</h2>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

    <form @submit.prevent>
      <label for="name">Namn</label>
      <input v-model="newUser.name" type="text" name="name">

      <label for="email">Epost</label>
      <input v-model="newUser.email" type="text" name="email">
      
      <input v-model="newUser.gdpr" type="checkbox" name="checkbox"> 
      <label for="checkbox">GDPR Ok!</label>

      <button v-on:click="login" class="default-btn">Brew me a cup!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        id: 1,
        name: "",
        email: "",
        gdpr: false,
        loggedIn: true
      }
    }
  },
  methods: {
    login() {
      if (
        this.newUser.name === "" ||
        this.newUser.email === "" ||
        this.newUser.gdpr === false
      ) {
        alert('Något står inte rätt till här...');
        return;
      }
        this.$store.commit("addUser", this.newUser);
    }
  }
}
</script>

<style>
.logo-mini {
  width: 50px;
  background: var(--color1);
}
</style>