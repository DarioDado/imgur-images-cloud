<template>
  <div>
    <img :src="image.link" >
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
</style>

