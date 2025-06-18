<template>
  <main class="position-relative">
    <section class="hero-section min-vh-100 position-relative d-lg-flex pt-4 pb-4 pt-lg-5">
      <div
        class="hero-image-container position-relative position-lg-absolute z-index-1 mx-auto"
        style="top: 10vh; left: 2vw; width: 49%; height: 75vh"
        data-aos="fade-right"
      >
        <img
          src="/images/工程案例/architect-3979490_1920_11zon.webp"
          class="shadow-lg w-100 h-100 object-fit-cover rounded-3 d-block ms-auto"
          alt="工程案例背景"
        />
        <div
          class="projects-badge position-absolute bg-primary text-white py-2 px-3 py-lg-3 px-lg-4 z-index-2"
          style="bottom: 2rem; left: -2rem; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%)"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="display-6 fw-bold fs-lg-1">15M+</div>
          <div class="text-uppercase small">项目总金额</div>
        </div>
      </div>

      <div
        class="hero-content position-relative position-lg-absolute z-index-2 mx-auto mt-lg-0 bg-body bg-opacity-50 blur-5 text-body p-2 p-lg-5 shadow-lg rounded-3"
        style="top: 15vh; right: 2vw; width: 49%; height: 75vh; margin-top: -1.5rem"
      >
        <h6
          class="text-primary text-uppercase fw-bold mb-1"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          // Why Choose Us
        </h6>
        <p
          class="text-uppercase small text-body-secondary"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          为什么选择我们
        </p>
        <h1 class="display-4 fw-bold mb-1" data-aos="fade-left" data-aos-delay="300">
          卓越实践的证明
        </h1>
        <p class="lead text-body-secondary fs-6 fs-lg-5" data-aos="fade-left" data-aos-delay="400">
          Proven Expertise in Action
        </p>
        <hr
          class="border-primary mb-lg-4"
          style="width: 60px; border-width: 4px; opacity: 1"
          data-aos="fade-left"
          data-aos-delay="500"
        />

        <div class="d-flex align-items-start mb-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div class="flex-shrink-0">
            <i class="bi bi-vector-pen fs-1 text-primary"></i>
          </div>
          <div class="flex-grow-1 ms-3 ms-lg-4">
            <h5 class="fw-bold fs-6 fs-lg-5">专业设计 / Professional Design</h5>
            <p class="text-body-secondary fs-7 fs-lg-6">
              我们技术精湛的专家团队致力于为客户提供可靠、一流的服务。
            </p>
          </div>
        </div>

        <div class="d-flex align-items-start mb-lg-4" data-aos="fade-up" data-aos-delay="700">
          <div class="flex-shrink-0">
            <i class="bi bi-graph-up-arrow fs-1 text-primary"></i>
          </div>
          <div class="flex-grow-1 ms-3 ms-lg-4">
            <h5 class="fw-bold fs-6 fs-lg-5">大数据与分析 / Big Data & Analytics</h5>
            <p class="text-body-secondary fs-7 fs-lg-6">
              我们利用前沿的数据分析技术来解锁洞察力并推动明智的决策。
            </p>
          </div>
        </div>

        <div class="d-flex align-items-start" data-aos="fade-up" data-aos-delay="800">
          <div class="flex-shrink-0">
            <i class="bi bi-gear-wide-connected fs-1 text-primary"></i>
          </div>
          <div class="flex-grow-1 ms-3 ms-lg-4">
            <h5 class="fw-bold fs-6 fs-lg-5">应用数据维护 / App & Data Maintenance</h5>
            <p class="text-body-secondary fs-7 fs-lg-6">
              我们通过强大的维护服务确保您的应用程序无缝、安全地运行。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cases-section position-relative py-5 bgimg-mask">
      <div class="container position-relative z-index-1">
        <div class="text-center mb-5 text-body" data-aos="fade-up">
          <h1 class="display-4 fw-bold">我们的成功案例</h1>
          <p class="lead">我们为各行各业的客户提供了高质量的技术解决方案。</p>
        </div>

        <div class="row g-4">
          <div
            v-for="(caseItem, index) in cases"
            :key="index"
            class="col-12"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div
              class="card bg-body bg-opacity-50 blur-8 border-0 overflow-hidden hover-up transition-250"
            >
              <div class="card-body p-4 pb-0">
                <h3 class="card-title fw-bold mb-1">{{ caseItem.title }}</h3>
                <span class="badge bg-primary-subtle text-primary mb-3">{{
                  caseItem.category
                }}</span>
                <p class="card-text text-muted">{{ caseItem.description }}</p>

                <hr />

                <div class="row">
                  <!-- 统一显示基本信息 -->
                  <div class="col-md-4">
                    <h6 class="text-primary">项目信息</h6>
                    <ul class="list-unstyled">
                      <li v-if="caseItem.client || caseItem.details?.client">
                        <strong>客户:</strong> {{ caseItem.client || caseItem.details?.client }}
                      </li>
                      <li v-if="caseItem.location || caseItem.details?.location">
                        <strong>地点:</strong>
                        {{ caseItem.location || caseItem.details?.location }}
                      </li>
                      <li v-if="caseItem.date || caseItem.details?.date">
                        <strong>日期:</strong> {{ caseItem.date || caseItem.details?.date }}
                      </li>
                      <li v-if="caseItem.amount">
                        <strong>金额:</strong> {{ formatAmount(caseItem.amount) }}
                      </li>
                    </ul>
                  </div>

                  <!-- 格式 1 的特有信息 -->
                  <template v-if="!caseItem.details">
                    <div class="col-md-4">
                      <h6 class="text-primary">项目亮点</h6>
                      <ul
                        v-if="caseItem.highlights && caseItem.highlights.length"
                        class="list-unstyled"
                      >
                        <li
                          v-for="highlight in caseItem.highlights"
                          :key="highlight"
                          class="d-flex align-items-start mb-1"
                        >
                          <i class="bi bi-check-lg text-success me-2"></i>
                          <span>{{ highlight }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <h6 class="text-primary">提供的服务</h6>
                      <ul
                        v-if="caseItem.services_provided && caseItem.services_provided.length"
                        class="list-unstyled"
                      >
                        <li
                          v-for="service in caseItem.services_provided"
                          :key="service"
                          class="d-flex align-items-start mb-1"
                        >
                          <i class="bi bi-check-lg text-success me-2"></i>
                          <span>{{ service }}</span>
                        </li>
                      </ul>
                    </div>
                  </template>

                  <!-- 格式 2 的特有信息 -->
                  <template v-if="caseItem.details">
                    <div class="col-md-8">
                      <h6 class="text-primary">项目详情</h6>
                      <p><strong>挑战:</strong> {{ caseItem.details.challenge }}</p>
                      <p><strong>解决方案:</strong> {{ caseItem.details.solution }}</p>
                      <h6 class="mt-3">主要成果</h6>
                      <ul
                        v-if="caseItem.details.results && caseItem.details.results.length"
                        class="list-unstyled"
                      >
                        <li
                          v-for="result in caseItem.details.results"
                          :key="result"
                          class="d-flex align-items-start mb-1"
                        >
                          <i class="bi bi-check-lg text-success me-2"></i>
                          <span>{{ result }}</span>
                        </li>
                      </ul>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// @ts-ignore
import casesData from '@/assets/cases.json'

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
  }
}

const cases = ref<Case[]>([])

onMounted(() => {
  const sortedCases = [...(casesData as Case[])].sort((a, b) => {
    const dateA = a.details ? new Date(a.details.date) : new Date(a.date || 0)
    const dateB = b.details ? new Date(b.details.date) : new Date(b.date || 0)
    if (isNaN(dateA.getTime())) return 1
    if (isNaN(dateB.getTime())) return -1
    return dateB.getTime() - dateA.getTime()
  })
  cases.value = sortedCases
})

const formatAmount = (amountStr: string | undefined): string => {
  if (!amountStr) return '未提供'
  const amount = parseFloat(amountStr)
  if (isNaN(amount)) return '未提供'
  return `¥${(amount / 10000).toFixed(2)} 万元`
}
</script>

<style scoped lang="scss">
main::before {
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
.projects-badge {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
}

.hero-content {
  isolation: isolate;
}

.hero-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  aspect-ratio: 1/1 !important;
  background-image: url('/images/decorations/graph-decoration.svg');
  background-size: 120%;
  background-position: 25% 25%;
  z-index: -1;
}

.cases-section {
  isolation: isolate;
  background: url('/images/工程案例/london-scaffolding-7387256_1920_11zon.webp') no-repeat center
    center/cover;
  background-attachment: fixed;
}

@media (max-width: 991.98px) {
  .hero-image-container,
  .hero-content {
    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;
  }

  .hero-image-container {
    height: 35vh !important;
    width: 100% !important;
  }

  .hero-content {
    height: auto !important;
    width: 90% !important;
  }

  .hero-image-container img {
    width: 90% !important;
  }

  .projects-badge {
    left: 0 !important;
  }

  .hero-content::after {
    top: 0;
    bottom: auto;
    background-position: 25% 120%;
  }
}
</style>
