<template>
  <div class="l-content">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <el-form ref="form" :model="form">
            <el-form-item>
                <el-input v-model="form.name" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.code" style="width:73%;margin-right:5px" placeholder="请输入验证码"></el-input>
                <el-button style="width:25%;padding-left:8px" >发送验证码</el-button>
            </el-form-item>
            <el-checkbox v-model="checked" style="margin-bottom:20px">我已阅读并同意用户协议和隐私条款</el-checkbox>
            <el-form-item>
                <el-button type="primary" style="width:100%">立即登录</el-button>
            </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      form: {
        name: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang='less'>
.l-content {
  width: 100%;
  height: 100%;
  background: url("../../assets/timg0.jpg") no-repeat center/ cover;
  position: absolute;
  left: 0;
  top: 0;
}

.el-card {
  width: 420px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    display: block;
    margin: 0 auto 30px;
  }
}
</style>
