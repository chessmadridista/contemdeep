import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function deleteLastExchange(exchanges) {
  const noOfExchanges = exchanges.length;
  exchanges = exchanges.filter((exchange) => {
    return exchange.exchangeID < noOfExchanges - 1;
  });
  
  return exchanges;
}

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
      exchanges = deleteLastExchange(exchanges);
      context.commit('SET_EXCHANGES', exchanges);

      return true;
    },
  },
});

export default store;