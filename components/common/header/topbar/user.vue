<template>
  <div class="user-wrapper fl">
    <div v-if="user" class="user-box">
      欢迎您，<span>{{ user.name }}</span> !
      <nuxt-link to="/logout">[退出]</nuxt-link>
    </div>

    <div v-else class="login-box">
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.user-wrapper {
  height: 40px;
  margin-left: 20px;
  line-height: 40px;

  .login {
    color: #fe8c00;
  }

  .register {
    margin-left: 10px;
  }
}
</style>
