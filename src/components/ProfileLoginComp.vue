<template>
  <div class="profile-login-comp-wrapper">
    <img src="../assets/airbean_logo.svg" alt="" class="logo-mini">
    <h2>Välkommen till AirBean-familjen!</h2>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

    <form @submit.prevent class="login-form">
      <label for="name">Namn</label>
      <input v-model="newUser.name" type="text" name="name">

      <label for="email">Epost</label>
      <input v-model="newUser.email" type="text" name="email">
      
      <div class="checkbox-div">
        <input v-model="newUser.gdpr" type="checkbox" name="checkbox"> 
        <label for="checkbox">GDPR Ok!</label>
      </div>

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
.profile-login-comp-wrapper {
  background-color: var(--color3);
  color: black;
  width: 90%;
  margin: auto;
  padding: 32px 0;
}
.logo-mini {
  width: 24px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 50%;
}
.login-form {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 16px auto auto auto;
}
.login-form label {
    text-align: left;
}
.login-form input[type="text"] {
  background-color: var(--color3);
  width: 100%;
  height: 32px;
  margin: auto auto 16px auto;
  border-radius: 6px;
}
.login-form input[type="checkbox"] {
}
.checkbox-div {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-bottom: 32px;
}
</style>