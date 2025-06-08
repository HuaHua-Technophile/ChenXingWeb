<template>
  <main>
    <!-- 顶部首屏 -->
    <section class="hero-section position-relative overflow-hidden w-100 pt-5" data-aos="fade-down">
      <div class="container">
        <div class="row min-vh-50 align-items-center justify-content-center text-center">
          <p class="text-uppercase mt-2 mt-lg-4 mb-3 small fw-bold text-primary" data-aos="fade-up">
            About Us
          </p>
          <h1 class="display-4 fw-bold mb-4" data-aos="fade-up">公司简介</h1>
          <p class="lead mb-0" data-aos="fade-up">
            专注<span class="text-primary">信息技术服务</span> · 助力企业数字化转型
          </p>
          <p class="lead mb-2" data-aos="fade-up" data-aos-delay="400">
            Focus on <span class="text-primary">IT Services</span> · Empower Digital Transformation
          </p>
          <p
            class="text-center text-primary fs-6 fs-lg-5 mb-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            成立于 <strong><span ref="foundYearElement">0</span></strong> 年，服务已持续
            <strong><span ref="serviceYearsElement">0</span></strong> 年+
          </p>
          <i class="bi bi-chevron-down text-primary fs-1 floating-icon"></i>
        </div>
      </div>
    </section>
    <!-- 联系信息 -->
    <ContactInfoSection />
    <!-- 主要内容部分 -->
    <section
      :style="{
        backgroundImage: `url(${contentBgImage})`,
      }"
      class="bgimg-center-cover bgimg-mask position-relative"
    >
      <div class="container py-5 position-relative">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- 公司概况 -->
            <div class="mb-5" data-aos="fade-up">
              <h3 class="border-start border-4 border-primary ps-3 mb-4">企业概况</h3>
              <p class="lead mb-4">
                韶关市辰星信息技术有限公司成立于2013年，是一家集软件开发、信息系统集成、弱电智能化系统建设与维护服务为主的科技型企业。
              </p>
              <p>
                公司专注于安全防范系统、弱电智能化系统、信息中心机房及计算机信息系统的建设与维护；有广东省安全防范系统设计、施工、维修资格证四级证书、安全生产许可证；建立了完整的知识产权体系，及15项相关信息系统软件著作权。
              </p>
            </div>

            <!-- 资质认证 -->
            <div class="mb-5">
              <h3 class="border-start border-4 border-primary ps-3 mb-4" data-aos="fade-left">
                资质认证
              </h3>
              <div class="row g-4">
                <!-- 企业资质 -->
                <div class="col-md-12">
                  <div
                    class="card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 blur-10 z-index-2"
                    data-aos="fade-right"
                  >
                    <div class="card-body">
                      <h5 class="card-title">
                        <i class="bi bi-building-check icon-rotate me-2 text-primary"></i
                        >企业资质证书
                      </h5>
                      <ul class="list-unstyled mb-0 mt-3">
                        <li class="mb-3">
                          <i class="bi bi-check-circle-fill text-primary me-2"></i>
                          广东省安全防范系统设计、施工、维修资格证四级证书
                        </li>
                        <li>
                          <i class="bi bi-check-circle-fill text-primary me-2"></i>
                          安全生产许可证
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- 人员证书 -->
                <div class="col-md-6">
                  <div
                    class="card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 blur-10 z-index-2"
                    data-aos="fade-up"
                  >
                    <div class="card-body">
                      <h5 class="card-title">
                        <i class="bi bi-person-badge icon-rotate me-2 text-primary"></i>人员资质证书
                      </h5>
                      <ul class="list-unstyled mb-0 mt-3">
                        <li class="mb-3">
                          <i class="bi bi-person-badge-fill text-primary me-2"></i>
                          PMP项目管理师
                        </li>
                        <li class="mb-3">
                          <i class="bi bi-person-badge-fill text-primary me-2"></i>
                          安防培训合格证
                        </li>
                        <li>
                          <i class="bi bi-person-badge-fill text-primary me-2"></i>
                          特种作业操作证（高空证、电工证）
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- 知识产权 -->
                <div class="col-md-6">
                  <div
                    class="h-100 card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 blur-10 z-index-2"
                    data-aos="fade-up"
                  >
                    <div class="card-body">
                      <h5 class="card-title">
                        <i class="bi bi-file-earmark-check icon-rotate me-2 text-primary"></i
                        >知识产权证书
                      </h5>
                      <p class="mt-3 mb-0">
                        公司已建立完整的知识产权体系，拥有<span class="text-primary fw-bold"
                          ><span ref="copyrightCountElement">0</span>项</span
                        >软件著作权登记证书。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 业务范围 -->
            <div class="mb-5">
              <h3 class="border-start border-4 border-primary ps-3 mb-4" data-aos="fade-left">
                业务范围
              </h3>
              <div class="row g-4">
                <div v-for="(service, index) in businessServices" :key="index" class="col-md-6">
                  <div
                    class="card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 blur-10 z-index-2"
                    :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                    :data-aos-delay="100 * (index + 1)"
                  >
                    <div class="card-body">
                      <h5 class="card-title">
                        <i :class="`bi ${service.icon} icon-rotate me-2 text-primary`"></i
                        >{{ service.title }}
                      </h5>
                      <p class="card-text">{{ service.description }}</p>
                      <div class="mt-3 text-end">
                        <span class="badge bg-primary rounded-pill">
                          <span ref="businessCountElements" class="counter-element">0</span>+ 项目
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 团队架构 -->
            <div class="mb-5">
              <h3 class="border-start border-4 border-primary ps-3 mb-4" data-aos="fade-left">
                团队架构
              </h3>
              <p data-aos="fade-left">
                公司下设办公室、财务部、行政部、工程部、售后服务部、软件开发部，结构完善，分工明确。
              </p>
              <div class="row text-center g-3">
                <div v-for="(stat, index) in teamStats" :key="index" class="col-4">
                  <div
                    class="py-4 card overflow-hidden hover-up bg-body bg-opacity-25 transition-750 blur-10 z-index-2"
                    data-aos="zoom-in"
                    :data-aos-delay="100 * index"
                  >
                    <h4 class="h5 mb-2">
                      <span ref="teamCountElements" class="counter-element">0</span>{{ stat.unit }}
                    </h4>
                    <p class="small text-muted mb-0">{{ stat.title }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 发展规划 -->
            <div class="mb-5">
              <h3 class="border-start border-4 border-primary ps-3 mb-4" data-aos="fade-left">
                发展规划
              </h3>
              <div class="alert alert-primary" role="alert" data-aos="fade-up">
                <p class="mb-0">为提高企业核心竞争力，我们正在积极：</p>
                <ul class="mb-0 mt-2">
                  <li>申请科技性中小企业认证</li>
                  <li>申请高新技术企业认证</li>
                  <li>完善公司ISO管理体系建设</li>
                </ul>
              </div>
            </div>

            <!-- 企业证书展示 -->
            <div class="mb-5">
              <h3 class="border-start border-4 border-primary ps-3 mb-4">企业证书展示</h3>
              <div>
                <swiper
                  :slides-per-view="1"
                  :space-between="30"
                  :pagination="{ clickable: true }"
                  :navigation="true"
                  :loop="true"
                  :effect="'coverflow'"
                  :centered-slides="true"
                  :autoplay="{ delay: 999999, disableOnInteraction: false }"
                  :coverflow-effect="{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }"
                  :breakpoints="{
                    '640': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '992': {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }"
                  :modules="swiperModules"
                  class="certificate-swiper overflow-hidden"
                >
                  <swiper-slide
                    v-for="(image, index) in certificateImages"
                    :key="index"
                    class="h-100 rounded overflow-hidden bgimg-mask blur-10 shadow border border-light border-opacity-50"
                    style="aspect-ratio: 2 /3"
                  >
                    <el-image
                      fit="contain"
                      :src="image.src"
                      :alt="image.alt"
                      class="h-100 w-100"
                      :preview-src-list="certificateImages.map((img) => img.src)"
                      :initial-index="index"
                      :preview-teleported="true"
                    />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { CountUp } from 'countup.js'
import { onMounted, ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import contentBgImage from '@/assets/images/business-7111764_1920.webp'
// 导入Swiper组件
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
// 导入Swiper样式
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// 计算公司成立年限
const foundYear = 2013
const currentYear = new Date().getFullYear()
const serviceYears = currentYear - foundYear

// 引用元素
const foundYearElement = ref<HTMLElement | null>(null)
const serviceYearsElement = ref<HTMLElement | null>(null)
const copyrightCountElement = ref<HTMLElement | null>(null)

// 团队和业务范围计数器元素 (将作为数组收集)
const teamCountElements = ref<HTMLElement[]>([])
const businessCountElements = ref<HTMLElement[]>([])

// 团队架构数据
const teamStats = [
  {
    title: '团队规模',
    count: 12,
    unit: '人',
  },
  {
    title: '技术人员占比',
    count: 80,
    unit: '%+',
  },
  {
    title: '大专以上学历',
    count: 90,
    unit: '%+',
  },
]

// 业务范围数据
const businessServices = [
  {
    icon: 'bi-code-slash',
    title: '专业软件定制开发服务',
    description:
      '提供高质量的定制化软件开发、企业管理系统、移动应用及Web平台开发服务，满足各行业特定需求',
    count: 5,
  },
  {
    icon: 'bi-diagram-3',
    title: '弱电智能化系统集成',
    description:
      '专业的弱电智能化系统集成方案，覆盖安防监控、门禁考勤、网络通信等多领域一体化解决方案',
    count: 19,
  },
  {
    icon: 'bi-headset',
    title: '全方位技术支持与运维',
    description: '全方位的技术支持与运维服务，包括故障排除、系统维护、性能优化及技术培训等专业服务',
    count: 11,
  },
  {
    icon: 'bi-cloud',
    title: '企业云服务整体解决方案',
    description: '提供云部署、迁移、管理和优化服务，助力企业数字化转型，实现业务高效运行',
    count: 3,
  },
]

// 证书图片数据
const certificateImages = [
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 1_1.webp', alt: '安全生产许可证' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 2_2.webp', alt: '安全防范系统资质证书' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 3_3.webp', alt: '营业执照' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 4.webp', alt: '高新技术企业证书' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 5.webp', alt: '软件著作权证书1' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 6.webp', alt: '软件著作权证书2' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 7.webp', alt: '软件著作权证书3' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 8.webp', alt: '软件著作权证书4' },
  { src: '/images/韶关市辰星信息技术有限公司证书/图片 9.webp', alt: '软件著作权证书5' },
  { src: '/images/韶关市辰星信息技术有限公司证书/专利1_10.webp', alt: '专利证书1' },
  { src: '/images/韶关市辰星信息技术有限公司证书/专利2_11.webp', alt: '专利证书2' },
]

// 使用useElementVisibility跟踪基本元素可见性
const isFoundYearVisible = useElementVisibility(foundYearElement)
const isServiceYearsVisible = useElementVisibility(serviceYearsElement)
const isCopyrightCountVisible = useElementVisibility(copyrightCountElement)

// 通用CountUp配置
const countUpOptions = {
  duration: 2.5,
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
}

// 启动计数器动画的函数
const startCountUp = (element: HTMLElement, endValue: number) => {
  const countUp = new CountUp(element, endValue, countUpOptions)
  countUp.start()
  return countUp
}

// 监视基本元素可见性并启动动画
watch(isFoundYearVisible, (isVisible) => {
  if (isVisible && foundYearElement.value) {
    startCountUp(foundYearElement.value, foundYear)
  }
})

watch(isServiceYearsVisible, (isVisible) => {
  if (isVisible && serviceYearsElement.value) {
    startCountUp(serviceYearsElement.value, serviceYears)
  }
})

watch(isCopyrightCountVisible, (isVisible) => {
  if (isVisible && copyrightCountElement.value) {
    startCountUp(copyrightCountElement.value, 15)
  }
})

// 在组件挂载后处理数组ref元素
onMounted(() => {
  // 移除AOS初始化代码，因为已经在main.ts中进行了初始化

  // 为团队数据添加观察和动画
  if (teamCountElements.value.length > 0) {
    teamCountElements.value.forEach((element, index) => {
      if (!element) return

      // 使用useElementVisibility监听元素可见性
      const isVisible = useElementVisibility(ref(element))

      // 监听可见性变化并启动动画
      watch(
        isVisible,
        (visible) => {
          if (visible && teamStats[index]) {
            startCountUp(element, teamStats[index].count)
          }
        },
        { immediate: true },
      )
    })
  }

  // 为业务范围数据添加观察和动画
  if (businessCountElements.value.length > 0) {
    businessCountElements.value.forEach((element, index) => {
      if (!element) return

      // 使用useElementVisibility监听元素可见性
      const isVisible = useElementVisibility(ref(element))

      // 监听可见性变化并启动动画
      watch(
        isVisible,
        (visible) => {
          if (visible && businessServices[index]) {
            startCountUp(element, businessServices[index].count)
          }
        },
        { immediate: true },
      )
    })
  }
})

// Swiper模块
const swiperModules = [Navigation, Pagination, EffectCoverflow, Autoplay]
</script>

<style scoped lang="scss">
.hero-section {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/home/电路板背景.svg');
    background-size: cover;
    background-position: center;
    z-index: 0;
    opacity: 0.1;
  }
}

// 添加浮动图标动画
.floating-icon {
  animation: floating 2s infinite;
  display: inline-block;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

// Bootstrap中没有min-vh-50类，需要保留
.min-vh-50 {
  min-height: 50vh;
}

// 在移动端减少首屏垂直间距
@media (max-width: 991.98px) {
  .min-vh-50 {
    min-height: auto;
    padding-bottom: 2rem;
  }
}

// 数字完成动画后的效果
@keyframes highlight {
  0% {
    text-shadow: 0 0 0 rgba(var(--bs-primary-rgb), 0);
  }
  50% {
    text-shadow: 0 0 10px rgba(var(--bs-primary-rgb), 0.5);
  }
  100% {
    text-shadow: 0 0 0 rgba(var(--bs-primary-rgb), 0);
  }
}

// 工程案例卡片样式
.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--bs-primary);
}

// 证书展示样式
.certificate-swiper {
  padding-bottom: 50px; // 为分页器留出空间
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
