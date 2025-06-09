<template>
  <main class="software-dev-main">
    <!-- Hero Section -->
    <section class="min-vh-100 container d-flex flex-column pt-5">
      <div class="row flex-grow-1 align-items-center">
        <div class="col-lg-6">
          <div class="d-flex align-items-center gap-3 mb-2">
            <p class="text-primary fw-bold text-uppercase mb-0">Some Fact</p>
            <div class="title-line bg-primary"></div>
          </div>
          <h1 class="fw-bold fs-3 fs-lg-1">我们用技术为您的商业成功赋能</h1>
          <p class="lead my-3 my-lg-4">
            我们提供全面的软件开发解决方案，从需求分析到系统上线，助力您的业务在数字化时代保持领先。
          </p>

          <div class="mb-3 mb-lg-4">
            <div class="d-flex justify-content-between mb-1">
              <span>软件开发</span>
              <span>80%</span>
            </div>
            <div class="position-relative progress-line-track">
              <div
                class="progress bg-transparent position-relative z-index-2 overflow-visible"
                style="height: 8px"
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 80%"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="mb-3 mb-lg-4">
            <div class="d-flex justify-content-between mb-1">
              <span>UI/UX 设计</span>
              <span>90%</span>
            </div>
            <div class="position-relative progress-line-track">
              <div
                class="progress bg-transparent position-relative z-index-2 overflow-visible"
                style="height: 8px"
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 90%"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="mb-3 mb-lg-4">
            <div class="d-flex justify-content-between mb-1">
              <span>Web 开发</span>
              <span>70%</span>
            </div>
            <div class="position-relative progress-line-track">
              <div
                class="progress bg-transparent position-relative z-index-2 overflow-visible"
                style="height: 8px"
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 70%"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
          <div class="position-relative hero-image-container">
            <img
              src="/images/软件开发/software-developer-6521720_1920_11zon.webp"
              class="img-fluid rounded shadow"
              alt="软件开发团队"
            />
            <div class="decorative-shape position-absolute z-index-1"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 开发类型 -->
    <section class="container py-4">
      <div class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2>我们的软件开发服务</h2>
          <p class="lead">覆盖多种应用类型，满足不同场景需求</p>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card overflow-hidden h-100 shadow-sm">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-globe fs-1 text-primary"></i>
              </div>
              <h4 class="card-title">Web应用开发</h4>
              <p class="card-text">
                开发响应式、高性能的企业级Web应用，支持多设备访问，提供流畅的用户体验。
              </p>
              <ul class="list-unstyled text-start">
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>企业管理系统</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>客户服务平台</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>数据可视化系统</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card overflow-hidden h-100 shadow-sm">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-phone fs-1 text-primary"></i>
              </div>
              <h4 class="card-title">移动应用开发</h4>
              <p class="card-text">
                开发适用于iOS和Android平台的原生或跨平台移动应用，实现随时随地的业务操作。
              </p>
              <ul class="list-unstyled text-start">
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>企业移动办公</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>现场服务工具</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>数据采集应用</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card overflow-hidden h-100 shadow-sm">
            <div class="card-body text-center">
              <div class="mb-3">
                <i class="bi bi-gear fs-1 text-primary"></i>
              </div>
              <h4 class="card-title">系统集成开发</h4>
              <p class="card-text">开发系统间接口和集成方案，实现跨系统数据流转和业务协同。</p>
              <ul class="list-unstyled text-start">
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>API开发与集成</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>数据交换平台</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>第三方系统对接</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 开发流程 -->
    <section class="container py-4">
      <div id="dev-process" class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2>我们的开发流程</h2>
          <p class="lead">科学高效的软件开发方法论</p>
        </div>

        <div class="col-12">
          <div class="timeline position-relative py-4">
            <div class="row g-0">
              <div class="col-md-6">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    1
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>需求分析</h4>
                    <p>
                      深入了解客户业务流程和需求，明确系统功能范围和技术要求，形成详细的需求规格说明书。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6 offset-md-6">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    2
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>系统设计</h4>
                    <p>
                      制定系统架构设计、数据库设计、接口设计和UI设计，确保系统结构合理、可扩展。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    3
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>编码开发</h4>
                    <p>
                      遵循最佳开发实践，使用适合的技术栈进行模块化开发，保证代码质量和可维护性。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6 offset-md-6">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    4
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>测试验证</h4>
                    <p>
                      进行单元测试、集成测试、系统测试和用户验收测试，确保软件质量和功能符合预期。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    5
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>部署上线</h4>
                    <p>规划部署策略，配置生产环境，执行系统部署和数据迁移，确保系统稳定运行。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6 offset-md-6">
                <div class="timeline-item position-relative mb-3 mb-md-4">
                  <div
                    class="timeline-badge bg-primary text-white text-center rounded-circle position-absolute z-index-1 start-50 translate-middle-x"
                  >
                    6
                  </div>
                  <div
                    class="timeline-panel position-relative p-4 bg-light rounded shadow-sm ms-5 me-0 mx-md-4"
                  >
                    <h4>运维支持</h4>
                    <p>
                      提供系统运行维护、性能监控、故障处理和功能升级服务，确保系统持续稳定运行。
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
    <section class="container py-4">
      <div class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2>我们的技术栈</h2>
          <p class="lead">采用业界领先技术，构建高质量软件系统</p>
        </div>

        <div class="col-md-3 col-6 mb-4 text-center">
          <div class="p-3 bg-light rounded">
            <i class="bi bi-filetype-html fs-2 text-primary"></i>
            <h5 class="mt-2">前端开发</h5>
            <p class="small">Vue.js, React, Angular</p>
          </div>
        </div>

        <div class="col-md-3 col-6 mb-4 text-center">
          <div class="p-3 bg-light rounded">
            <i class="bi bi-server fs-2 text-primary"></i>
            <h5 class="mt-2">后端开发</h5>
            <p class="small">Java, .NET, Node.js, Python</p>
          </div>
        </div>

        <div class="col-md-3 col-6 mb-4 text-center">
          <div class="p-3 bg-light rounded">
            <i class="bi bi-phone fs-2 text-primary"></i>
            <h5 class="mt-2">移动开发</h5>
            <p class="small">Flutter, React Native, Swift</p>
          </div>
        </div>

        <div class="col-md-3 col-6 mb-4 text-center">
          <div class="p-3 bg-light rounded">
            <i class="bi bi-database fs-2 text-primary"></i>
            <h5 class="mt-2">数据库</h5>
            <p class="small">MySQL, PostgreSQL, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// 无需额外逻辑
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

@media (max-width: 767.98px) {
  .timeline::before {
    left: 40px;
  }

  .timeline .timeline-badge {
    left: 40px !important;
    transform: none !important;
  }

  .hero-image-container {
    width: 90%;
    margin: 0 auto;
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
