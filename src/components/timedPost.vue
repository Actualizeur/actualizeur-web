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
    startTimedPost: function () {
      let workTime = this.workTime * 60000
      let current = Date.now()
      let workTimeExpire = new Date(current += workTime)
      PostsService.addPost({
        title: 'Test 08-05-18',
        description: 'test descript, time',
        workTime: workTime,
        workTimeExpire: workTimeExpire
      })
      new CountDownTimer(workTime, function (times, parameters) {
        console.log(times)
        workTime = times
      })
    }
  }
}
</script>

<style scoped>

</style>
