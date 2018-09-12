<template>
  <div class="login-msg">
      <h2>Log in with your Imgur account and get started!</h2>
      <p>If you dont 't have Imgur account, sign up <a href="https://imgur.com/register?redirect=https%3A%2F%2Fimgur.com%2F" target="_blank">HERE</a></p>
  </div>
</template>

<script>
export default {
  name: 'LoginMessage',
}
</script>

<style scoped>
  .login-msg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: #eee;
    border-radius: 10px;
  }
</style>

