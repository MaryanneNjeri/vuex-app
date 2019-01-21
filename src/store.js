import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //we define our data here
  state: {
  title: 'My custom title',
  links: [
    'http://google.com',
    'http://coursetro.com',
    'http://youtube.com'
  ]
  },
  mutations: {

  },
  actions: {

  }
})
