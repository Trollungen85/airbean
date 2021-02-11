<template>
  <div>
      <button class="nav-btn" v-on:click="openNav"></button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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