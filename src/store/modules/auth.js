/* eslint-disable promise/param-names */
import { authRequest, authError, authSuccess, authLogout, saveUser } from '../actions/auth'
// import {saveUser, userRequest} from '../actions/user'
import axios from 'axios'

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false,
  user: ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const actions = {
  authRequest: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => { // The Promise used for router redirect in login
      commit(authRequest)
      axios.post('https://actualizeur-api.herokuapp.com/users/login', { username: user.username, password: user.password })
        .then(res => {
          console.log(res)
          const user = res.data.user
          const token = res.data.token
          localStorage.setItem('user-token', token) // index the token in localstorage
          axios.defaults.headers.common['Authorization'] = token
          commit(authSuccess, token)
          commit(saveUser, user)
          // you have your token, now log in your user :)
          // dispatch(userRequest);
          resolve(res)
        })
        .catch(err => {
          commit(authError, err)
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err)
        })
    })
  },
  authLogout: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(authLogout)
      localStorage.removeItem('user-token') // clear your user's token from localstorage
      // remove the axios default header
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}

const mutations = {
  authRequest: (state) => {
    state.status = 'loading'
  },
  authSuccess: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  authError: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  authLogout: (state) => {
    state.token = ''
  },
  saveUser: (state, user) => {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
