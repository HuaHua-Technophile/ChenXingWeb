<template>
  <main class="position-relative tech-support-main">
    <!-- 首屏部分 -->
    <section class="container min-vh-100 d-flex flex-column pt-5">
      <div class="row align-items-center flex-grow-1">
        <div class="col-lg-5 d-none d-lg-block" data-aos="fade-right" data-aos-duration="1000">
          <img
            :src="getAssetUrl('images/技术支持/slider-single-img3.webp')"
            alt="技术支持专家"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-lg-7 ps-lg-5">
          <div class="mb-3" data-aos="fade-up" data-aos-duration="800">
            <span
              class="text-uppercase fw-bold text-primary border-bottom border-2 border-primary pb-1"
              >TECHNICAL SUPPORT & IT SERVICES</span
            >
          </div>
          <h1
            class="display-4 fw-bold mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            专业技术支持<br />
            <span class="text-primary">Professional Technical Support</span>
          </h1>
          <p class="lead mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            全天候专家团队 · 智能系统维护 · 高效问题解决
          </p>
          <p
            class="lead mb-4 text-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            24/7 Expert Team · Intelligent System Maintenance · Efficient Problem Solving
          </p>
          <a
            href="#services"
            class="btn btn-primary text-body bg-body bg-opacity-25 blur-5 px-4 py-2 hover-up"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            了解详情 <span class="small ms-1">LEARN MORE</span>
            <i class="bi bi-arrow-right ms-1 arrow-float"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <ContactInfoSection />

    <!-- 内容 -->
    <section class="container py-4" id="services">
      <div class="row">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-md-6 mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="(index % 2) * 200 + 200"
        >
          <div class="h-100 card overflow-hidden service-card rounded-4 hover-up transition-750">
            <!-- 将图片设置为背景 -->
            <div
              class="card-background-image position-absolute top-0 left-0 w-100 h-100 z-index-0 bgimg-center-cover transition-750"
              :style="`background-image: url(${getAssetUrl(service.image)})`"
            ></div>

            <!-- 内容区域 -->
            <div class="position-relative z-index-1 h-100 d-flex flex-column">
              <!-- 顶部16:9空白区域 -->
              <div class="ratio ratio-16x9"></div>

              <!-- 毛玻璃效果内容区域 -->
              <div
                class="bg-body bg-opacity-50 blur-10 pt-3 px-3 flex-grow-1 d-flex flex-column transition-750"
              >
                <div class="d-flex align-items-center mb-3">
                  <i
                    :class="`bi ${service.icon} fs-4 text-primary me-2 icon-rotate transition-750`"
                  ></i>
                  <span class="fw-medium">{{ service.tag }}</span>
                </div>
                <h4 class="mb-3 fw-bold">{{ service.title }}</h4>
                <p>{{ service.description }}</p>
                <ul class="list-unstyled">
                  <li
                    v-for="(feature, featureIndex) in service.features"
                    :key="featureIndex"
                    class="mb-2"
                  >
                    <i class="bi bi-check-circle-fill text-success me-2"></i>{{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetUrl } from '@/utils/getAssetUrl'

// 抽离技术支持服务数据
const services = ref([
  {
    image: 'images/技术支持/engineer-4915804_1920_11zon.webp',
    title: '专业现场技术支持与故障排除服务',
    team: '技术团队',
    tag: '现场服务',
    icon: 'bi-tools',
    description:
      '我们的技术团队由经验丰富的工程师组成，为智能集成系统提供现场技术支持，包括能源管控、消防系统、智慧养老、智能门禁等硬件设备的故障排除、系统调试和更新服务，确保您的智能化系统稳定运行。',
    features: ['7×24小时紧急响应服务', '智能化系统故障诊断与修复', '硬件设备维护与升级服务'],
  },
  {
    image: 'images/技术支持/engineer-4941144_1920_11zon.webp',
    title: '全天候远程技术支持与系统监控服务',
    team: '远程团队',
    tag: '在线支持',
    icon: 'bi-laptop',
    description:
      '通过先进的远程监控和诊断工具，我们能够实时监控您的智能集成系统运行状态，为能源管控、水利监测、智能楼宇等系统提供远程技术支持，及时发现潜在问题并处理，减少系统停机时间。',
    features: ['系统远程监控与健康检查', '专业技术顾问在线咨询', '软件远程更新与问题修复'],
  },
  {
    image: 'images/技术支持/engineer-4941347_1920_11zon.webp',
    title: '智能系统专业技术培训与能力提升课程',
    team: '培训专家',
    tag: '专业培训',
    icon: 'bi-mortarboard-fill',
    description:
      '我们提供针对各类智能系统的专业培训服务，包括网络工程、消防系统、能源管控、智能门禁等技术培训，帮助您的技术团队快速掌握系统操作和日常维护技能，提升自主管理能力。',
    features: ['智能系统操作培训', '常见故障处理指导', '系统维护技术文档提供'],
  },
  {
    image: 'images/技术支持/engineer-4941351_1920_11zon.webp',
    title: '智能系统预防性维护与设备寿命延长方案',
    team: '维护团队',
    tag: '系统预防',
    icon: 'bi-shield-check',
    description:
      '我们提供定期的预防性维护服务，为智能楼宇、水利监测、智慧养老等系统进行全面检查与维护，帮助您提前发现潜在问题，避免系统意外故障，延长设备使用寿命。',
    features: ['智能系统定期巡检服务', '设备性能评估与优化', '系统升级与扩展规划建议'],
  },
])
</script>

<style scoped lang="scss">
// 页面背景
.tech-support-main::before {
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

// 箭头动画
@keyframes arrow-float {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.arrow-float {
  display: inline-block;
  animation: arrow-float 1.5s ease-in-out infinite;
}

// 服务卡片样式
.service-card {
  &:hover .card-background-image {
    transform: scale(1.1);
  }

  // 添加内容区域悬浮效果
  &:hover .bg-body {
    opacity: 0.5;
  }
}
</style>
