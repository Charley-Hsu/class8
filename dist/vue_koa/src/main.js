'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

require('element-ui/lib/theme-default/index.css');

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _TodoList = require('./components/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _MapDemo = require('./components/MapDemo');

var _MapDemo2 = _interopRequireDefault(_MapDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_elementUi2.default); // vue全局设置
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_echarts2.default);

var router = new _vueRouter2.default({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/', // 默认首页打开是登录页
    component: _Login2.default
  }, {
    path: '/todolist',
    component: _TodoList2.default
  }, {
    path: '/map',
    component: _MapDemo2.default
  }, {
    path: '*',
    redirect: '/' // 输入其他不存在的地址自动跳回首页
  }]
});
new _vue2.default({
  router: router, // 启用router
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app'); // 挂载到id为app的元素上
//# sourceMappingURL=main.js.map