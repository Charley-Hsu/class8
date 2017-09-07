<template>
  <div>
    <div class="title">
      <el-tag type="danger" style="margin-right: 10px;">热门</el-tag>
      <span class="text">人气歌手：</span><span class="singer">{{name}}</span>
    </div>
    <el-collapse v-model="activeName" accordion class="box_collapse" v-if="data">
      <el-collapse-item :title="item.title" :name="index" v-for="(item,index) in data">
        <div class="content">{{item.content}}</div>
        <div class="name">~From：{{item.nickname}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    props: ['data', 'name'],
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
  .content
    font-size:14px;

  .name
    font-size:12px;
    margin-top:5px;

  .title
    height: 40px;
    border: 1px solid rgba(255,73,73,.2);
    line-height: 40px;
    font-size: 18px;
    margin-bottom: 10px;

  .text
    font-size: 15px;

  .singer
    color: rgba(255,73,73,.8);
</style>
