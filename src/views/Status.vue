<template>
  <div class="default-page">
    <p>Ordernummer: </p>

    <img src="../assets/drone.svg" alt="picture of a drone" class="drone-img">

    <h2>Din beställning är på väg!</h2>

    <p> minuter</p>

    <button v-on:click="toProfile">Ok, cool!</button>
  </div>
</template>

<script>
export default {
  methods: {
    toProfile() {
      this.$router.push("/profile");
    }
  }
}
</script>

<style>
.drone-img {
  width: 100px;
  
}
</style>