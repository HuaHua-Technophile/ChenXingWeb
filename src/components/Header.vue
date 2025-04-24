<script setup lang="ts">
// 导入必要的Vue组合API和Vue Router
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

// 定义导航链接，可以根据实际需求修改
const navLinks = ref([
  { name: '首页', path: '/' },
  { name: '服务', path: '/services' },
  { name: '关于我们', path: '/about' },
  { name: '案例展示', path: '/cases' },
  { name: '客户服务', path: '/customer-service' },
  { name: '联系我们', path: '/contact' },
])

// 控制移动端菜单显示
const isNavOpen = ref(false)

// 获取当前路由
const route = useRoute()

// 切换菜单显示状态
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

// 滚动状态控制
const isScrolled = ref(false)

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

// 组件挂载时添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 组件卸载时移除滚动监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="navbar navbar-expand-lg position-fixed w-100 top-0 z-index-5 transition-750"
    :class="[
      { 'bg-transparent': !isScrolled && !isNavOpen, 'bg-blur shadow-sm': isScrolled || isNavOpen },
    ]"
  >
    <div class="container">
      <!-- Logo区域 -->
      <div class="d-flex align-items-center">
        <RouterLink
          class="navbar-brand transition-750 d-flex align-items-center hover-scale"
          to="/"
        >
          <img
            src="../assets/images/辰星LOGO.webp"
            alt="辰星Logo"
            width="30"
            height="30"
            class="me-2 logo-img"
          />
          <span class="fw-bold">ChenXing</span>
        </RouterLink>
      </div>

      <!-- 主题切换按钮 - 仅在移动端显示 -->
      <div class="d-flex d-lg-none align-items-center me-2">
        <ThemeToggle />
      </div>

      <!-- 移动端汉堡菜单按钮 -->
      <button
        class="navbar-toggler border-0 focus-none"
        type="button"
        @click="toggleNav"
        :aria-expanded="isNavOpen"
        aria-controls="navbarContent"
        aria-label="Toggle navigation"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <div class="hamburger-icon" :class="{ 'is-active': isNavOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- 导航链接 -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="(link, index) in navLinks" :key="index" class="nav-item py-2 py-lg-0">
            <RouterLink
              class="nav-link px-3 fw-medium transition"
              :to="link.path"
              :class="{ 'text-primary': route.path === link.path }"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>

        <!-- 主题切换按钮 - 仅在PC端显示 -->
        <div class="d-none d-lg-flex ms-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hover-scale:hover {
  transform: scale(1.1);
}

.transition {
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--bs-primary);
}

.focus-none:focus {
  box-shadow: none;
}

// 自定义汉堡菜单图标
.hamburger-icon {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--bs-body-color);
    border-radius: 2px;
    transition: all 0.3s;
    transform-origin: center;
  }

  &.is-active {
    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}

@media (min-width: 992px) {
  .logo-img {
    width: 45px;
    height: 45px;
  }
}

.bg-blur {
  background: rgba(var(--bs-body-bg-rgb), 0.8);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
