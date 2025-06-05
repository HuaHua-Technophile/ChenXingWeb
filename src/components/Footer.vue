<template>
  <footer class="footer bg-dark text-light py-5 position-relative overflow-hidden">
    <!-- 背景图案 -->
    <div class="footer-bg-pattern"></div>

    <div class="container position-relative z-index-1">
      <div class="row">
        <!-- 公司信息 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="400">
          <div class="d-flex align-items-center mb-3">
            <img
              src="@/assets/images/辰星LOGO.webp"
              alt="辰星Logo"
              width="45"
              height="45"
              class="me-2"
            />
            <h3 class="mb-0 fs-4">辰星科技</h3>
          </div>
          <p class="mb-3">连接智慧，构筑未见之境</p>
          <p class="mb-0 text-secondary">Connecting Intelligence, Building the Unseen Realm</p>
        </div>

        <!-- 联系信息 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="500">
          <h5 class="mb-3">联系我们 / Contact Us</h5>
          <p class="d-flex align-items-center mb-2">
            <i class="bi bi-geo-alt-fill me-2"></i>
            <span>韶关市浈江区十里亭镇良村公路35号良村综合商贸城E栋八楼</span>
          </p>
          <p class="d-flex align-items-center mb-2">
            <i class="bi bi-telephone-fill me-2"></i>
            <span>0751-8819008</span>
          </p>
          <p class="d-flex align-items-center mb-2">
            <i class="bi bi-phone-fill me-2"></i>
            <span>叶灶生：13726565111</span>
          </p>
          <p class="d-flex align-items-center mb-2">
            <i class="bi bi-envelope-fill me-2"></i>
            <span>13726565111@139.com</span>
          </p>
        </div>

        <!-- 社交媒体图标 -->
        <div
          class="col-lg-4 col-md-12 mb-4 mb-lg-0 position-relative z-index-2"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h5 class="mb-3 text-center text-lg-start">关注我们</h5>
          <div class="d-flex gap-4 justify-content-center justify-content-lg-start">
            <!-- 微信 -->
            <div class="position-relative mx-1" data-aos="zoom-in" data-aos-delay="700">
              <div
                class="social-icon-circle d-flex align-items-center justify-content-center rounded-circle"
                @mouseenter="toggleQrCode('wechat')"
                @mouseleave="hideQrCode('wechat')"
                @click="toggleQrCode('wechat')"
              >
                <i class="bi bi-wechat fs-4 text-white"></i>
              </div>
              <div
                class="qr-dropdown position-absolute start-50 translate-middle-x mt-3"
                :class="{ show: activeQrCode === 'wechat' }"
              >
                <div class="bg-white p-3 rounded shadow">
                  <img
                    src="@/assets/images/辰星LOGO.webp"
                    alt="微信二维码"
                    width="120"
                    height="120"
                  />
                  <p class="mb-0 text-center mt-2 text-dark fs-6">微信公众号</p>
                </div>
              </div>
            </div>

            <!-- 微博 -->
            <div class="position-relative mx-1" data-aos="zoom-in" data-aos-delay="800">
              <div
                class="social-icon-circle d-flex align-items-center justify-content-center rounded-circle"
                @mouseenter="toggleQrCode('weibo')"
                @mouseleave="hideQrCode('weibo')"
                @click="toggleQrCode('weibo')"
              >
                <i class="bi bi-sina-weibo fs-4 text-white"></i>
              </div>
              <div
                class="qr-dropdown position-absolute start-50 translate-middle-x mt-3"
                :class="{ show: activeQrCode === 'weibo' }"
              >
                <div class="bg-white p-3 rounded shadow">
                  <img
                    src="@/assets/images/辰星LOGO.webp"
                    alt="微博二维码"
                    width="120"
                    height="120"
                  />
                  <p class="mb-0 text-center mt-2 text-dark fs-6">微博官方账号</p>
                </div>
              </div>
            </div>

            <!-- 抖音 -->
            <div class="position-relative mx-1" data-aos="zoom-in" data-aos-delay="900">
              <div
                class="social-icon-circle d-flex align-items-center justify-content-center rounded-circle"
                @mouseenter="toggleQrCode('tiktok')"
                @mouseleave="hideQrCode('tiktok')"
                @click="toggleQrCode('tiktok')"
              >
                <i class="bi bi-tiktok fs-4 text-white"></i>
              </div>
              <div
                class="qr-dropdown position-absolute start-50 translate-middle-x mt-3"
                :class="{ show: activeQrCode === 'tiktok' }"
              >
                <div class="bg-white p-3 rounded shadow">
                  <img
                    src="@/assets/images/辰星LOGO.webp"
                    alt="抖音二维码"
                    width="120"
                    height="120"
                  />
                  <p class="mb-0 text-center mt-2 text-dark fs-6">抖音官方账号</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品服务列表 -->
      <div class="row mt-4">
        <div class="col-12 z-index-1" data-aos="fade-up" data-aos-delay="1000">
          <div class="d-flex flex-wrap justify-content-center small text-secondary gap-3">
            <span>能源管控</span>
            <span>•</span>
            <span>消防系统</span>
            <span>•</span>
            <span>智慧养老</span>
            <span>•</span>
            <span>智能门禁</span>
            <span>•</span>
            <span>网络工程</span>
            <span>•</span>
            <span>水利监测</span>
            <span>•</span>
            <span>软件定制</span>
            <span>•</span>
            <span>系统集成</span>
            <span>•</span>
            <span>智能楼宇</span>
            <span class="d-inline d-lg-none">•</span>
          </div>
        </div>
      </div>

      <!-- 备案信息 -->
      <div class="row mt-4 pt-3 border-top border-secondary">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="1100">
          <p class="mb-0 text-secondary small">
            © 2024 辰星科技. 保留所有权利 |
            <a href="https://beian.miit.gov.cn/" target="_blank" class="text-secondary"
              >粤ICP备XXXXXXXX号</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeQrCode = ref('')

const toggleQrCode = (code: string) => {
  activeQrCode.value = code
}

const hideQrCode = (code: string) => {
  activeQrCode.value = ''
}
</script>

<style scoped lang="scss">
.footer {
  .footer-bg-pattern {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/home/电路板背景.svg');
    background-size: cover;
    opacity: 0.05;
    z-index: 0;
  }

  [data-bs-theme='dark'] & .footer-bg-pattern {
    opacity: 0.1;
  }

  [data-bs-theme='light'] & .footer-bg-pattern {
    opacity: 0.08;
    filter: invert(100%) brightness(60%) contrast(120%) hue-rotate(190deg);
  }
}

// 仅保留必要的自定义样式
.social-icon-circle {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: var(--bs-primary);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
}

// 二维码弹窗动画效果
.qr-dropdown {
  visibility: hidden;
  opacity: 0;
  transition: all 0.75s;
  z-index: 100;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
  }
}
</style>
