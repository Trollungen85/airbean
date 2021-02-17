<template>
  <div class="default-page status-background">
    <p>Ordernummer: {{ orderNumber }}</p>

    <img src="../assets/drone.svg" alt="picture of a drone" class="drone-img">

    <h2>Din beställning är på väg!</h2>

    <p><span>15</span> minuter en kvart</p>

    <button v-on:click="toProfile" class="default-btn white-btn">Ok, cool!</button>
  </div>
</template>

<script>
export default {
  computed: {
    orderNumber: function() {
      let orders = this.$store.state.orders;
      orders = orders.reverse();
      return orders[0];
    }
  },
  methods: {
    toProfile() {
      this.$router.push("/profile");
    }
  }
}
</script>

<style>
.status-background {
  background: var(--color4);
  color: white;
}
.status-background p {
  margin-bottom: 32px;
}
.status-background p span {
  font-weight: 900;
}
.drone-img {
  width: 100px;
}
.white-btn {
  background: white;
  color: var(--color1);
}
</style>