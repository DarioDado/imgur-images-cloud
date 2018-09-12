import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: [],
  uploading: false,
};

const getters = {
  allImages: state => state.images,
  uploading: state => state.uploading,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response);
  },
  async uploadImages({ rootState, commit }, images) {
    commit('setUploadingStatus', true);
    const { token } = rootState.auth;
    await api.uploadImages(images,token);
    router.push('/');
    commit('setUploadingStatus', false);
  },
};

const mutations = {
  setImages: (state,images) => {
    state.images = images;
  },
  setUploadingStatus: (state,status) => {
    state.uploading = status;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}