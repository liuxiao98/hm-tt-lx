<template>
  <div class="container-welcome">
    <img src="../../assets/login-bg.jpg" alt />
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('http://ttapi.research.itcast.cn/mp/v1_0/articles').then(res => {
      console.log(res.data)
    }).catch(() => {
      console.log('error')
    })
  }
}
</script>

<style scoped lang='less'>
.container-welcome {
    img{
    width: 100%;
    display: block;
    background-size: cover;
  }
}
</style>
