<template>
  <div class="default-page">
    <NavComp />
    <div v-if="loggedIn">
      <ProfileUserComp />
    </div>
     <div v-else>
      <ProfileLoginComp />
    </div>
  </div>
</template>

<script>

import ProfileLoginComp from '../components/ProfileLoginComp.vue'
import ProfileUserComp from '../components/ProfileUserComp.vue'
import NavComp from "@/components/NavComp.vue"

export default {
  components: {
    ProfileLoginComp,
    ProfileUserComp,
    NavComp
  },
  computed: {
    loggedIn: function() {
      return this.$store.state.user.loggedIn;
    }
  }

}
</script>

<style>

</style>