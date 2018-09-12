<template>
  <div class="images-container">
    <img v-for="image in allImages" :src="image.link" :key="image.id">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  computed: {
    ...mapGetters(['allImages']),
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


