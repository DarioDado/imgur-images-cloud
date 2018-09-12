import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null,
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
  },
  logout: ({ commit }) => {
    commit('setToken', null);
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