import './assets/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

AOS.init({
  duration: 800, // 动画持续时间，单位是毫秒。
  once: false, // 是否只执行一次动画。
  offset: 0, // 动画元素相对于视口的偏移量。
  delay: 300, // 动画延迟时间，单位是毫秒。
  disable: false, // 是否禁用AOS动画。
  throttleDelay: 100, // 滚动事件的节流延迟时间，控制AOS处理滚动事件的频率，最多每100毫秒才会响应一次滚动事件。
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
