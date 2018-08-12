<template>
  <div id="main">
    <div>
      <transition name="fade">
      <textarea v-if="textpost" placeholder="Showed Up"></textarea>
      </transition>
      <transition name="fade">
      <textarea v-if="imagepost" placeholder="Showed Up"></textarea>
      </transition>
      <transition name="fade">
      <textarea v-if="timepost" placeholder="Showed Up"></textarea>
      </transition>
    </div>
    <div class="padding">
      <toggle-button
        v-on:click="textpost"
        :sync="true"
        v-model="textpost"
        :labels="{checked: 'Toggle Text Post', unchecked: ''}"
        :width="150"
        :height="30"
        @change="updatePosts()"></toggle-button>
      <toggle-button
        v-on:click="imagepost"
        :sync="true"
        v-model="imagepost"
        :labels="{checked: 'Toggle Image Post', unchecked: ''}"
        :width="150"
        :height="30"
        @change="updatePosts()"></toggle-button>
      <toggle-button
        v-on:click="timepost"
        :sync="true"
        v-model="timepost"
        :labels="{checked: 'Toggle Time Post', unchecked: ''}"
        :width="150"
        :height="30"
        @change="updatePosts()"></toggle-button>
    </div>
    </div>
</template>

<script>
import ToggleButton from 'vue-js-toggle-button'
import Vue from 'vue'

Vue.use(ToggleButton);
export default {
  name: 'textPost',
  data: function () {
    return {
      textpost: true,
      imagepost: false,
      timepost: false
    }
  },
  methods: {
    updatePosts() {
      if (this.imagepost) {
        this.timepost = !this.timepost
      }
    }
  }
}
</script>

<style scoped>
  #main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px;
    display: inline-block;
    border: solid black 1px;
  }
  .padding {
    padding: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
