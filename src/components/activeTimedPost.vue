<template>
  <div class="box">
    <h1 class="bet_time">Posts</h1>
  </div>
</template>

<script>
// import PostsService from '../services/PostsService'
export default {
  name: 'activeTimedPost'
}
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.getPosts({
        id: req.
      })
      this.posts = response.data.posts
    }
//     async deletePost (id) {
//       await PostsService.deletePost(id)
//       this.getPosts()
//       this.$router.push({ name: 'Posts' })
//     }
//   }
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
