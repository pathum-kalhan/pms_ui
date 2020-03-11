import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';
import Cookies from 'js-cookie';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    name: '',
    token: '',
    role: '',
    permissions: [],
  },
  mutations: {
    setLogin(state, payload) {
      state.name = payload.name;
      state.token = payload.token;
      state.role = payload.role;
    },
    setLogout(state) {
      state.name = null;
      state.token = null;
      state.role = null;
      state.permissions = null;
    },
    setPermissions(state, payload) {
      state.permissions = payload;
    },
  },
  actions: {
    setPermissions({ commit }, payload) {
      return new Promise((resolve, reject) => {
        try {
          commit('setPermissions', payload);
          resolve();
        } catch (error) {
          reject();
        }
      });
    },
    login({
      commit,
    }, payload) {
      return new Promise((resolve, reject) => {
        try {
          axios.defaults.headers.common.Authorization = payload.token;
          Cookies.set('token', payload.token);
          commit('setLogin', payload);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    logout({
      commit,
    }) {
      return new Promise((resolve, reject) => {
        try {
          axios.defaults.headers.common.Authorization = null;
          Cookies.remove('token');
          commit('setLogout');
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  },

});
