<!-- 应用程序根组件 -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import 'animate.css'
import { getAssetUrl } from '@/utils/getAssetUrl'

// 组件挂载时进行初始化
onMounted(() => {
  // 可以在这里添加全局初始化代码
})
</script>

<template>
  <div class="app-container">
    <Header />
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        :duration="500"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
/* 全局样式可以在这里添加 */
.animate__fadeIn,
.animate__fadeOut {
  animation-duration: 0.5s !important;
}
</style>
