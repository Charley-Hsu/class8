<template>
  <el-collapse v-model="activeName" accordion class="box_collapse">
    <el-collapse-item :title="item.title" :name="index" v-for="(item,index) in data">
      <div>评论者：{{item.nickname}}</div>
      <div>{{item.content}}</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  export default {
    props: ['data'],
    data: function () {
      return {
        activeName: '-1'
      }
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="stylus" scoped>
  .box_collapse {
    text-align:left;
  }

</style>
