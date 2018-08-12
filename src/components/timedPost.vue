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
import CountdownTimer from 'countdown-timer-js'
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
    msToHMS: function (ms) {
      // 1- Convert to seconds:
      var seconds = ms / 1000
      // 2- Extract hours:
      var hours = parseInt(seconds / 3600) // 3,600 seconds in 1 hour
      seconds = seconds % 3600 // seconds remaining after extracting hours
      // 3- Extract minutes:
      var minutes = parseInt(seconds / 60) // 60 seconds in 1 minute
      // 4- Keep only seconds not extracted to minutes:
      seconds = seconds % 60
      hours = (hours < 10) ? '0' + hours : hours
      minutes = (minutes < 10) ? '0' + minutes : minutes
      seconds = (seconds < 10) ? '0' + seconds : seconds
      return (hours + ':' + minutes + ':' + seconds)
    },
    startTimedPost: function () {
      let workTime = this.workTime * 60000
      let current = Date.now()
      let workTimeExpire = new Date(current += workTime)
      workTime = this.msToHMS(workTime)
      new CountDownTimer(workTime, function (times, parameters) {
        console.log(times)
        workTime = times
      })
      console.log(this.$store)
      PostsService.addPost({
        title: 'Test 08-12-18',
        description: 'description 08-12-18',
        workTime: workTime,
        workTimeExpire: workTimeExpire
      })
    }
  }
}
</script>

<style scoped>

</style>
