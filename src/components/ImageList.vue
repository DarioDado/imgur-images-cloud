<template>
  <div>
    <div v-if="isLoggedIn" class="images-container">
      <image-item v-for="image in allImages" :key="image.id" :image="image"></image-item>
    </div>
    <login-message v-else></login-message>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoginMessage from './LoginMessage';
import ImageItem from './ImageItem';
export default {
  name: 'ImageList',
  components: {
    LoginMessage,
    ImageItem,
  },
  computed: {
    ...mapGetters(['allImages','isLoggedIn']),
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


