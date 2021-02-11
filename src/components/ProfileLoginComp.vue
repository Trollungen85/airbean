<template>
  <div>
    <img src="../assets/airbean_logo.svg" alt="" class="logo-mini">
    <h2>Välkommen till AirBean-familjen!</h2>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

    <form>
      <label for="name">Namn</label>
      <input type="text" name="name">

      <label for="email">Epost</label>
      <input type="text" name="email">
      
      <input type="checkbox" name="checkbox"> 
      <label for="checkbox">GDPR Ok!</label>

      <button>Brew me a cup!</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.logo-mini {
  width: 50px;
  background: var(--color1);
}
</style>