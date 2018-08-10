import { userRequest, userError, userSuccess } from '../actions/user'
import Vue from 'vue'
import { authLogout } from '../actions/auth'

const state = { status: '', profile: {} }

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
}

const actions = {
  userRequest: ({commit, dispatch}) => {
    commit(userRequest)
      .then(res => {
        commit(userSuccess, res)
      })
      .catch(res => {
        commit(userError)
        // if resp is unauthorized, logout, to
        dispatch(authLogout)
      })
  }
}

const mutations = {
  userRequest: (state) => {
    state.status = 'loading'
  },
  userSuccess: (state, resp) => {
    state.status = 'success'
    Vue.set(state, 'profile', resp)
  },
  userError: (state) => {
    state.status = 'error'
  },
  authLogout: (state) => {
    state.profile = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
