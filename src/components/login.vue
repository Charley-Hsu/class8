<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <span class="title">
       欢迎登录
      </span>
      <el-row>
        <el-input
          v-model="account" placeholder="账号" type="text">
        </el-input>
        <el-input
          v-model="password" placeholder="密码" type="password" @keyup.enter.native="login">
        </el-input>
        <el-button type="primary" @click="login">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  /* eslint handle-callback-err: "warn" */
  export default {
    data: function () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        let obj = {
          name: this.account,
          password: this.password
        }
        this.$http.post('/auth/user', obj) // 将信息发送给后端
          .then((res) => {
            console.log(res)
            if (!res.data.success) {
              this.$message.error(res.data.info) // 登录失败，显示提示语
              sessionStorage.setItem('demo-token', null) // 将token清空
            } else { // 如果成功
              sessionStorage.setItem('demo-token', res.data.token) // 用sessionStorage把token存下来
              this.$message({ // 登录成功，显示提示语
                type: 'success',
                message: '登录成功！'
              })
              this.$router.push('/search') // 进入content页面，登录成功
            }
          }, (err) => {
            this.$message.error('请求错误！')
            sessionStorage.setItem('demo-token', null) // 将token清空
          })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .el-row.content
    padding 16px

  .title
    font-size 28px

  .el-input
    margin 12px 0

  .el-button
    width 100%
    margin-top 12px
</style>
