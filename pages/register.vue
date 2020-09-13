<!--
  注册页面
  表单使用的是 element-ui From 组件: https://element.eleme.cn/#/zh-CN/component/form
-->

<template>
  <div class="page page-register">
    <!-- 头部 -->
    <header class="header">
      <div class="container clearfix">
        <a class="logo fl" href="/">
          <img src="@/assets/images/common/logo.png" alt="美团网" />
          <h1 class="offscreen">美团网</h1>
        </a>

        <div class="login fr">
          <span class="tip">已有美团账号？</span>
          <a class="btn" href="/login">登录</a>
        </div>
      </div>
    </header>

    <!-- 表单 -->
    <main class="form-content container">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱" />
        </el-form-item>

        <el-form-item>
          <el-button size="mini" round @click="getCode">获取验证码 {{ codeMessage }}</el-button>
        </el-form-item>

        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入邮箱中的验证码" maxlength="4" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" />
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPassword">
          <el-input v-model="ruleForm.checkPassword" placeholder="请再次输入密码" type="password" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    // 自定义校验规则
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      codeMessage: '', // 获取验证码提示信息

      // 表单参数
      ruleForm: {
        username: '',
        email: '',
        code: '',
        password: '',
        checkPassword: '',
      },

      // 表单校验规则
      rules: {
        username: [
          { required: true, type: 'string', message: '请输入用户名', trigger: ['blur', 'change'] },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: ['blur', 'change'] },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        code: [{ required: true, message: '请输入邮箱中的验证码', trigger: ['blur', 'change'] }],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: ['blur', 'change'] },
        ],
        checkPassword: [{ validator: validatePassword, trigger: ['blur', 'change'] }],
      },
    }
  },
  methods: {
    // 获取验证码
    getCode() {
      console.log('getCode')
    },
    // 立即注册
    submitForm() {
      console.log('register')
    },
  },
}
</script>

<style lang="scss" scoped>
.page-register {
  background-color: #fff;
}

.container {
  width: 980px;
}

.header {
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #d8d8d8;
  .logo {
    width: 100px;
    height: 60px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .login {
    height: 60px;
  }
  .tip {
    color: #666;
  }
  .btn {
    display: inline;
    padding: 4px 12px;
    color: #222;
    font-size: 12px;
    background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
    box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
  }
}

.form-content {
  box-sizing: border-box;
  padding: 30px 550px 30px 0;
}
</style>
