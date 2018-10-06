<template>
  <div class="postMaker" v-if="activePostMaker">
    <div id="textWrapper">
      <textarea id="postText" placeholder="Write Post..." style="resize: none;"></textarea>
    </div>
    <div class="buttons" >
      <button class="postDetail">Location</button>
      <button id="postButton">Post</button>
      <button class="postDetail">Image</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postMaker',
  data: function () {
    return {
      activePostMaker: true
    }
  }
}
</script>

<style scoped>
.postMaker {
  width: 35%;
  display: block;
}
#textWrapper {
  background: white;
  margin-bottom: 0.2em;
}
#postText {
  border-radius: 5px;
  border-color: transparent;
  outline-color: transparent;
  width: 100%;
  height: auto;
  padding: 10px;
}
.postDetail {
  width: 35%;
  border-radius: 25px;
}
#postButton {
  width: 20%;
}
</style>
