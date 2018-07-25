<template>
  <div class="users">
    <h1>Create Your Profile</h1>
    <div class="form">
      <div>
        <input type="text" name="firstName" placeholder="First" v-model="firstName">
        <input type="text" name="lastName" placeholder="Last" v-model="lastName">
      </div>
      <div>
        <input type="text" name="username" placeholder="username" v-model="username">
        <input type="text" name="password" placeholder="password" v-model="password">
      </div>
      <div>
        <textarea rows="15" cols="15" placeholder="Personal Summary" v-model="summary"></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="addUser">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '../services/UsersService'
export default {
  name: 'newUser',
  data () {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      summary: ''
    }
  },
  methods: {
    async addUser () {
      await UsersService.addUser({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
        summary: this.summary
      })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
