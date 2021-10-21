import { createStore } from 'vuex';

export default createStore({
  state: {
    VX_IS_LOGIN: false,
    VX_TOKEN: '',
  },
  mutations: {
    setToken(state, data) {
      state.VX_TOKEN = data
      state.VX_IS_LOGIN = data ? true : false
    }
  },
  actions: {
  },
  modules: {
  },
});