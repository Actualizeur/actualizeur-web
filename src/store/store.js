import Vue from 'vue'
import Vuex from 'vuex'
import { AUTH_PEND, AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./mutationTypes";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    error: null
  },
  // methods: {
  //   login: function () {
  //     const { username, password } = this
  //     this.$store.dispatch(AUTH_USER, { username, password }).then(() => {
  //       this.$router.push('/posts')
  //     });
  //   }
  // },
  mutations: {
    [AUTH_PEND] (state) {
      state.pending = true
    },
    [AUTH_USER] (state) {
      state.isAuthenticated = true;
      state.pending = false
    },
    [UNAUTH_USER] (state) {
      state.isAuthenticated = false
    },
    [AUTH_ERROR](state, payload) {
      state.error = payload
    }
  },
  actions: {
    login({ commit }, creds) {
      commit(AUTH_PEND); // show spinner
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem("token", "JWT");
          commit(AUTH_USER);
          resolve();
        }, 1000);
      });
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit(UNAUTH_USER);
    }
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
    }
  }
});

export default store;

// const store = new Vuex.Store({
//   state: {
//     token: localStorage.getItem('user-token') || '',
//     status: '',
//   },
//   methods: {
//     login: function () {
//       const { username, password } = this
//       this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
//         this.$router.push('/')
//       })
//     }
//   },
//   getters: {
//     isAuthenticated: state => !!state.token,
//     authStatus: state => state.status,
//   }
// })
