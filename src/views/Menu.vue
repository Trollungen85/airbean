<template>
  <div>
    <h2>Meny</h2>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <button>+</button>
        <h3> {{ item.name }} </h3>
        <h3> {{ item.price }} </h3>
        <p> {{ item.description }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  computed: {
    menu: function() {
      return this.$store.state.menu;
    }
  }

}
</script>

<style>

</style>