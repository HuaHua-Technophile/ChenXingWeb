<template>
  <footer class="footer bg-dark text-light py-5 position-relative overflow-hidden">
    <!-- 背景图案 -->
    <div class="footer-bg-pattern"></div>

    <div class="container position-relative z-index-1">
      <div class="row mb-4">
        <!-- 公司信息 -->
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="400">
          <div class="d-flex align-items-center mb-3">
            <img
              :src="getAssetUrl('images/辰星LOGO.webp')"
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
          <p
            v-for="(item, index) in contactInfo"
            :key="index"
            class="d-flex align-items-center mb-2"
          >
            <i class="bi me-2" :class="item.icon"></i>
            <span>{{ item.text }}</span>
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
            <div
              v-for="(social, index) in socialMedia"
              :key="social.id"
              class="position-relative mx-1"
              data-aos="zoom-in"
              :data-aos-delay="700 + index * 100"
            >
              <div
                class="social-icon-circle transition-500 cursor-pointer d-flex align-items-center justify-content-center rounded-circle mb-3"
                @mouseenter="activeQrCode = social.id"
                @mouseleave="activeQrCode = ''"
                @click="activeQrCode = activeQrCode === social.id ? '' : social.id"
              >
                <i class="bi fs-4 text-white" :class="social.iconClass"></i>
              </div>
              <div
                class="qr-dropdown t-100 position-absolute start-50 translate-middle-x transition-750"
                :class="{ show: activeQrCode === social.id }"
              >
                <div class="bg-body bg-opacity-50 blur-2 p-3 rounded shadow border">
                  <img
                    :src="getAssetUrl(social.qrImage)"
                    :alt="`${social.name}二维码`"
                    width="120"
                    height="120"
                    class="mb-2"
                  />
                  <p class="mb-0 text-center text-body fs-6">{{ social.qrText }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品服务列表 -->
      <div class="row mb-4">
        <div class="col-12 z-index-1" data-aos="fade-up" data-aos-delay="1000">
          <div class="d-flex flex-wrap justify-content-center small text-secondary gap-3">
            <span>软件开发</span>
            <span>•</span>
            <template v-for="(service, index) in services" :key="service.title">
              <span>{{ service.title }}</span>
              <span v-if="index < services.length - 1">•</span>
              <span v-else class="d-inline d-lg-none">•</span>
            </template>
          </div>
        </div>
      </div>

      <!-- 备案信息 -->
      <div class="row pt-3 border-top border-secondary">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="1100">
          <p class="mb-0 text-secondary small">
            © 2024 辰星科技. 保留所有权利 |
            <a href="https://beian.miit.gov.cn/" target="_blank" class="text-secondary"
              >粤ICP备2025425262号</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import servicesData from '@/assets/services.json'
import { getAssetUrl } from '@/utils/getAssetUrl'

const activeQrCode = ref('')
const services = ref<any[]>([])

const contactInfo = ref([
  { icon: 'bi-geo-alt-fill', text: '韶关市浈江区十里亭镇良村公路35号良村综合商贸城E栋八楼' },
  { icon: 'bi-telephone-fill', text: '0751-8819008' },
  { icon: 'bi-phone-fill', text: '叶灶生：13726565111' },
  { icon: 'bi-envelope-fill', text: '13726565111@139.com' },
])

const socialMedia = ref([
  {
    id: 'wechat',
    name: '微信',
    iconClass: 'bi-wechat',
    qrImage: 'images/辰星LOGO.webp',
    qrText: '微信公众号',
  },
  {
    id: 'weibo',
    name: '微博',
    iconClass: 'bi-sina-weibo',
    qrImage: 'images/辰星LOGO.webp',
    qrText: '微博官方账号',
  },
  {
    id: 'tiktok',
    name: '抖音',
    iconClass: 'bi-tiktok',
    qrImage: 'images/辰星LOGO.webp',
    qrText: '抖音官方账号',
  },
])

onMounted(() => {
  services.value = servicesData
})
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
    background-image: url('@/assets/images/电路板背景.svg');
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
