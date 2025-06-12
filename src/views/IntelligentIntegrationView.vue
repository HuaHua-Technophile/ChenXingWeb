<template>
  <main
    class="bgimg-center-cover bgimg-mask"
    style="background-image: url('/images/pexels-cookiecutter-17489160.webp')"
  >
    <!-- 首屏 -->
    <section class="min-vh-100 container d-flex flex-column pt-5">
      <div class="row align-items-center flex-grow-1">
        <div class="col-md-6" data-aos="fade-right" data-aos-duration="1000">
          <img :src="randomImage" class="img-fluid rounded" alt="智能集成" />
        </div>
        <div class="col-md-6 ps-lg-5" data-aos="fade-left" data-aos-duration="1000">
          <p class="text-primary fw-bold">OUR ADVANTAGES</p>
          <h2 class="h3 mb-3">通过智能集成为您的业务赋能</h2>
          <p class="mb-4 text-body-secondary fs-lg-5">
            我们将分散的系统、应用和数据连接起来，打破信息孤岛，实现数据和流程的无缝流转，帮助您优化业务流程、提高决策效率、创造新的商业价值。
          </p>
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col mt-2 mt-md-4" v-for="advantage in advantages" :key="advantage">
              <div
                class="bg-body bg-opacity-25 blur-5 ps-3 py-2 py-md-3 rounded shadow-sm border-start border-primary border-5 h-100 d-flex align-items-center hover-up transition-500 fs-7 fs-md-6"
              >
                {{ advantage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <ContactInfoSection />

    <!-- 服务区域 -->
    <section class="container mt-5 pb-3">
      <!-- 服务Tab导航栏,aos动画会限制最大宽度，因此需要显式指定 -->
      <div
        class="row row-cols-4 row-cols-md-auto justify-content-between"
        id="servicesTabs"
        role="tablist"
        data-aos="fade-up"
        style="max-width: none !important"
      >
        <div class="col mb-3" v-for="(service, index) in services" :key="index">
          <button
            class="w-100 card overflow-hidden px-md-4 px-2 py-md-2 py-1 transition-750 bg-opacity-25 blur-6 hover-up"
            :class="[index === activeTab ? 'bg-primary-subtle text-primary shadow' : 'bg-body']"
            :id="`service-tab-${index}`"
            @click="activeTab = index"
            type="button"
            role="tab"
            :aria-controls="`service-content-${index}`"
            :aria-selected="index === activeTab"
          >
            <i :class="`bi ${service.icon} fs-4 icon-rotate transition-750`"></i>
            <span class="d-none d-md-inline mt-2">{{ service.title }}</span>
          </button>
        </div>
      </div>

      <!-- 服务内容区域 -->
      <div
        class="tab-content p-md-4 p-3 border rounded bg-body bg-opacity-50 overflow-hidden"
        id="servicesTabContent"
        data-aos="zoom-in"
        data-aos-duration="1200"
        style="position: relative; min-height: 400px"
      >
        <transition
          mode="out-in"
          :enter-active-class="`animate__animated ${enterClass}`"
          :leave-active-class="`animate__animated ${leaveClass}`"
          :duration="500"
        >
          <div
            :key="activeTab"
            class="w-100"
            :id="`service-content-${activeTab}`"
            role="tabpanel"
            :aria-labelledby="`service-tab-${activeTab}`"
          >
            <div class="service-header mb-4">
              <h2 class="mb-2">{{ services[activeTab].title }}</h2>
              <h4 class="text-primary mb-3">{{ services[activeTab].titleEn }}</h4>
              <p class="lead">{{ services[activeTab].description }}</p>
              <p class="text-secondary fst-italic mb-0">
                {{ services[activeTab].descriptionEn }}
              </p>
            </div>

            <!-- 服务详情内容区域 -->
            <div class="service-detail mt-4" v-if="services[activeTab].detailContent">
              <!-- 方案概述 -->
              <div
                class="card overflow-hidden hover-up bg-transparent blur-10 mb-4 transition-750"
                data-aos="fade-up"
              >
                <div
                  class="card-header text-white"
                  style="--bs-card-cap-bg: rgba(var(--bs-primary-rgb), 0.8)"
                >
                  <h5 class="mb-0">方案概述</h5>
                </div>
                <div class="card-body p-md-3 p-2">
                  <p>{{ services[activeTab].detailContent.overview }}</p>
                </div>
              </div>

              <!-- 系统架构 -->
              <div
                class="card overflow-hidden hover-up bg-transparent blur-10 mb-4 transition-750"
                data-aos="fade-up"
              >
                <div
                  class="card-header text-white"
                  style="--bs-card-cap-bg: rgba(var(--bs-primary-rgb), 0.8)"
                >
                  <h5 class="mb-0">系统架构</h5>
                </div>
                <div class="card-body p-md-3 p-2">
                  <div class="row">
                    <div class="col-md-6" data-aos="fade-right">
                      <p>{{ services[activeTab].detailContent.architecture }}</p>
                    </div>
                    <div class="col-md-6" data-aos="fade-left">
                      <img
                        :src="`/src/assets/images/services/${services[activeTab].detailContent.imageUrl}`"
                        :alt="`${services[activeTab].title}架构图`"
                        class="img-fluid rounded shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- 系统功能模块 -->
              <div
                class="card overflow-hidden hover-up bg-transparent blur-10 mb-4 transition-750"
                data-aos="fade-up"
              >
                <div
                  class="card-header text-white"
                  style="--bs-card-cap-bg: rgba(var(--bs-primary-rgb), 0.8)"
                >
                  <h5 class="mb-0">系统功能模块</h5>
                </div>
                <div class="card-body p-md-3 p-2">
                  <div class="row row-cols-1 row-cols-md-3 g-2 g-md-4">
                    <div
                      class="col"
                      v-for="(module, moduleIndex) in services[activeTab].detailContent.modules"
                      :key="moduleIndex"
                      :data-aos="'flip-up'"
                      :data-aos-delay="100 * moduleIndex"
                      data-aos-duration="600"
                    >
                      <div
                        class="d-flex align-items-center p-2 p-md-3 border rounded h-100 bg-body bg-opacity-75 shadow-sm"
                      >
                        <div
                          class="d-flex align-items-center justify-content-center bg-primary bg-gradient p-2 rounded-circle me-3"
                          style="width: 30px; height: 30px"
                        >
                          <i class="bi bi-check-lg text-white"></i>
                        </div>
                        <div>{{ module }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 方案价值 -->
              <div
                class="card overflow-hidden hover-up bg-transparent blur-10 transition-750"
                data-aos="fade-up"
              >
                <div
                  class="card-header text-white"
                  style="--bs-card-cap-bg: rgba(var(--bs-primary-rgb), 0.8)"
                >
                  <h5 class="mb-0">方案价值</h5>
                </div>
                <div class="card-body p-md-3 p-2">
                  <div class="row">
                    <div class="col-12">
                      <ul class="list-group list-group-flush">
                        <li
                          class="list-group-item bg-transparent d-flex align-items-center px-md-3 py-md-2 px-2 py-1"
                          v-for="(value, valueIndex) in services[activeTab].detailContent.values"
                          :key="valueIndex"
                          :data-aos="'fade-left'"
                          :data-aos-delay="100 * valueIndex"
                          data-aos-duration="600"
                        >
                          <span class="badge bg-primary rounded-pill me-3">
                            <i class="bi bi-star-fill"></i>
                          </span>
                          {{ value }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// 从JSON文件导入服务数据
import services from '@/assets/services.json'

const advantages = ['统一数据视图', '自动化业务流程', '提升运营效率', '快速响应市场']

// 用于随机展示的首页矢量图列表
const homeImages = [
  'undraw_two-factor-authentication_8tds.svg',
  'undraw_visionary-technology_6ouq.svg',
  'undraw_nakamoto_uy67.svg',
  'undraw_online-transactions_8chx.svg',
  'undraw_programming_65t2.svg',
  'undraw_progressive-app_9517.svg',
  'undraw_static-website_x3tn.svg',
  'undraw_ai-agent_pdkp.svg',
  'undraw_bull-market_4a8e.svg',
  'undraw_circuit_92r1.svg',
  'undraw_design-components_529l.svg',
  'undraw_devices_odm4.svg',
]
const randomImage = ref('')

// 获取当前路由信息
const route = useRoute()

// 当前激活的标签页
const activeTab = ref(0)
const prevTab = ref(0)
const transitionName = ref('')
const enterClass = ref('animate__fadeIn animate__faster') // 默认入场动画
const leaveClass = ref('animate__fadeOut animate__faster') // 默认退场动画

// 组件挂载后，从URL查询参数中获取tab索引
onMounted(() => {
  // 为页首设置随机图片
  const randomIndex = Math.floor(Math.random() * homeImages.length)
  randomImage.value = `/images/home/${homeImages[randomIndex]}`

  // 如果URL中有tab参数，则使用该参数设置激活的标签页
  if (route.query.tab !== undefined) {
    const tabIndex = Number(route.query.tab)
    // 确保索引有效
    if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < services.length) {
      activeTab.value = tabIndex
    }
  }
})

// 监听activeTab变化，根据切换方向设置动画
watch(activeTab, (newValue, oldValue) => {
  prevTab.value = oldValue

  // 根据切换方向设置动画类
  if (newValue > oldValue) {
    // 向右切换
    enterClass.value = 'animate__slideInRight animate__faster'
    leaveClass.value = 'animate__slideOutLeft animate__faster'
  } else if (newValue < oldValue) {
    // 向左切换
    enterClass.value = 'animate__slideInLeft animate__faster'
    leaveClass.value = 'animate__slideOutRight animate__faster'
  } else {
    // 首次加载或点击同一个标签
    enterClass.value = 'animate__fadeIn animate__faster'
    leaveClass.value = 'animate__fadeOut animate__faster'
  }
})
</script>

<style scoped lang="scss">
// 仅保留Bootstrap不能完全替代的样式
.nav-link {
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--bs-primary);
    opacity: 0.2;
    transition: height 0.4s;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--bs-shadow-sm);

    &::before {
      height: 100%;
    }

    i {
      transform: rotateY(180deg);
    }
  }
}
</style>
