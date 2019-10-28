<template>
  <div class="container">
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo_index.png" width="200px" alt />
      <!-- 表单 -->
      <el-form ref="loginForm" status-icon :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input @keyup.enter.native = "Login" v-model="loginForm.code" style="width:235px;margin-right:10px" placeholder="请输入验证码"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%" @keyup.enter.native = "Login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

import local from '@/utils/local'

export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      loginForm: {
        mobile: '18333508965',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6个字符的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    Login () {
      this.login()
    },
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$http.post('authorizations', this.loginForm).then(res => {
            local.setUser(res.data.data)
            this.$router.push('/')
          }).catch(() => {
            this.$message.error('手机号或验证码错误')
          })
        }
      })
    }
  }
}

</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/timg0.jpg") no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img{
    display: block;
    margin: 0 auto 30px;
  }
}
</style>
