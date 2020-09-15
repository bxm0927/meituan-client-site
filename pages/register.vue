<!--
  注册页面
  表单使用的是 element-ui From 组件: https://element.eleme.cn/#/zh-CN/component/form
-->

<template>
  <div class="page">
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
          <el-button size="mini" round :disabled="codeCountdown ? true : false" @click="getCode">
            获取验证码
          </el-button>
          <span v-if="codeCountdown" class="count">
            验证码已发送，有效期剩余{{ codeCountdown }}秒
          </span>
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
import MD5 from 'crypto-js/md5'

export default {
  data() {
    // 自定义校验规则
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPassword !== '') {
          this.$refs.ruleForm.validateField('checkPassword')
        }
        callback()
      }
    }
    const validateCheckPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      codeCountdown: '', // 验证码有效期倒计时
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
          { validator: validatePassword, trigger: ['blur', 'change'] },
        ],
        checkPassword: [
          { required: true, message: '请再次输入密码', trigger: ['blur', 'change'] },
          { validator: validateCheckPassword, trigger: ['blur', 'change'] },
        ],
      },
    }
  },
  methods: {
    // 获取验证码
    async getCode() {
      let usernamePass = false
      let emailPass = false

      // validateField 对部分表单字段进行校验的方法
      this.$refs.ruleForm.validateField('username', (err) => (usernamePass = !err))
      this.$refs.ruleForm.validateField('email', (err) => (emailPass = !err))
      if (!usernamePass || !emailPass) return false

      const { username, email } = this.ruleForm
      const result = await this.$axios.$post('/api/users/verify', {
        email,
        username: encodeURIComponent(username), // 对中文进行编码存储
      })
      if (result.code !== '0') return

      // 开启一个验证码有效期倒计时
      let count = 300
      let timer = null
      this.codeCountdown = count--
      timer = setInterval(() => {
        this.codeCountdown = count--
        if (count <= 0) {
          clearInterval(timer)
          this.codeCountdown = ''
        }
      }, 1000)
    },
    // 立即注册
    // 需要对密码进行加密传输
    async submitForm() {
      let pass = false

      // validate	对整个表单进行校验的方法
      this.$refs.ruleForm.validate((valid) => (pass = valid))
      if (!pass) return

      const { username, password, email, code } = this.ruleForm
      const result = await this.$axios.$post('/api/users/register', {
        code,
        email,
        password: MD5(password).toString(),
        username: encodeURIComponent(username), // 对中文进行编码存储
      })

      if (result.code === '0') {
        this.$message({
          message: '注册成功',
          type: 'success',
        })

        setTimeout(() => {
          location.href = '/login'
        }, 1500)
      } else {
        this.$alert(result.msg || '网络错误，请稍后再试', '注册失败', {
          confirmButtonText: '知道了',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #fff;
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
  .count {
    margin-left: 10px;
    color: #fe8c00;
  }
}
</style>
