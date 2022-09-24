import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    exchanges: [],
  },
  mutations: {
    SET_EXCHANGES(state, exchanges) {
      state.exchanges = exchanges;
    },
  },
  actions: {
    saveExchanges(context, exchanges) {
      context.commit('SET_EXCHANGES', exchanges);

      return true;
    },
  },
})

export default store;