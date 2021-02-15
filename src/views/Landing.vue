<template>
  <div class="landing-wrapper default-page">
    <NavComp />

    <div>
      <img class="logo" src="../assets/airbean_logo.svg" alt="picure of a logo">
      <h1>AIR BEAN</h1>
      <p>DRONEDELIVERED COFFEE</p>
    </div>
  </div>
</template>

<script>
import NavComp from "@/components/NavComp.vue"
export default {
  components: {
    NavComp
  }
}
</script>

<style>
.landing-wrapper {
  background: url("../assets/landingbackground.svg") no-repeat;
  background-size: cover;
  text-align: center;
}
.logo {
  background-color: var(--color1);
  width: 100px;
}
</style>