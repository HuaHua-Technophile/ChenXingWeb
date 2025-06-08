<script setup lang="ts">
// 首页组件
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ContactInfoSection from '@/components/ContactInfoSection.vue'
// 保留导入
import 'aos/dist/aos.css'
// 从JSON文件导入服务数据
import servicesData from '@/assets/services.json'
// 导入背景图片
import bgComputer from '@/assets/images/computer-1149148_1920.jpg'

// 获取路由实例
const router = useRouter()

// 为首页添加"软件开发"服务，确保9格显示
const services = [
  {
    title: '软件开发',
    titleEn: 'Software Development',
    description: '根据客户需求定制开发软件系统，实现业务数字化',
    descriptionEn:
      'Tailored software development fulfilling client-specific business digitalization needs',
    icon: 'bi-code-square',
  },
  ...servicesData,
]

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

// 服务文本轮播数据和状态
// 从services数据中提取标题
const serviceTexts = services.map((service) => service.title)
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

// 导航到服务页面的函数
const navigateToService = (index: number) => {
  if (index === 0) {
    // 如果是"软件开发"服务，导航到SoftwareDevView.vue
    router.push('/software-dev')
  } else {
    // 如果是其他服务，导航到IntelligentIntegrationView.vue，同时传递tab索引
    // 因为services数组的第一项是手动添加的软件开发，所以需要减1来匹配原始servicesData的索引
    const tabIndex = index - 1
    router.push({
      path: '/intelligent-integration',
      query: { tab: tabIndex },
    })
  }
}
</script>

<template>
  <main class="home-main position-relative">
    <!-- 首屏部分 -->
    <section class="hero-section overflow-hidden min-vh-100 d-flex align-items-center pt-5 pt-lg-0">
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="col-lg-6">
            <div
              class="position-relative z-index-1 text-lg-start text-center"
              data-aos="fade-right"
            >
              <h1 class="fs-4 fs-md-2 fs-lg-1 fw-bold mb-3 lh-sm">
                Empowering
                <span class="text-primary">Government & Enterprise Digital Transformation.</span>
              </h1>
              <p class="lead fs-5 fs-md-4 fs-lg-2 mb-3 mb-lg-4" data-aos="fade-right">
                政企<span class="text-primary fw-bold">智能化转型</span>与智能集成服务商
              </p>
              <p
                class="mb-3 mb-lg-5 d-flex fs-6 fs-md-4 justify-content-lg-start justify-content-center"
                data-aos="fade-right"
              >
                我们提供
                <span
                  class="service-text-wrapper ms-1 d-inline-block overflow-hidden"
                  style="min-width: 5rem"
                >
                  <span
                    class="position-relative service-text transition-750 d-inline-block fw-bold text-primary overflow-hidden"
                    :class="{ changing: isServiceChanging }"
                  >
                    {{ serviceTexts[currentServiceIndex] }}
                  </span>
                </span>
              </p>
              <div
                class="d-flex gap-3 justify-content-lg-start justify-content-center"
                data-aos="fade-up"
              >
                <a href="#services" class="btn btn-primary d-none d-lg-block btn-lg px-4 py-2"
                  >了解更多</a
                >
                <a href="#services" class="btn btn-primary d-lg-none btn px-3 py-1">了解更多</a>
                <a
                  href="#contact"
                  class="btn btn-outline-secondary d-none d-lg-block btn-lg px-4 py-2 blur-3"
                >
                  联系我们
                </a>
                <a href="#contact" class="btn btn-outline-secondary d-lg-none btn px-3 py-1 blur-3">
                  联系我们
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-5">
            <div class="position-relative text-center z-index-1" data-aos="fade-left">
              <div class="frosted-glass-backdrop position-absolute rounded-4"></div>
              <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <img
                  :key="currentImageIndex"
                  :src="`/images/home/${svgImages[currentImageIndex]}`"
                  alt="智能硬件系统"
                  class="img-fluid position-relative z-index-1"
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务介绍部分 -->
    <section
      id="services"
      class="py-3 py-lg-5 bgimg-center-cover bgimg-mask position-relative"
      :style="{ backgroundImage: `url(${bgComputer})` }"
    >
      <div class="container py-2 py-lg-5">
        <div class="row text-center mb-3 mb-lg-5">
          <div class="col-lg-8 mx-auto" data-aos="fade-up">
            <h2 class="fs-md-1 fs-2 fw-bold mb-3">
              我们的服务 <span class="text-primary">Our Services</span>
            </h2>
            <p class="lead fs-md-4 fs-5" data-aos="fade-up">
              提供硬件施工与软件开发的一体化智能解决方案<br /><span class="text-primary"
                >Integrated Smart Solutions for Hardware Construction and Software Development</span
              >
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-4">
            <div
              class="h-100 shadow-sm card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 position-relative rounded-4 p-4 text-center blur-10"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
              style="cursor: pointer"
              @click="navigateToService(index)"
            >
              <div class="mb-4">
                <i
                  :class="service.icon"
                  class="bi icon-rotate transition-750 d-inline-block fs-md-1 fs-2 text-primary"
                ></i>
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
    </section>

    <ContactInfoSection />

    <!-- 关于我们部分 -->
    <section class="py-3 py-lg-5">
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
              <div class="col-6" data-aos="zoom-in">
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
              <div class="col-6" data-aos="zoom-in">
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
              <div class="col-6" data-aos="zoom-in">
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
    <section class="py-3 py-lg-5">
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
            <div class="bg-body h-100 border-0 shadow-sm overflow-hidden transition-750">
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
        <div class="text-center mt-5" data-aos="fade-up">
          <button class="btn btn-outline-primary btn-lg fs-md-5 fs-6">查看更多案例</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.home-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/home/电路板背景.svg');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
}

/* 毛玻璃效果 */
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
    animation: blink 0.9s step-end infinite;
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
</style>
