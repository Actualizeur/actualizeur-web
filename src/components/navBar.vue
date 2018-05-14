<template>
  <div class="nav-bar">
    <nav>
      <router-link to="/" class="nav-item">Home</router-link> |
      <router-link to="/discover" class="nav-item">Discover</router-link> |
      <router-link to="/about" class="nav-item">About</router-link> |
      <router-link to="/posts" class="nav-item">Create Project</router-link> |
      <router-link to="/signup" class="nav-item">Sign Up</router-link> |
      <router-link to="/login" class="nav-item">Log In</router-link>
      <a href="#" v-if="isAuthenticated" @click="logout">Logout</a>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    }
  };
</script>
<style type="text/css">
.nav-item {
  padding: 20px;
}
</style>
