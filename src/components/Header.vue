<template>
  <header
    class="navbar navbar-expand-lg position-fixed w-100 top-0 z-index-5 transition-750 bg-body bg-opacity-75"
    :class="[
      { 'bg-transparent': !isScrolled && !isNavOpen, 'blur-5 shadow': isScrolled || isNavOpen },
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
        class="navbar-toggler border-0 shadow-none"
        type="button"
        @click="toggleNav"
        :aria-expanded="isNavOpen"
        aria-controls="navbarContent"
        aria-label="Toggle navigation"
      >
        <div
          class="hamburger-icon position-relative d-flex flex-column justify-content-between"
          :class="{ 'is-active': isNavOpen }"
        >
          <span class="d-block w-100 transition-750"></span>
          <span class="d-block w-100 transition-500"></span>
          <span class="d-block w-100 transition-500"></span>
        </div>
      </button>

      <!-- 导航链接 -->
      <div
        class="collapse navbar-collapse"
        id="navbarContent"
        ref="navbarContent"
        @transitionend="onTransitionEnd"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li v-for="(link, index) in navLinks" :key="index" class="nav-item py-2 py-lg-0">
            <RouterLink
              class="nav-link px-3 fw-medium transition-750 position-relative"
              :to="link.path"
              :class="{ 'active-link text-primary fw-bold': route.path === link.path }"
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
<script setup lang="ts">
// 导入必要的Vue组合API和Vue Router
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

// 定义导航链接，可以根据实际需求修改
const navLinks = ref([
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '智能集成', path: '/intelligent-integration' },
  { name: '技术支持', path: '/tech-support' },
  { name: '软件开发', path: '/software-dev' },
  { name: '工程案例', path: '/cases' },
  { name: '联系我们', path: '/contact' },
])

// 控制移动端菜单显示
const isNavOpen = ref(false)

// 菜单内容DOM引用
const navbarContent = ref<HTMLElement | null>(null)

// 获取当前路由
const route = useRoute()

// 切换菜单显示状态
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
  const el = navbarContent.value
  if (el) {
    if (isNavOpen.value) {
      el.classList.add('show')
      const height = el.scrollHeight
      el.style.height = `${height}px`
    } else {
      el.style.height = `${el.scrollHeight}px`
      // Force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const tmp = el.offsetHeight
      el.style.height = '0px'
    }
  }
}

const onTransitionEnd = () => {
  const el = navbarContent.value
  if (el && isNavOpen.value) {
    el.style.height = ''
  } else if (el) {
    el.classList.remove('show')
  }
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
<style lang="scss" scoped>
.hover-scale:hover {
  transform: scale(1.1);
}

// 激活的导航链接样式
.active-link {
  text-shadow: 0 0 1px var(--bs-primary);
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 3px;
    background-color: var(--bs-primary);
    border-radius: 3px;
  }
}

// 自定义汉堡菜单图标
.hamburger-icon {
  width: 24px;
  height: 20px;

  span {
    height: 2px;
    border-radius: 2px;
    transform-origin: center;
    background-color: var(--bs-body-color);
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

// 为导航菜单添加过渡效果
.navbar-collapse {
  transition: height 0.35s ease;
  overflow: hidden;
  height: 0;

  &.show {
    height: auto;
  }
}

@media (min-width: 992px) {
  .navbar-collapse {
    height: auto;
    overflow: visible;
  }

  .logo-img {
    width: 45px;
    height: 45px;
  }
}
</style>
