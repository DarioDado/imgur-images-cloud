import api from '../../api/imgur';
import qs from 'qs';
import localStorage from '../../services/localStorageService';
import { router } from '../../main';

const state = {
  token: localStorage.getData('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const queryStringParams = qs.parse(hash.replace('#',''));
    const token = queryStringParams.access_token;
    commit('setToken', token);
    localStorage.setData('imgur_token', token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    localStorage.deleteData('imgur_token');
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}