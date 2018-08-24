<template>
  <div>
    <div>
      <input title="Work Timer" placeholder="Put the minutes you want to work here" v-model="workTime">
    </div>
    <div>
      <button class="app_post_btn" @click="startTimedPost">Add</button>
    </div>

  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'timedPost',
  data: function () {
    return {
      workTime: '',
      workTimeExpire: ''
    }
  },
  methods: {
    countdownTimer: function (expireTimeMS) {
      let x = setInterval(function () {
        let now = new Date().getTime()

        let distance = expireTimeMS - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        hours = (hours < 10) ? '0' + hours : hours
        minutes = (minutes < 10) ? '0' + minutes : minutes
        seconds = (seconds < 10) ? '0' + seconds : seconds

        this.workTime = `${hours}:${minutes}:${seconds}`;
        console.log(this.workTime)
        // if (countdownTime < 0) {
        //   clearInterval(x)
        // }
      }, 1000)
    },
    startTimedPost: function () {
      let workTime = this.workTime * 60000
      let now = new Date().getTime()
      let expirationTime = (now + workTime)
      this.countdownTimer(expirationTime)
      PostsService.addPost({
        userId: this.$store.getters.userId,
        title: 'Test 08-12-18',
        description: 'description 08-12-18',
        workTime: workTime,
        workTimeExpire: expirationTime,
        isActive: true,
        userCompleted: false
      })
    }
  }
}
</script>

<style scoped>

</style>
