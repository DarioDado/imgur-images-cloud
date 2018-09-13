<template>
  <div class="modal-wraper">
    <div class="modal">
      <p class="modal-msg">Are you sure you want to delete this photo?</p>
      <div class="button-wraper">
        <button class="ui button cancel" @click="onCancel">Cancel</button>
        <button class="ui button delete" @click="onDelete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'DeleteModal',
  computed: {
    ...mapGetters(['getImageToDeleteHash']),
  },
  methods: {
    ...mapActions(['cancelDeleteModal','deleteImage']),
    onCancel() {
      this.cancelDeleteModal();
    },
    onDelete() {
      const deleteHash = this.getImageToDeleteHash;
      // console.log(deleteHash);
      this.deleteImage(deleteHash);
    }
  }
}
</script>

<style scoped>
  .modal-wraper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
  }
  .button-wraper {
    display: flex;
    justify-content: flex-end;
  }
  button.cancel:hover {
    color: white;
    background-color: #0079BE;
  }
  button.delete:hover {
    color: white;
    background-color: #E02630;
  }
</style>


