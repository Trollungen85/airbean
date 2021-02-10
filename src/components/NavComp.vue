<template>
  <div>
    <ul class="nav">
      <li><router-link to="/menu">Meny</router-link></li>
      <li><router-link to="/about">Vårt Kaffe</router-link></li>
      <li><router-link to="/profile">Min Profil</router-link></li>
      <li><router-link to="/status">Orderstatus</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
  padding: 0;
  list-style: none;
}
</style>