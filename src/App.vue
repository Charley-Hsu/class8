<!-- APP.vue -->
<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/node.png" class="logoImg">
      <img src="./assets/vue.png" class="logoImg">
      <img src="./assets/element.png" class="logoImg">
    </div>
    <router-view></router-view> <!-- 原本的Login换成了router-view 这就是路由视图渲染的目标元素-->
  </div>
</template>
<script>
  export default {
    name: 'app' // 不需要再引入`Login`\`TodoList`组件了，因为在路由里已经注册了
  }
</script>
<style lang="stylus" scoped>
  #app
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align:center;
    color:#2c3e50;
    margin-top:60px;

  .logoImg
    width:100px;

</style>
