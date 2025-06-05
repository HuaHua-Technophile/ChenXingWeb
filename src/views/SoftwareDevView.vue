<template>
  <main class="pt-5 position-relative software-dev-main" style="z-index: 1">
    <div class="container py-4">
      <h1 class="text-center mb-4">软件开发</h1>

      <!-- 开发服务概述 -->
      <div class="row mb-5">
        <div class="col-md-6">
          <h2 class="mb-3">专业软件定制开发服务</h2>
          <p class="lead">我们提供全面的软件开发解决方案，从需求分析到设计、开发、测试和部署。</p>
          <p>
            辰星科技拥有一支经验丰富的软件开发团队，专注于为各行业客户提供高质量、高性能的定制软件解决方案。我们深入理解客户需求，结合先进技术和行业最佳实践，打造满足您独特业务需求的软件系统。
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <a href="#dev-process" class="btn btn-primary">了解我们的开发流程</a>
            <a href="/contact" class="btn btn-outline-primary">联系我们</a>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/辰星LOGO.webp"
            alt="软件开发"
            class="img-fluid rounded shadow-sm"
            style="max-height: 300px; width: auto"
          />
        </div>
      </div>

      <!-- 开发类型 -->
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

      <!-- 开发流程 -->
      <div id="dev-process" class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2>我们的开发流程</h2>
          <p class="lead">科学高效的软件开发方法论</p>
        </div>

        <div class="col-12">
          <div class="timeline">
            <div class="row g-0">
              <div class="col-md-6">
                <div class="timeline-item">
                  <div class="timeline-badge bg-primary">1</div>
                  <div class="timeline-panel p-4 bg-light rounded shadow-sm">
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
                <div class="timeline-item">
                  <div class="timeline-badge bg-primary">2</div>
                  <div class="timeline-panel p-4 bg-light rounded shadow-sm">
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
                <div class="timeline-item">
                  <div class="timeline-badge bg-primary">3</div>
                  <div class="timeline-panel p-4 bg-light rounded shadow-sm">
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
                <div class="timeline-item">
                  <div class="timeline-badge bg-primary">4</div>
                  <div class="timeline-panel p-4 bg-light rounded shadow-sm">
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
                <div class="timeline-item">
                  <div class="timeline-badge bg-primary">5</div>
                  <div class="timeline-panel p-4 bg-light rounded shadow-sm">
                    <h4>部署上线</h4>
                    <p>规划部署策略，配置生产环境，执行系统部署和数据迁移，确保系统稳定运行。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-md-6 offset-md-6">
                <div class="timeline-item">
                  <div class="timeline-badge bg-primary">6</div>
                  <div class="timeline-panel p-4 bg-light rounded shadow-sm">
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

      <!-- 技术栈 -->
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

      <!-- CTA -->
      <div class="row">
        <div class="col-12">
          <div class="bg-primary text-white p-4 rounded text-center">
            <h3>准备开始您的软件开发项目?</h3>
            <p class="lead">联系我们，获取专业解决方案和报价</p>
            <a href="/contact" class="btn btn-light btn-lg">立即咨询</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped lang="scss">
// 页面背景
.software-dev-main {
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

// 时间线样式
.timeline {
  position: relative;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    margin-left: -1px;
    background-color: var(--bs-primary);
  }

  .timeline-badge {
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: white;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    z-index: 1;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 30px;
  }

  .timeline-panel {
    position: relative;
    margin-right: 30px;
    margin-left: 30px;
  }
}

@media (max-width: 767.98px) {
  .timeline::before {
    left: 40px;
  }

  .timeline .timeline-badge {
    left: 40px;
    margin-left: 0;
  }

  .timeline .timeline-panel {
    width: calc(100% - 90px);
    margin-left: 90px;
  }

  .timeline .timeline-item {
    margin-bottom: 20px;
  }
}
</style>
