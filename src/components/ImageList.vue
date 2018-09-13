<template>
  <div>
    <div v-if="isLoggedIn" class="images-container">
      <image-item v-for="image in allImages" :key="image.id" :image="image"></image-item>
      <delete-modal v-if="showDeleteModal"></delete-modal>
    </div>
    <login-message v-else></login-message>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoginMessage from './LoginMessage';
import ImageItem from './ImageItem';
import DeleteModal from './DeleteModal';
export default {
  name: 'ImageList',
  components: {
    LoginMessage,
    ImageItem,
    DeleteModal,
  },
  computed: {
    ...mapGetters(['allImages','isLoggedIn','showDeleteModal']),
  },
  methods: {
    ...mapActions(['fetchImages']),
  },
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
  .images-container {
    column-count: 3;
    column-gap: 0;
  }
</style>


