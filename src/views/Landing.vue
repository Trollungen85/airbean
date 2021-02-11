<template>
  <div>
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
.logo {
  background-color: var(--color1);
  width: 100px;
}
</style>