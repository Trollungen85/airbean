<template>
  <div class="default-page profile-wrapper">
    <NavComp class="nav-comp" />
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
.profile-wrapper {
  background-color: var(--color1);
  color: white;
}
</style>    