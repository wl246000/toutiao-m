import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vant 核心组件库
import Vant from 'vant'
// Vant 全局样式
import 'vant/lib/index.css'

// 全局样式文件
import './styles/index.less'

// 动态设置 REM 基准值
import 'amfe-flexible'

// 注册使用 Vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
