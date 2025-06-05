<template>
  <main class="pt-5 position-relative cases-main" style="z-index: 1">
    <div class="container py-4">
      <h1 class="text-center mb-4">工程案例</h1>

      <!-- 案例筛选 -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex flex-wrap justify-content-center">
            <button
              class="btn btn-outline-primary m-1"
              :class="{ active: selectedCategory === 'all' }"
              @click="filterCases('all')"
            >
              全部案例
            </button>
            <button
              v-for="category in categories"
              :key="category.id"
              class="btn btn-outline-primary m-1"
              :class="{ active: selectedCategory === category.id }"
              @click="filterCases(category.id)"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- 案例列表 -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div
          v-for="(item, index) in filteredCases"
          :key="index"
          class="col"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="card overflow-hidden h-100 shadow-sm case-card">
            <img
              :src="item.imageUrl"
              class="card-img-top"
              :alt="item.title"
              style="height: 200px; object-fit: cover"
            />
            <div class="card-body">
              <div class="badge bg-primary mb-2">
                {{ getCategoryName(item.category) }}
              </div>
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-footer bg-transparent border-top-0">
              <button class="btn btn-outline-primary" @click="showCaseDetail(item)">
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="row mt-5">
        <div class="col-12">
          <nav aria-label="案例分页">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)"
                  >上一页</a
                >
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)"
                  >下一页</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- 案例详情模态框 -->
      <div
        class="modal fade"
        id="caseDetailModal"
        tabindex="-1"
        aria-labelledby="caseDetailModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="caseDetailModalLabel">{{ selectedCase.title }}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <img
                    :src="selectedCase.imageUrl"
                    class="img-fluid rounded"
                    :alt="selectedCase.title"
                  />
                </div>
                <div class="col-md-6">
                  <h4>项目概述</h4>
                  <p>{{ selectedCase.fullDescription || selectedCase.description }}</p>

                  <div class="mt-3">
                    <h5>项目类型</h5>
                    <div class="badge bg-primary">{{ getCategoryName(selectedCase.category) }}</div>
                  </div>

                  <div class="mt-3" v-if="selectedCase.client">
                    <h5>客户</h5>
                    <p>{{ selectedCase.client }}</p>
                  </div>

                  <div class="mt-3" v-if="selectedCase.completionDate">
                    <h5>完成时间</h5>
                    <p>{{ selectedCase.completionDate }}</p>
                  </div>
                </div>
              </div>

              <div class="row mt-4" v-if="selectedCase.keyPoints && selectedCase.keyPoints.length">
                <div class="col-12">
                  <h4>项目要点</h4>
                  <ul class="list-group list-group-flush">
                    <li
                      v-for="(point, pointIndex) in selectedCase.keyPoints"
                      :key="pointIndex"
                      class="list-group-item"
                    >
                      <i class="bi bi-check-circle-fill text-success me-2"></i>
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row mt-4" v-if="selectedCase.testimonial">
                <div class="col-12">
                  <div class="card overflow-hidden bg-light">
                    <div class="card-body">
                      <h5 class="mb-3">客户评价</h5>
                      <blockquote class="blockquote">
                        <p class="mb-0">{{ selectedCase.testimonial.content }}</p>
                        <footer class="blockquote-footer mt-2">
                          {{ selectedCase.testimonial.author }}
                          <cite v-if="selectedCase.testimonial.position">
                            , {{ selectedCase.testimonial.position }}
                          </cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">关闭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// 定义案例类型
interface Case {
  id: number
  title: string
  description: string
  fullDescription?: string
  imageUrl: string
  category: string
  client?: string
  completionDate?: string
  keyPoints?: string[]
  testimonial?: {
    content: string
    author: string
    position?: string
  }
}

// 模拟数据 - 实际项目中可从API获取
const categories = ref([
  { id: 'intelligent-system', name: '智能系统集成' },
  { id: 'industrial-automation', name: '工业自动化' },
  { id: 'software-development', name: '软件开发' },
  { id: 'iot', name: '物联网应用' },
])

// 案例数据
const cases = ref<Case[]>([
  {
    id: 1,
    title: '大型制造企业智能工厂系统',
    description: '为某大型制造企业打造完整的智能工厂解决方案，实现生产过程自动化、数字化和智能化。',
    fullDescription:
      '为某大型制造企业打造的智能工厂解决方案，覆盖从原材料入库到成品出库的完整流程。系统集成了工业自动化控制、MES生产执行系统、工业物联网和数据分析平台，实现了生产过程的自动化、数字化和智能化。',
    imageUrl: '/images/cases/case1.jpg',
    category: 'intelligent-system',
    client: '某大型制造企业',
    completionDate: '2023年6月',
    keyPoints: [
      '实现生产全流程数字化管理',
      '生产效率提升30%，能源消耗降低15%',
      '质量缺陷率下降40%',
      '系统集成多种工业协议和设备',
    ],
    testimonial: {
      content:
        '辰星科技的智能工厂解决方案帮助我们实现了生产流程的数字化转型，大幅提升了生产效率和产品质量，为公司创造了可观的经济效益。',
      author: '张总监',
      position: '生产管理部',
    },
  },
  {
    id: 2,
    title: '智慧园区管理系统',
    description: '为某科技园区开发的一体化园区管理平台，集成安防、能源、环境和访客管理等功能。',
    imageUrl: '/images/cases/case2.jpg',
    category: 'software-development',
    client: '某科技园区',
    completionDate: '2023年3月',
  },
  {
    id: 3,
    title: '工业设备远程监控系统',
    description: '基于物联网技术的工业设备远程监控系统，实现设备数据采集、状态监控和预测性维护。',
    imageUrl: '/images/cases/case3.jpg',
    category: 'iot',
    client: '某能源公司',
    completionDate: '2022年12月',
  },
  {
    id: 4,
    title: '自动化生产线改造项目',
    description: '对某食品企业老旧生产线进行自动化改造，提升生产效率和产品质量。',
    imageUrl: '/images/cases/case4.jpg',
    category: 'industrial-automation',
  },
  {
    id: 5,
    title: '企业资源管理系统开发',
    description: '为某集团企业开发的定制化ERP系统，满足其特殊业务流程和管理需求。',
    imageUrl: '/images/cases/case5.jpg',
    category: 'software-development',
  },
  {
    id: 6,
    title: '智能仓储物流系统',
    description: '结合AGV、自动化仓库和智能调度系统，构建高效仓储物流解决方案。',
    imageUrl: '/images/cases/case6.jpg',
    category: 'intelligent-system',
  },
])

// 分页相关
const itemsPerPage = 6
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(filteredCases.value.length / itemsPerPage))

// 筛选相关
const selectedCategory = ref('all')

// 案例详情
const selectedCase = ref<Case>({} as Case)
let caseDetailModal: any = null

// 根据类别筛选案例
const filteredCases = computed(() => {
  let result = [...cases.value]

  if (selectedCategory.value !== 'all') {
    result = result.filter((item) => item.category === selectedCategory.value)
  }

  return result
})

// 页面变更
const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}

// 筛选案例
const filterCases = (category: string) => {
  selectedCategory.value = category
  currentPage.value = 1
}

// 获取类别名称
const getCategoryName = (categoryId: string) => {
  const category = categories.value.find((c) => c.id === categoryId)
  return category ? category.name : '其他'
}

// 显示案例详情
const showCaseDetail = (caseItem: any) => {
  selectedCase.value = caseItem
  if (caseDetailModal) {
    caseDetailModal.show()
  }
}

// 组件挂载后初始化模态框
onMounted(() => {
  // 使用 Bootstrap 原生 API 初始化模态框
  if (typeof window !== 'undefined' && (window as any).bootstrap) {
    const modalElement = document.getElementById('caseDetailModal')
    if (modalElement) {
      caseDetailModal = new (window as any).bootstrap.Modal(modalElement)
    }
  }
})
</script>

<style scoped lang="scss">
// 页面背景
.cases-main {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 1)
      ),
      url('/images/home/电路板背景.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
    z-index: -1;
  }
}

// 案例卡片样式
.case-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.05);
    }
  }

  img {
    transition: transform 0.5s ease;
  }
}

// 过滤按钮样式
.btn-outline-primary {
  &.active {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
}
</style>
