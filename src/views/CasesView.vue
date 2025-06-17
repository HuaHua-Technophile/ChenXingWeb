<template>
  <main class="position-relative">
    <section class="hero-section pt-5 min-vh-100 position-relative">
      <div
        class="hero-image-container position-absolute z-index-1"
        style="top: 10vh; left: 2vw; width: 49%; height: 75vh; max-height: 800px"
      >
        <img
          src="/images/工程案例/architect-3979490_1920_11zon.webp"
          class="shadow-lg w-100 h-100 object-fit-cover rounded-3"
          alt="工程案例背景"
        />
        <div
          class="projects-badge position-absolute bg-primary text-white py-3 px-4 z-index-2"
          style="bottom: 2rem; left: -2rem; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%)"
        >
          <div class="display-6 fw-bold">1500万+</div>
          <div class="text-uppercase small">项目额</div>
        </div>
      </div>

      <div
        class="hero-content-container position-absolute z-index-2"
        style="bottom: 10vh; right: 2vw; width: 49%; height: 75vh"
      >
        <div
          class="hero-content h-100 bg-dark text-white p-5 shadow-lg position-relative rounded-3"
        >
          <h6 class="text-primary text-uppercase fw-bold">// 为什么选择我们</h6>
          <h1 class="display-4 fw-bold">为什么选择辰星信息？</h1>
          <hr class="border-primary mt-3 mb-4" style="width: 60px; border-width: 4px; opacity: 1" />

          <div class="d-flex align-items-start mb-4">
            <div class="flex-shrink-0">
              <i class="bi bi-vector-pen fs-1 text-primary"></i>
            </div>
            <div class="flex-grow-1 ms-4">
              <h5 class="fw-bold">专业设计</h5>
              <p class="text-white-50">技术精湛的专业人员随时准备为我们的客户提供可靠的服务。</p>
            </div>
          </div>

          <div class="d-flex align-items-start mb-4">
            <div class="flex-shrink-0">
              <i class="bi bi-graph-up-arrow fs-1 text-primary"></i>
            </div>
            <div class="flex-grow-1 ms-4">
              <h5 class="fw-bold">大数据与分析</h5>
              <p class="text-white-50">我们的分支机构遍布国内外主要城市，随时为您服务。</p>
            </div>
          </div>

          <div class="d-flex align-items-start">
            <div class="flex-shrink-0">
              <i class="bi bi-gear-wide-connected fs-1 text-primary"></i>
            </div>
            <div class="flex-grow-1 ms-4">
              <h5 class="fw-bold">应用数据维护</h5>
              <p class="text-white-50">我们的分支机构遍布国内外主要城市，随时为您服务。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold">我们的成功案例</h1>
        <p class="lead text-muted">我们为各行各业的客户提供了高质量的技术解决方案。</p>
      </div>

      <div class="row g-4">
        <div v-for="(caseItem, index) in cases" :key="index" class="col-12">
          <div class="card shadow-sm h-100 border-0 overflow-hidden hover-up transition-250">
            <div class="card-body p-4">
              <h3 class="card-title fw-bold mb-1">{{ caseItem.title }}</h3>
              <span class="badge bg-primary-subtle text-primary mb-3">{{ caseItem.category }}</span>
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
                      <strong>地点:</strong> {{ caseItem.location || caseItem.details?.location }}
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
  width: 80%;
  height: 60%;
  background-image: url('/images/decorations/graph-decoration.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  opacity: 0.2;
  z-index: -1;
}

@media (max-width: 992px) {
  .hero-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
    min-height: auto;
    position: static;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero-image-container,
  .hero-content-container {
    position: relative;
    width: 90%;
    margin: 0 auto;
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;
  }

  .hero-image-container {
    height: 50vh;
  }
}

.card:hover {
  box-shadow: var(--bs-box-shadow) !important;
}
</style>
