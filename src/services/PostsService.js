import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },

  addPost (params) {
    return Api().post('posts', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPosts (params) {
    return Api().get('posts/' + params.id)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
