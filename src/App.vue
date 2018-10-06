<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="routeView"/>
  </div>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  components: {
    navBar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3.5em;
  background: #daf4ee;
}
textarea, select, input, button { outline: none; }
</style>
