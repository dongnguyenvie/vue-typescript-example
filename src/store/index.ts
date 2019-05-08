import Vue from 'vue';
import Vuex from 'vuex';
import text from './modules/text';
import textTwo from './modules/text-two';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    text,
    textTwo,
  },
});
