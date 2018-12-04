import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'propcar',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],
  state: {
    pessoas: [],
    token: null
  },
  mutations: {

  },
  actions: {

  }
})
