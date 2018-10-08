<template>
  <div class="home">
  <post-maker class="feed"></post-maker>
    <div v-if="posts.length > 0" class="table-wrap">
      <div class="feed" v-for="post in posts" v-bind:key="post.title">
        <HomeFeedPost project-name="post.title" profile-name="Alec Khoury" content="post.description"></HomeFeedPost>
      </div>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div>
</template>

<script>
import HomeFeedPost from './homeFeedPost'
import PostMaker from './postMaker'
import PostsService from '../services/PostsService'

export default {
  components: {PostMaker, HomeFeedPost},
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    background: #daf4ee;
    display: block;
    padding-top: .5em;
  }
  .feed {
    margin: 0 auto;
  }
</style>
projectName: String,
profileName: String,
expireTime: Date,
content: String,
