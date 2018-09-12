<template>
  <div>
    <div v-if="isLoggedIn" class="images-container">
      <img v-for="image in allImages" :src="image.link" :key="image.id">
    </div>
    <login-message v-else></login-message>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoginMessage from './LoginMessage';
export default {
  name: 'ImageList',
  components: {
    LoginMessage,
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
  img {
    max-width: 100%;
    padding: 5px;
  }
</style>


