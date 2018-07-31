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
      workTime: ''
    }
  },
  methods: {
    startTimedPost: function () {
      let workTime = this.workTime * 60000
      new CountDownTimer(workTime, function (times, parameters) {
        console.log(times)
        workTime = times
      })
      PostsService.addPost({
        title: 'test title time',
        description: 'test descript, time',
        workTime: workTime
      })
      setInterval(PostsService.updatePost({
        workTime: workTime
      }), 3000);

    }
  }
}
</script>

<style scoped>

</style>
