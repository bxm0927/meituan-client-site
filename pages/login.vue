<template>
  <div class="page page-login">
    <!-- 头部 -->
    <header class="header">
      <div class="container">
        <a class="logo" href="/">
          <img class="logo-img" src="@/assets/images/common/logo.png" alt="美团网" />
          <h1 class="offscreen">美团网</h1>
        </a>
      </div>
    </header>

    <main class="container clearfix">
      <div class="left-bg fl">
        <img class="bg" src="@/assets/images/login/login-bg.jpeg" alt="美团网" />
      </div>

      <div class="right-form fr">
        <div :style="{ visibility: errorMessage ? 'visible' : 'hidden' }" class="error">
          <i class="el-icon-warning" />
          {{ errorMessage }}
        </div>

        <p class="title">账号登录</p>

        <el-input v-model="username" prefix-icon="el-icon-user" />
        <el-input v-model="password" prefix-icon="el-icon-lock" type="password" />

        <div class="forget-box clearfix">
          <el-checkbox v-model="remember">7天内自动登录</el-checkbox>
          <span class="forget fr">忘记密码？</span>
        </div>

        <el-button class="login" @click="login">登录</el-button>
        <p class="register-tip">
          还没有账号？
          <a class="register" href="/register">免费注册</a>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      errorMessage: '',
    }
  },
  methods: {
    login() {
      if (!this.username) {
        this.errorMessage = '请输入用户名'
        return
      }
      if (!this.password) {
        this.errorMessage = '请输入密码'
        return
      }
      this.errorMessage = ''
      console.log('login')
    },
  },
}
</script>

<style lang="scss">
body {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>
.container {
  width: 980px;
}

.header {
  box-sizing: border-box;
  margin: 40px auto 30px;
  .logo {
    display: inline-block;
    width: 130px;
    .logo-img {
      width: 100%;
    }
  }
}

.left-bg {
  width: 480px;
  height: 370px;
  .bg {
    width: 100%;
  }
}

.right-form {
  width: 270px;
  margin-right: 110px;
  .error {
    padding: 10px;
    font-size: 12px;
    background-color: #fff6db;
    border: 1px solid #f5d8a7;
    border-radius: 2px;
    i {
      color: #f08d34;
      font-size: 16px;
      vertical-align: text-top;
    }
  }
  .title {
    margin-top: 10px;
  }
  .el-input {
    margin-top: 10px;
  }
  .forget-box {
    margin-top: 10px;
  }
  .login {
    width: 100%;
    margin-top: 20px;
    color: #222;
    font-weight: bold;
    font-size: 14px;
    background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
    border: 0;
    box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
  }
  .register-tip {
    margin-top: 10px;
    color: #666;
    .register {
      color: #fe8c00;
    }
  }
}
</style>
