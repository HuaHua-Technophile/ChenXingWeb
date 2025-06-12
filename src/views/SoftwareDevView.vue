<template>
  <main class="software-dev-main">
    <!-- Hero Section -->
    <section class="min-vh-100 container d-flex flex-column pt-5">
      <div class="row flex-grow-1 align-items-center">
        <div class="col-lg-6 pe-lg-5 mb-4 mb-lg-0">
          <div class="d-flex align-items-center gap-3 mb-2">
            <p class="text-primary fw-bold text-uppercase mb-0">Some Fact</p>
            <div class="title-line bg-primary"></div>
          </div>
          <h1 class="fw-bold fs-3 fs-lg-1 mb-3 mb-lg-4">
            We empower your business success with technology
          </h1>
          <p class="lead mb-3 mb-lg-4">
            我们提供全面的软件开发解决方案，从需求分析到系统上线，助力您的业务在数字化时代保持领先。
          </p>

          <div ref="progressContainer">
            <div v-for="(skill, index) in skills" :key="skill.name" class="mb-3 mb-lg-4">
              <div class="d-flex justify-content-between mb-1">
                <span>{{ skill.name }}</span>
                <span
                  ><span
                    :ref="
                      (el) => {
                        if (el) skillNumberRefs[index] = el as HTMLElement
                      }
                    "
                    >0</span
                  >%</span
                >
              </div>
              <div class="position-relative progress-line-track">
                <div
                  class="progress bg-transparent position-relative z-index-2 overflow-visible"
                  style="height: 8px"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: skill.animatedValue + '%' }"
                    :aria-valuenow="Math.round(skill.animatedValue)"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ps-lg-5">
          <div class="position-relative hero-image-container w-90 mx-auto w-md-auto">
            <img
              src="/images/软件开发/software-developer-6521720_1920_11zon.webp"
              class="img-fluid rounded-bottom rounded-start shadow"
              alt="软件开发团队"
            />
            <div class="decorative-shape position-absolute z-index-1"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 开发类型 -->
    <section class="container mb-5">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h2>我们的软件开发服务</h2>
          <p class="lead">覆盖多种应用类型，满足不同场景需求</p>
        </div>

        <div v-for="(devType, index) in devTypes" :key="devType.title" class="col-md-4">
          <div
            class="card overflow-hidden h-100 transition-750 z-index-2 bg-body bg-opacity-25 blur-10 hover-up"
          >
            <div class="card-body">
              <div
                class="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center bg-primary border border-3 border-primary transition-750 rounded-4"
                style="--bs-bg-opacity: 0.05; --bs-border-opacity: 0.15; width: 64px; height: 64px"
              >
                <i
                  :class="[devType.icon]"
                  class="fs-1 text-primary icon-rotate transition-750 bi"
                ></i>
              </div>
              <h4 class="card-title">{{ devType.title }}</h4>
              <p>
                {{ devType.descriptionCN }}<br /><small class="text-muted">{{
                  devType.descriptionEN
                }}</small>
              </p>
              <div
                class="position-absolute end-0 user-select-none lh-1 z-index-1 fw-bold text-primary"
                style="--bs-text-opacity: 0.06; bottom: -1rem; font-size: 9rem"
              >
                0{{ index + 1 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactInfoSection class="mb-5" />

    <!-- 开发流程 -->
    <section class="container mb-5">
      <div id="dev-process" class="row">
        <div class="col-12 text-center mb-4">
          <h2>我们的开发流程</h2>
          <p class="lead">科学高效的软件开发方法论</p>
        </div>

        <div class="col-12">
          <div class="timeline position-relative py-4">
            <div v-for="(process, index) in devProcesses" :key="process.title" class="row g-0">
              <div :class="['col-md-6', { 'offset-md-6': (index + 1) % 2 === 0 }]">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    {{ index + 1 }}
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>{{ process.title }}</h4>
                    <p>
                      {{ process.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="container mb-5">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h2>我们的技术栈</h2>
          <p class="lead">采用业界领先技术，构建高质量软件系统</p>
        </div>

        <div v-for="stack in techStacks" :key="stack.title" class="col-md-3 col-6 mb-4 text-center">
          <div class="p-3 bg-light rounded">
            <i :class="['bi', stack.icon, 'fs-2', 'text-primary']" class="mb-2"></i>
            <h5 class="">{{ stack.title }}</h5>
            <p class="small">{{ stack.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CountUp } from 'countup.js'
import { useIntersectionObserver } from '@vueuse/core'

const skills = ref([
  { name: '软件开发', value: 80, animatedValue: 0 },
  { name: 'UI/UX 设计', value: 90, animatedValue: 0 },
  { name: 'Web 开发', value: 70, animatedValue: 0 },
])

const devTypes = ref([
  {
    icon: 'bi-globe',
    title: 'Web应用开发',
    descriptionCN: '开发响应式、高性能的企业级Web应用，支持多设备访问，提供流畅的用户体验。',
    descriptionEN:
      'We build responsive and high-performance web applications for a seamless multi-device experience.',
  },
  {
    icon: 'bi-phone',
    title: '移动应用开发',
    descriptionCN: '开发适用于iOS和Android平台的原生或跨平台移动应用，实现随时随地的业务操作。',
    descriptionEN:
      'We create native and cross-platform mobile apps for iOS and Android, enabling business operations anywhere, anytime.',
  },
  {
    icon: 'bi-gear',
    title: '系统集成开发',
    descriptionCN: '开发系统间接口和集成方案，实现跨系统数据流转和业务协同。',
    descriptionEN:
      'We develop system interfaces and integration solutions to enable data flow and business synergy across systems.',
  },
])

const devProcesses = ref([
  {
    title: '需求分析',
    text: '深入了解客户业务流程和需求，明确系统功能范围和技术要求，形成详细的需求规格说明书。',
  },
  {
    title: '系统设计',
    text: '制定系统架构设计、数据库设计、接口设计和UI设计，确保系统结构合理、可扩展。',
  },
  {
    title: '编码开发',
    text: '遵循最佳开发实践，使用适合的技术栈进行模块化开发，保证代码质量和可维护性。',
  },
  {
    title: '测试验证',
    text: '进行单元测试、集成测试、系统测试和用户验收测试，确保软件质量和功能符合预期。',
  },
  {
    title: '部署上线',
    text: '规划部署策略，配置生产环境，执行系统部署和数据迁移，确保系统稳定运行。',
  },
  {
    title: '运维支持',
    text: '提供系统运行维护、性能监控、故障处理和功能升级服务，确保系统持续稳定运行。',
  },
])

const techStacks = ref([
  {
    icon: 'bi-filetype-html',
    title: '前端开发',
    text: 'Vue.js, React, Angular',
  },
  {
    icon: 'bi-server',
    title: '后端开发',
    text: 'Java, .NET, Node.js, Python',
  },
  {
    icon: 'bi-phone',
    title: '移动开发',
    text: 'Flutter, React Native, Swift',
  },
  {
    icon: 'bi-database',
    title: '数据库',
    text: 'MySQL, PostgreSQL, MongoDB',
  },
])

const progressContainer = ref<HTMLElement | null>(null)
const skillNumberRefs = ref<HTMLElement[]>([])

const { stop } = useIntersectionObserver(
  progressContainer,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 1. 动画进度条宽度
      const animationDuration = 1500 // ms
      let startTime = 0

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsedTime = timestamp - startTime
        const progress = Math.min(elapsedTime / animationDuration, 1)

        skills.value.forEach((skill) => {
          skill.animatedValue = skill.value * progress
        })

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          skills.value.forEach((skill) => {
            skill.animatedValue = skill.value
          })
        }
      }
      requestAnimationFrame(animate)

      // 2. Animate numbers with CountUp.js
      skillNumberRefs.value.forEach((el, index) => {
        if (el) {
          const skill = skills.value[index]
          const countUp = new CountUp(el, skill.value, {
            duration: 1.5,
            useEasing: false,
          })
          if (!countUp.error) {
            countUp.start()
          } else {
            console.error(countUp.error)
          }
        }
      })

      // Stop observing after the animation is triggered
      stop()
    }
  },
  {
    threshold: 0.1, // 当元素可见10%时触发
  },
)
</script>

<style scoped lang="scss">
// 页面背景
.software-dev-main::before {
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

.title-line {
  height: 3px;
  width: 6rem;
}

.progress-line-track::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  background-color: var(--bs-primary);
  z-index: 1;
}

.decorative-shape {
  top: -20px;
  right: -20px;
  width: 120px;
  height: 120px;
  border-top: 20px solid var(--bs-primary);
  border-right: 20px solid var(--bs-primary);
}

// 时间线样式
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  background-color: var(--bs-primary);
}

.timeline .timeline-badge {
  width: 40px;
  height: 40px;
  line-height: 40px;
}

.timeline .timeline-item {
  margin-bottom: 30px;
}

.timeline .timeline-panel {
  margin-right: 30px;
  margin-left: 30px;
}

.card:hover .icon-wrapper {
  --bs-bg-opacity: 0.1 !important;
  --bs-border-opacity: 0.5 !important;
}

@media (max-width: 767.98px) {
  .timeline::before {
    left: 40px;
  }

  .timeline .timeline-badge {
    left: 40px !important;
  }

  .decorative-shape {
    top: -15px;
    right: -15px;
    width: 80px;
    height: 80px;
    border-top: 15px solid var(--bs-primary);
    border-right: 15px solid var(--bs-primary);
  }
}
</style>
