import Api from './Api'

export default {
  fetchComments () {
    return Api().get('Comments')
  },

  addComment (params) {
    return Api().Comment('Comments', params)
  },

  updateComment (params) {
    return Api().put('Comments/' + params.id, params)
  },

  getComments (params) {
    return Api().get('Comments/' + params.id)
  },

  getComment (params) {
    return Api().get('Comment/' + params.id)
  },

  deleteComment (id) {
    return Api().delete('Comments/' + id)
  }
}
