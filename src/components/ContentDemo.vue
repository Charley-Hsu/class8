<template>
  <div>
    <collapse :data="list"></collapse>
    <!--<card class="card"></card>-->
  </div>
</template>
<script>
  import card from './common/card'
  import collapse from './common/collapse'
  import jwt from 'jsonwebtoken'
  export default {
    created: function () {
      const userInfo = this.getUserInfo()
      if (userInfo !== null) {
        this.id = userInfo.id
        this.name = userInfo.name
      } else {
        this.id = ''
        this.name = ''
      }
      this.getContentInfo()
    },
    data: function () {
      return {
        name: '',
        list: [],
        id: ''
      }
    },
    computed: {},
    components: {
      card,
      collapse
    },
    methods: {
      getUserInfo: function () {
        const token = sessionStorage.getItem('demo-token')
        if (token != null && token !== 'null') {
          let decode = jwt.verify(token, 'vue-koa-demo')
          return decode
        } else {
          return null
        }
      },
      getContentInfo: function () {
        this.$http.get('/api/contentlist/' + this.id)
          .then((res) => {
            if (res.status === 200) {
              this.list = res.data
            } else {
              this.$message.error('获取列表失败！')
            }
          }, (err) => {
            this.$message.error('获取列表失败！')
            console.log(err)
          })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .card
    margin-top:20px;
</style>
