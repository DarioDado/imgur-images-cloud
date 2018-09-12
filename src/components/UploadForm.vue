<template>
  <div>
    <div class="dropper">
      <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*">
      <span>Drag files here!</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'UploadForm',
  methods: {
    ...mapActions(['uploadImages']),
  }
}
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 10px dashed #ddd;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .dropper:hover {
    background-color: #eee;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }
  span {
    font-size: 30px;
    opacity: 0.7;
    font-weight: bold;
  }
</style>

