import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Echarts from 'echarts'
import VueRouter from 'vue-router'
Vue.use(ElementUI) // vue全局设置
Vue.use(VueRouter)
Vue.use(Echarts)
import Login from './components/Login'
import TodoList from './components/TodoList'
import MapDemo from './components/MapDemo'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/', // 默认首页打开是登录页
    component: Login
  }, {
    path: '/todolist',
    component: TodoList
  }, {
    path: '/map',
    component: MapDemo
  }, {
    path: '*',
    redirect: '/' // 输入其他不存在的地址自动跳回首页
  }]
})
new Vue({
  router: router, // 启用router
  render: h => h(App)
}).$mount('#app') // 挂载到id为app的元素上
