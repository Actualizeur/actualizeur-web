<template>
  <div v-if="this.activePost" class="box">
    <h1 class="bet_time">Posts</h1>
    <h2>{{ workTime }}</h2>

  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'activeTimedPost',
  data: function () {
    return {
      currentUser: {
        id: this.$store.getters.userId
      },
      activePost: {},
      workTime: 'Loading...'
    }
  },
  async mounted () {
    await this.getPosts()
    await this.fillPostBox()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.getPosts(this.currentUser)
      console.log(response)
      this.activePost = response.data
    },
    countdownTimer: function (expireTimeMS) {
      let x = setInterval(() => {
        let now = new Date().getTime()

        let distance = expireTimeMS - now

        if (distance < 0) {
          clearInterval(x)
          PostsService.updatePost({
            id: this.activePost.id,
            isActive: false
          })
        }

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        hours = (hours < 10) ? '0' + hours : hours
        minutes = (minutes < 10) ? '0' + minutes : minutes
        seconds = (seconds < 10) ? '0' + seconds : seconds
        console.log(this.workTime)
        this.workTime = `${hours}:${minutes}:${seconds}`
      }, 1000)
    },
    fillPostBox: function () {
      let expirationTime = new Date(this.activePost.workTimeExpire).getTime()
      return this.countdownTimer(expirationTime)
    }
  }
}
</script>
<style type="text/css">
  .box {
    border: solid black 1px;
    height: 200px;
    width: 500px;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .bet_time {
    position: absolute;
    bottom:0;
    right:0;
  }
</style>
