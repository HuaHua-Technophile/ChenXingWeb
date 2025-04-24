<script setup lang="ts">
// 首页组件
import { ref, onMounted, onUnmounted } from 'vue'
// 保留导入
import AOS from 'aos'
import 'aos/dist/aos.css'

// SVG图片路径数组
const svgImages = [
  'undraw_circuit_92r1.svg',
  'undraw_progressive-app_9517.svg',
  'undraw_online-transactions_8chx.svg',
  'undraw_two-factor-authentication_8tds.svg',
  'undraw_nakamoto_uy67.svg',
  'undraw_design-components_529l.svg',
  'undraw_devices_odm4.svg',
  'undraw_programming_65t2.svg',
  'undraw_static-website_x3tn.svg',
  'undraw_visionary-technology_6ouq.svg',
  'undraw_bull-market_4a8e.svg',
  'undraw_ai-agent_pdkp.svg',
]

// 当前展示的SVG索引
const currentImageIndex = ref(0)
let intervalId: number | null = null

// 切换图片的函数
const changeImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % svgImages.length
}

// 组件挂载时启动定时器，移除AOS初始化
onMounted(() => {
  intervalId = window.setInterval(changeImage, 10000)
  // 启动服务内容轮播
  serviceIntervalId = window.setInterval(changeServiceText, 4000)
})

// 组件卸载时清除定时器
onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
  // 清除服务内容轮播定时器
  if (serviceIntervalId !== null) {
    clearInterval(serviceIntervalId)
  }
})

// 服务数据
const services = [
  {
    title: '能源管控',
    titleEn: 'Energy Management',
    description: '智能能源监测系统，实时掌控能源使用情况，节约成本',
    descriptionEn:
      'Intelligent energy monitoring system for real-time control and cost optimization',
    icon: 'bi-lightning-charge',
  },
  {
    title: '消防系统',
    titleEn: 'Fire Protection Systems',
    description: '全方位消防系统集成，确保建筑安全',
    descriptionEn: 'Comprehensive fire safety integration ensuring building security',
    icon: 'bi-fire',
  },
  {
    title: '智慧养老',
    titleEn: 'Smart Elderly Care',
    description: '打造舒适安全的智能养老环境，提升生活质量',
    descriptionEn:
      'Creating comfortable and secure intelligent environments for enhanced quality of life',
    icon: 'bi-heart-pulse',
  },
  {
    title: '智能门禁',
    titleEn: 'Access Control Systems',
    description: '现代化门禁系统，提升安全管理效率',
    descriptionEn: 'Modern access control solutions for enhanced security management',
    icon: 'bi-door-open',
  },
  {
    title: '网络工程',
    titleEn: 'Network Engineering',
    description: '专业网络布线施工，保障网络高效稳定',
    descriptionEn:
      'Professional network infrastructure construction ensuring efficiency and stability',
    icon: 'bi-ethernet',
  },
  {
    title: '水利监测',
    titleEn: 'Hydraulic Monitoring',
    description: '水坝水位实时监测系统，确保水利设施安全',
    descriptionEn: 'Real-time dam water level monitoring systems for hydraulic facility safety',
    icon: 'bi-water',
  },
  {
    title: '软件定制',
    titleEn: 'Custom Software',
    description: '根据客户需求定制开发软件系统，实现业务数字化',
    descriptionEn:
      'Tailored software development fulfilling client-specific business digitalization needs',
    icon: 'bi-code-square',
  },
  {
    title: '系统集成',
    titleEn: 'System Integration',
    description: '软硬件一体化集成，打造智能化解决方案',
    descriptionEn: 'Unified hardware-software integration delivering intelligent solutions',
    icon: 'bi-gear-wide-connected',
  },
  {
    title: '智能楼宇',
    titleEn: 'Intelligent Buildings',
    description: '集成楼宇自控、安防监控等系统，实现建筑智能化管理',
    descriptionEn:
      'Integration of building automation and security systems for intelligent facility management',
    icon: 'bi-building',
  },
]

// 服务文本轮播数据和状态
const serviceTexts = [
  '能源管控',
  '消防系统',
  '智慧养老',
  '智能门禁',
  '网络工程',
  '水利监测',
  '软件定制',
  '系统集成',
  '智能楼宇',
]
const currentServiceIndex = ref(0)
const isServiceChanging = ref(false)
let serviceIntervalId: number | null = null

// 切换服务文本的函数
const changeServiceText = () => {
  isServiceChanging.value = true

  // 短暂延迟后更改文本内容
  setTimeout(() => {
    currentServiceIndex.value = (currentServiceIndex.value + 1) % serviceTexts.length

    // 文本更改后恢复宽度
    setTimeout(() => {
      isServiceChanging.value = false
    }, 500)
  }, 500)
}

// 客户案例数据
const cases = [
  {
    title: '某政府大楼能源管控系统',
    description: '为政府办公大楼实施能源监控系统，降低能耗30%，实现智能化管理',
    image: 'case1.jpg',
  },
  {
    title: '大型商业综合体消防系统',
    description: '为商业综合体提供消防系统集成服务，实现全自动火灾预警与处理',
    image: 'case2.jpg',
  },
  {
    title: '智慧养老社区改造',
    description: '为养老社区提供智能化升级改造，提升老年人生活质量与安全保障',
    image: 'case3.jpg',
  },
]
</script>

<template>
  <!-- 首屏英雄部分 -->
  <section
    class="hero-section position-relative overflow-hidden min-vh-100 d-flex align-items-center pt-5 pt-lg-0"
  >
    <div class="container">
      <div class="row align-items-center h-100">
        <div class="col-lg-6">
          <div
            class="hero-content position-relative z-1 text-lg-start text-center"
            data-aos="fade-right"
          >
            <h1 class="fs-4 fs-md-2 fs-lg-1 fw-bold mb-3 lh-sm hero-title">
              Professional <span class="text-primary">Intelligent Integration Solutions.</span>
            </h1>
            <p
              class="lead fs-6 fs-md-4 fs-lg-2 mb-3 mb-lg-4 hero-subtitle"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              硬件施工与<span class="text-primary fw-bold">软件定制开发</span>一体化服务
            </p>
            <p
              class="mb-3 mb-lg-5 d-flex fs-6 fs-md-4 hero-service-text justify-content-lg-start justify-content-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              我们提供
              <span
                class="service-text-wrapper ms-1 d-inline-block overflow-hidden"
                style="min-width: 5rem"
              >
                <span
                  class="position-relative service-text transition-500 d-inline-block fw-bold text-primary overflow-hidden"
                  :class="{ changing: isServiceChanging }"
                >
                  {{ serviceTexts[currentServiceIndex] }}
                </span>
              </span>
            </p>
            <div
              class="d-flex gap-3 justify-content-lg-start justify-content-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button class="btn btn-primary d-none d-lg-block btn-lg px-4 py-2">了解更多</button>
              <button class="btn btn-primary d-lg-none btn px-3 py-1">了解更多</button>
              <button class="btn btn-outline-secondary d-none d-lg-block btn-lg px-4 py-2">
                联系我们
              </button>
              <button class="btn btn-outline-secondary d-lg-none btn px-3 py-1">联系我们</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5">
          <div
            class="position-relative text-center position-relative z-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div class="frosted-glass-backdrop position-absolute rounded-4"></div>
            <transition name="fade" mode="out-in">
              <img
                :key="currentImageIndex"
                :src="`/images/home/${svgImages[currentImageIndex]}`"
                alt="智能硬件系统"
                class="img-fluid position-relative z-1"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 服务介绍部分 -->
  <section class="services py-3 py-lg-5">
    <div class="container py-2 py-lg-5">
      <div class="row text-center mb-3 mb-lg-5">
        <div class="col-lg-8 mx-auto" data-aos="fade-up">
          <h2 class="fs-md-1 fs-2 fw-bold mb-3">
            我们的服务 <span class="text-primary">Our Services</span>
          </h2>
          <p class="lead fs-md-4 fs-5" data-aos="fade-up" data-aos-delay="100">
            提供硬件施工与软件开发的一体化智能解决方案<br /><span class="text-primary"
              >Integrated Smart Solutions for Hardware Construction and Software Development</span
            >
          </p>
        </div>
      </div>
      <div class="row g-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-md-6 col-lg-4"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div
            class="bg-body h-100 border-0 shadow-sm hover-lift overflow-hidden transition-500 position-relative z-index-1 rounded-4"
          >
            <div class="position-relative z-index-2 p-4 text-center">
              <div class="mb-4">
                <i :class="service.icon" class="bi fs-md-1 fs-2 text-primary"></i>
              </div>
              <h3 class="fs-md-4 fs-5 fw-bold mb-2">{{ service.title }}</h3>
              <h4 class="fs-md-5 fs-6 text-primary mb-3">{{ service.titleEn }}</h4>
              <p class="mb-0 text-body-secondary fs-sm-6 fs-7">{{ service.description }}</p>
              <p class="mt-2 mb-0 text-primary fst-italic small fs-8">
                {{ service.descriptionEn }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 关于我们部分 -->
  <section class="about py-3 py-lg-5">
    <div class="container py-2 py-lg-5">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
          <img :src="`/images/home/${svgImages[6]}`" alt="关于我们" class="img-fluid rounded-4" />
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <h2 class="fs-md-1 fs-2 fw-bold mb-4">关于我们</h2>
          <p class="lead fs-md-4 fs-5 mb-4">我们是一家专注于智能化集成解决方案的综合服务商</p>
          <p class="mb-4 fs-sm-6 fs-7">
            我们致力于为政企客户提供从硬件施工到软件开发的一站式服务。多年来，我们已为众多政府部门和企业提供了能源管控、消防系统、智慧养老等智能化硬件施工，同时具备软件定制开发能力，为客户提供更全面的解决方案。
          </p>
          <div class="row g-4 mt-2">
            <div class="col-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="bi bi-check-circle-fill text-primary fs-md-3 fs-4"></i>
                </div>
                <div>
                  <h4 class="fs-md-5 fs-6 fw-bold mb-0">专业施工</h4>
                  <p class="mb-0 fs-7">资质齐全，经验丰富</p>
                </div>
              </div>
            </div>
            <div class="col-6" data-aos="zoom-in" data-aos-delay="200">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="bi bi-check-circle-fill text-primary fs-md-3 fs-4"></i>
                </div>
                <div>
                  <h4 class="fs-md-5 fs-6 fw-bold mb-0">一站式服务</h4>
                  <p class="mb-0 fs-7">硬件施工到软件开发</p>
                </div>
              </div>
            </div>
            <div class="col-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="bi bi-check-circle-fill text-primary fs-md-3 fs-4"></i>
                </div>
                <div>
                  <h4 class="fs-md-5 fs-6 fw-bold mb-0">软硬结合</h4>
                  <p class="mb-0 fs-7">智能硬件与软件集成</p>
                </div>
              </div>
            </div>
            <div class="col-6" data-aos="zoom-in" data-aos-delay="400">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="bi bi-check-circle-fill text-primary fs-md-3 fs-4"></i>
                </div>
                <div>
                  <h4 class="fs-md-5 fs-6 fw-bold mb-0">售后保障</h4>
                  <p class="mb-0 fs-7">长期维护，响应迅速</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 客户案例部分 -->
  <section class="cases py-3 py-lg-5">
    <div class="container py-2 py-lg-5">
      <div class="row text-center mb-5">
        <div class="col-lg-8 mx-auto" data-aos="fade-up">
          <h2 class="fs-md-1 fs-2 fw-bold mb-3">客户案例</h2>
          <p class="lead fs-md-4 fs-5">我们成功为众多政企客户提供智能化集成解决方案</p>
        </div>
      </div>
      <div class="row g-4">
        <div
          v-for="(item, index) in cases"
          :key="index"
          class="col-md-4"
          data-aos="flip-up"
          :data-aos-delay="index * 100"
        >
          <div class="bg-body h-100 border-0 shadow-sm overflow-hidden">
            <img
              :src="`/images/home/${svgImages[(index + 8) % svgImages.length]}`"
              :alt="item.title"
              class="card-img-top"
            />
            <div class="p-4">
              <h3 class="fs-md-4 fs-5 fw-bold mb-3">{{ item.title }}</h3>
              <p class="mb-0 text-secondary fs-sm-6 fs-7">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
        <button class="btn btn-outline-primary btn-lg fs-md-5 fs-6">查看更多案例</button>
      </div>
    </div>
  </section>

  <!-- 联系我们部分 -->
  <section class="contact py-3 py-lg-5">
    <div class="container py-2 py-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center mb-5" data-aos="fade-up">
          <h2 class="fs-md-1 fs-2 fw-bold mb-3">联系我们</h2>
          <p class="lead fs-md-4 fs-5">随时为您提供硬件施工与软件开发的智能化一体解决方案</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* 使用Bootstrap实现背景图案与主题样式 */
.hero-section {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/home/电路板背景.svg');
    background-size: cover;
    z-index: 0;
    opacity: 0.1;
  }

  [data-bs-theme='light'] &::before {
    opacity: 0.15;
    filter: invert(100%) brightness(60%) contrast(120%) hue-rotate(190deg);
  }
}

/* 淡入淡出效果 - 恢复原有的fade相关类以配合transition组件 */
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

/* 毛玻璃效果 - 简化并使用Bootstrap阴影类 */
.frosted-glass-backdrop {
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: rgba(var(--bs-body-bg-rgb), 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 1);
  z-index: 0;

  [data-bs-theme='dark'] & {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

/* 服务文本轮播动画 */
.service-text {
  white-space: nowrap;
  clip-path: inset(0 0 0 0);

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--bs-primary);
    animation: blink 1s step-end infinite;
  }

  &.changing {
    clip-path: inset(0 100% 0 0);
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* 卡片悬停效果 - 使用Bootstrap的transition类和自定义hover-lift类 */
.hover-lift {
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--bs-primary);
    opacity: 0.5;
    transition: height 0.4s;
    z-index: -1;
  }

  .bi {
    transition: transform 0.6s;
    display: inline-block;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--bs-shadow-lg) !important;

    &::before {
      height: 100%;
    }

    .bi {
      transform: rotateY(180deg);
    }
  }
}
</style>
