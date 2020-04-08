import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

// myAxios.js
const ax = axios.create({
  baseURL: 'http://localhost:5001/doce-flor-ff9c4/us-central1',
  headers: {
    common: {
    }
  }
});

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
  },
  actions: {
    listProducts ({ commit }) {
      
      ax.get('/products')
        .then(x => {
          commit('SET_PRODUCTS', x)
        })
    }
  },
  modules: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  }
})
