<template>
  <div class="image-wraper">
    <img :src="image.link" >
    <i class="trash icon" @click="onDelete"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ImageItem',
  props: {
    image: Object,
  },
  methods: {
    ...mapActions(['showDeleteModal']),
    onDelete(){
      const deleteHash = this.image.deletehash
      this.showDeleteModal(deleteHash);
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
    padding: 5px;
  }
  .image-wraper {
    position: relative;
  }
  i {
    position: absolute;
    bottom: 20px;
    right: 10px;
    font-size: 20px;
    color: tomato;
    cursor: pointer;
  }
  i:hover {
    font-size: 25px;
  }
  i {
    -webkit-transition: 0.4s; /* Safari */
    transition: 0.4s;
  }
</style>

