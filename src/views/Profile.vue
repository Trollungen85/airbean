<template>
  <div>
    <p>Profile</p>
    <ProfileLoginComp />
    <ProfileUserComp />
  </div>
</template>

<script>

import ProfileLoginComp from '../components/ProfileLoginComp.vue'
import ProfileUserComp from '../components/ProfileUserComp.vue'

export default {
  components: {
    ProfileLoginComp,
    ProfileUserComp
  }

}
</script>

<style>

</style>