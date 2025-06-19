<template>
  <main class="home-main position-relative">
    <!-- 首屏部分 -->
    <section class="container min-vh-100 d-flex flex-column pt-5">
      <div class="row align-items-center flex-grow-1">
        <div class="col-lg-6">
          <div class="position-relative z-index-1 text-lg-start text-center" data-aos="fade-right">
            <h1 class="fs-4 fs-md-2 fs-lg-1 fw-bold mb-3 lh-sm">
              Empowering
              <span class="text-primary">Government & Enterprise Digital Transformation.</span>
            </h1>
            <p class="lead fs-5 fs-md-4 fs-lg-2 mb-3 mb-lg-4 text-nowrap" data-aos="fade-right">
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
        <div class="col-lg-6 col-10 offset-1 offset-lg-0">
          <div class="position-relative text-center z-index-1" data-aos="fade-left">
            <div
              class="bg-body bg-opacity-25 border border-white blur-3 position-absolute rounded-4 z-index-0"
              style="top: -20px; left: -20px; right: -20px; bottom: -20px"
            ></div>
            <transition
              mode="out-in"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <img
                :key="currentImageIndex"
                :src="getAssetUrl(`images/home/${svgImages[currentImageIndex]}`)"
                alt="智能硬件系统"
                class="img-fluid position-relative z-index-1"
              />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务介绍部分 -->
    <section
      id="services"
      class="py-3 py-lg-4 bgimg-center-cover bgimg-mask position-relative"
      :style="{
        backgroundImage: `url(${getAssetUrl('images/computer-1149148_1920_11zon.webp')})`,
      }"
    >
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-8 mx-auto" data-aos="fade-up">
            <h2 class="fs-md-1 fs-2 fw-bold mb-3">
              我们的服务 <span class="text-primary">Our Services</span>
            </h2>
            <p class="lead fs-md-4 fs-6" data-aos="fade-up">
              提供硬件施工与软件开发的一体化智能解决方案<br /><span class="text-primary"
                >Integrated Smart Solutions for Hardware Construction and Software Development</span
              >
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-4">
            <div
              class="h-100 card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 rounded-4 p-2 p-lg-3 text-center blur-10"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
              style="cursor: pointer"
              @click="navigateToService(index)"
            >
              <div class="mb-2 mb-lg-3">
                <i
                  :class="service.icon"
                  class="bi icon-rotate transition-750 d-inline-block fs-md-1 fs-2 text-primary"
                ></i>
              </div>
              <h3 class="fs-md-4 fs-5 fw-bold mb-1 mb-lg-2">{{ service.title }}</h3>
              <h4 class="fs-md-5 fs-6 text-primary mb-2 mb-lg-3">{{ service.titleEn }}</h4>
              <p class="text-body-secondary fs-sm-6 fs-7 mb-1">{{ service.description }}</p>
              <p class="text-primary fst-italic small fs-8 mb-0">
                {{ service.descriptionEn }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们部分 -->
    <RouterLink
      to="/about"
      class="pt-2 pt-lg-4 position-relative bgimg-center-cover bgimg-mask text-decoration-none d-block text-body"
      :style="{
        backgroundImage: `url(${getAssetUrl('images/home/stairs-6133971_1920_11zon.webp')})`,
      }"
    >
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-8 mx-auto" data-aos="fade-up">
            <h2 class="fs-md-1 fs-2 fw-bold mb-3">
              为什么选择我们 <span class="text-primary">Why Choose Us</span>
            </h2>
            <p class="lead fs-md-4 fs-6 text-body-secondary" data-aos="fade-up">
              我们凭借专业知识和可靠服务，为您的成功保驾护航<br /><span class="text-primary"
                >We pave the way for your success with expertise and reliable service</span
              >
            </p>
          </div>
        </div>
      </div>

      <!-- About Us Section Grid -->
      <div class="container-fluid px-lg-0 d-lg-grid about-grid-desktop">
        <template v-for="(item, index) in aboutGridItems" :key="index">
          <!-- Placeholder -->
          <div v-if="item.type === 'placeholder'" class="d-none d-lg-block"></div>
          <!-- Feature Card -->
          <div v-else data-aos="fade-up" :data-aos-delay="item.delay" class="my-3 my-lg-0">
            <div
              class="card h-100 p-3 p-lg-4 bg-body bg-opacity-75 blur-10 transition-750 border-0 rounded-0 d-flex flex-column"
            >
              <div>
                <div
                  class="about-icon-wrapper transition-500 flex-shrink-0 bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center rounded-3"
                >
                  <i :class="item.icon" class="bi display-4 icon-rotate transition-750"></i>
                </div>
              </div>
              <h5 class="fw-bold my-3">{{ item.title }}</h5>
              <hr
                class="mt-0 mb-3 ms-0 text-primary"
                style="width: 40px; border-top-width: 2px; opacity: 1"
              />
              <div class="mt-auto text-body-secondary">
                <p class="fs-sm-6 fs-7 mb-1">
                  {{ item.description }}
                </p>
                <p class="fs-8 mb-0 fst-italic">
                  {{ item.descriptionEn }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </RouterLink>

    <!-- 工程案例部分 -->
    <section id="cases" class="py-2 py-lg-4">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-8 mx-auto" data-aos="fade-up">
            <h2 class="fs-md-1 fs-2 fw-bold mb-3">
              工程案例 <span class="text-primary">Case Studies</span>
            </h2>
            <p class="lead fs-md-4 fs-6" data-aos="fade-up">
              我们的成功案例是卓越实践的证明<br /><span class="text-primary"
                >Our Success Stories are Proof of Excellence in Practice</span
              >
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="(caseItem, index) in recentCases" :key="index" class="col-md-6 col-lg-4">
            <div
              class="card bg-body bg-opacity-25 blur-3 h-100 overflow-hidden hover-up transition-750 rounded-4"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="card-body d-flex flex-column p-4">
                <h5 class="card-title fw-bold">{{ caseItem.title }}</h5>
                <span class="badge bg-primary-subtle text-primary-emphasis align-self-start mb-3">{{
                  caseItem.category
                }}</span>
                <p class="card-text text-body-secondary fs-sm-6 fs-7 text-truncate-3">
                  {{ caseItem.description }}
                </p>
                <div class="mt-auto pt-3">
                  <a href="/cases" class="btn btn-sm btn-outline-primary">查看详情</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5" data-aos="fade-up">
          <a href="/cases" class="btn btn-primary btn-lg px-5">查看所有案例</a>
        </div>
      </div>
    </section>

    <ContactInfoSection />
  </main>
</template>
<script setup lang="ts">
// 首页组件
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import ContactInfoSection from '@/components/ContactInfoSection.vue'
// 保留导入
import 'aos/dist/aos.css'
// 从JSON文件导入服务数据
import servicesData from '@/assets/services.json'
import casesData from '@/assets/cases.json'
import { getAssetUrl } from '@/utils/getAssetUrl'
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

  // 加载案例数据
  const sortedCases = [...(casesData as Case[])].sort((a, b) => {
    const dateA = a.details ? new Date(a.details.date) : new Date(a.date || 0)
    const dateB = b.details ? new Date(b.details.date) : new Date(b.date || 0)
    if (isNaN(dateA.getTime())) return 1
    if (isNaN(dateB.getTime())) return -1
    return dateB.getTime() - dateA.getTime()
  })
  recentCases.value = sortedCases.slice(0, 3)
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

// 关于我们
const aboutFeatures = ref([
  {
    icon: 'bi-award',
    title: '深厚的行业经验',
    titleEn: 'Deep Industry Experience',
    description: '多年深耕政企服务领域，深刻理解行业痛点与需求，提供贴合业务的成熟解决方案。',
    descriptionEn:
      'Years of experience in the government and enterprise sectors, with a deep understanding of industry pain points, delivering mature, business-aligned solutions.',
  },
  {
    icon: 'bi-people',
    title: '精英技术团队',
    titleEn: 'Expert Technical Team',
    description: '核心团队拥有多项专业资格认证，技术实力雄厚，致力于用前沿技术为客户创造价值。',
    descriptionEn:
      'Our core team holds multiple professional certifications, leveraging strong technical expertise and cutting-edge technology to create value for clients.',
  },
  {
    icon: 'bi-box-seam',
    title: '一站式服务能力',
    titleEn: 'One-Stop Service',
    description: '从咨询设计、硬件集成到软件开发和后期运维，我们提供全生命周期的一站式服务。',
    descriptionEn:
      'From consulting and design, through hardware integration and software development, to post-launch maintenance, we offer a full-lifecycle one-stop service.',
  },
  {
    icon: 'bi-shield-check',
    title: '可靠的服务保障',
    titleEn: 'Reliable Service Guarantee',
    description: '我们承诺快速响应客户需求，提供7x24小时技术支持，确保您的系统长期稳定运行。',
    descriptionEn:
      'We are committed to rapid responses for client needs, providing 7x24 technical support to ensure the long-term stability of your systems.',
  },
])

// about-us部分网格布局
const aboutGridItems = computed(() => {
  const items: ({ type: string; delay?: number } & (typeof aboutFeatures.value)[number])[] = []
  const featureData = aboutFeatures.value
  let featureIndex = 0

  const layout = [
    'placeholder',
    'feature',
    'placeholder',
    'feature',
    'feature',
    'placeholder',
    'feature',
    'placeholder',
  ]

  layout.forEach((type) => {
    if (type === 'feature' && featureIndex < featureData.length) {
      items.push({
        type: 'feature',
        delay: featureIndex * 100,
        ...featureData[featureIndex],
      })
      featureIndex++
    } else {
      items.push({
        type: 'placeholder',
        icon: '',
        title: '',
        titleEn: '',
        description: '',
        descriptionEn: '',
      })
    }
  })

  return items
})

// 工程案例
interface Case {
  title: string
  client?: string
  date?: string
  amount?: string
  location?: string
  description: string
  highlights?: string[]
  services_provided?: string[]
  category: string
  coverImageUrl?: string
  details?: {
    client: string
    location: string
    date: string
    challenge: string
    solution: string
    results: string[]
    descriptionEn?: string
  }
  descriptionEn?: string
}

const recentCases = ref<Case[]>([])
</script>
<style scoped lang="scss">
.home-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/电路板背景.svg');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
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

.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.about-grid-desktop {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  min-height: 50vh;
}

.about-icon-wrapper {
  width: 60px;
  height: 60px;
}

@media (min-width: 992px) {
  .about-icon-wrapper {
    width: 80px;
    height: 80px;
  }
}
</style>
