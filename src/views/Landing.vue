<template>
  <div class="landing-wrapper default-page">
    <div v-if="openedNav"><NavComp v-on:changeOpenedNav="changeOpenedNav" /></div>

    <div v-else @click="openNav">
      <img class="logo" src="../assets/airbean_logo.svg" alt="picure of a logo">
      <h1>AIR BEAN</h1>
      <p>DRONEDELIVERED COFFEE</p>
    </div>
  </div>
</template>

<script>
import NavComp from "@/components/NavComp.vue"
export default {
  data() {
    return {
      openedNav: false
    }
  },
  components: {
    NavComp
  },
  methods: {
    openNav() {
      this.openedNav = true;
    },
    changeOpenedNav() {
      this.openedNav = false;
    }
  }
}
</script>

<style>
.landing-wrapper {
  background: url("../assets/landingbackground.svg") no-repeat;
  background-size: cover;
}
.logo {
  background-color: var(--color1);
  width: 100px;
}
</style>