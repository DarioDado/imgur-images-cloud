<template>
  <div class="image-wraper">
    <img :src="image.link" >
    <i class="trash icon"></i>
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    image: Object,
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

