<template>
  <div class="user-wrapper fl">
    <div v-if="userInfo" class="user-box">
      <span>欢迎您, {{ decodeURIComponent(userInfo.username) }}!</span>
      <span class="logout" @click="logout">[退出登录]</span>
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
      userInfo: '',
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const result = await this.$axios.$get('/api/users/info')
      if (result.code === '0') {
        this.userInfo = result.data
      }
    },
    async logout() {
      const result = await this.$axios.$get('/api/users/logout')
      if (result.code === '0') {
        this.$message({
          message: '成功退出登录！',
          type: 'success',
        })
        setTimeout(() => {
          location.reload()
        }, 1500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.user-wrapper {
  height: 40px;
  margin-left: 20px;
  line-height: 40px;

  .logout {
    margin-left: 10px;
    &:hover {
      color: #fe8c00;
      cursor: pointer;
    }
  }

  .login {
    color: #fe8c00;
  }

  .register {
    margin-left: 10px;
  }
}
</style>
