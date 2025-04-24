<!-- 应用程序根组件 -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// 组件挂载时进行初始化
onMounted(() => {
  // 可以在这里添加全局初始化代码
})
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style></style>
