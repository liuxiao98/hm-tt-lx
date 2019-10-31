<template>
  <el-card>
    <div slot="header">
        <my-bread>个人设置</my-bread>
    </div>
     <!-- 栅格系统 -->
      <el-row>
        <el-col :span="12">
          <!-- 表单 -->
          <el-form label-width="120px">
            <el-form-item label="编号：">中央认证:007</el-form-item>
            <el-form-item label="手机：">18333508965</el-form-item>
            <el-form-item label="媒体名称：">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="媒体介绍：">
              <el-input v-model="userInfo.intro" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input v-model="userInfo.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="save()">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <!-- 上传组件 -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align:center;font-size:14px">修改头像</p>
        </el-col>
      </el-row>
  </el-card>
</template>

<script>
import local from '@/utils/local'
export default {
  data () {
    return {
      userInfo: {
        name: '',
        intro: '',
        email: '',
        photo: ''
      },
      imageUrl: null
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data: { data } } = await this.$http.get('user/profile')
      this.userInfo = data
    },
    async save () {
      const { name, intro, email } = this.userInfo
      await this.$http.patch('user/profile', { name, intro, email })
      // 成功
      // 提示
      this.$message.success('保存设置成功')
      // 更新 本地存储  用户名称
      const localUser = local.getUser()
      localUser.name = name
      local.setUser(localUser)
      // 更新 HOME组件  用户名称
      // eslint-disable-next-line no-undef
      eventBus.$emit('updateName', name)
    }
  }
}
</script>

<style scoped lang='less'></style>
