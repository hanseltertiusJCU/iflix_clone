// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import '@/assets/css/tailwind.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    config: {
      langName: 'Bahasa Indonesia',
      langCode: 'id',
      langId: 1491937,
      username: null,
      token: null,
      isLoggedIn: false
    }
  },
  getters: {
    getConfig: (state) => {
      return state.config;
    }
  },
  mutations: {
    updateConfig(state, payload) {
      state.config = {
        ...state.config,
        ...payload
      };
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store: store,
  vuetify: new Vuetify({})
})
