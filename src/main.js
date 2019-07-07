import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';

import 'iview/dist/styles/iview.css';

// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
//import VueRouter from 'vue-router'

//Vue.use(VueRouter)

// var router = new VueRouter()
// router.start(App, "#app")
// router.redirect({
//   '*': '/main'
// })

Vue.use(iView);

// router.map({
//   '/main': {
//     component: function (resolve) {
//       require(['./components'], resolve)
//     },
//     subRoutes: {
//       '/': {   //进入mian页面中 子路由默认显示
//         name: 'viewone',
//         component: function (resolve) {
//           require(['./components/MainView'], resolve)
//         }
//       }
//     }
//   },
// })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
