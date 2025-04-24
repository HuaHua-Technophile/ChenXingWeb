<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 主题模式控制
const isDarkMode = ref(false)

// 切换深色/浅色模式
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

// 组件挂载时初始化主题
onMounted(() => {
  // 先检查本地存储的主题设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else if (savedTheme === 'light') {
    isDarkMode.value = false
    document.documentElement.setAttribute('data-bs-theme', 'light')
  } else {
    // 如果没有保存的主题设置，则检查用户偏好
    const prefersDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDarkMode) {
      isDarkMode.value = true
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
  }
})
</script>

<template>
  <button
    class="btn btn-link p-1 fs-5 fs-md-3 d-flex align-items-center justify-content-center transition-500"
    @click="toggleTheme"
    aria-label="切换主题"
  >
    <div
      class="position-relative d-flex align-items-center justify-content-center"
      style="width: 1.2em; height: 1.2em"
    >
      <transition name="theme-toggle">
        <i v-if="!isDarkMode" key="moon" class="bi bi-sun"></i>
        <i v-else key="sun" class="bi bi-moon"></i>
      </transition>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.btn-link {
  &:hover {
    color: var(--bs-primary);
  }
}

// 过渡动画样式
.theme-toggle-enter-active,
.theme-toggle-leave-active {
  transition: all 0.5s ease;
}

.theme-toggle-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.theme-toggle-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

.theme-toggle-enter-to,
.theme-toggle-leave-from {
  opacity: 1;
  transform: rotate(0) scale(1);
}
</style>
