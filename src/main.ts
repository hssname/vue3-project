import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import router from './router/index'
import {useElementPlus} from './plugins/element'

const  app = createApp(App)
// 通过use 将 路由插件安装到 app 中
useElementPlus(app)

app.use(router)
app.mount('#app')
