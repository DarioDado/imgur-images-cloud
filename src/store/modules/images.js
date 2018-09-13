import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: [],
  uploading: false,
  showDeleteModal: false,
  imageToDeleteHash: '',
};

const getters = {
  allImages: state => state.images,
  uploading: state => state.uploading,
  showDeleteModal: state => state.showDeleteModal,
  getImageToDeleteHash: state => state.imageToDeleteHash,
};

const actions = {
  showDeleteModal({ commit },deleteHash) {
    commit('setImageToDeleteHash', deleteHash);
    commit('setShowDeleteModalStatus', true);
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.add("body-modal");
  },
  cancelDeleteModal({ commit }) {
    commit('setShowDeleteModalStatus', false);
    commit('setImageToDeleteHash', '');
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.remove("body-modal");
  },
  async deleteImage({ commit, rootState }, deleteHash) {
    const { token } = rootState.auth;
    const response = await api.deleteImage(deleteHash,token);
    if(response.status === 200) {
      commit('setShowDeleteModalStatus', false);
      commit('setImageToDeleteHash', '');
      const body = document.getElementsByTagName("BODY")[0];
      body.classList.remove("body-modal");
      const images = rootState.images.images.filter(image => {
        return image.deletehash !== deleteHash;
      });
      commit('setImages', images);
    }
  },
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
  },
  setShowDeleteModalStatus: (state,status) => {
    state.showDeleteModal = status;
  },
  setImageToDeleteHash: (state, deleteHash) => {
    state.imageToDeleteHash = deleteHash;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}