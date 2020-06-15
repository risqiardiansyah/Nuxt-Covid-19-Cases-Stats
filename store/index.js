
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      negara: {},
      code: {}
    },
    mutations: {
      setNegara (state, data) {
        state.negara = data
      },
      setKey (state, data) {
        state.key = data
      },
      setStatusCode (state, data) {
        state.code = data
      }
    }
  })
}

export default createStore