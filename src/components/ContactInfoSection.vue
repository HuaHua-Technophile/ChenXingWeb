<template>
  <section
    class="py-4 py-md-5 position-relative overflow-hidden"
    style="
      background-image: url('/images/technology-6801334_1920.jpg');
      background-size: cover;
      background-position: center;
    "
    data-aos="fade-left"
  >
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50"></div>
    <div class="container position-relative" style="z-index: 1">
      <div class="row align-items-center">
        <div class="col-lg-6 text-white mb-2 mb-lg-0" data-aos="fade-up">
          <h3 class="mb-3 fw-bold display-6">需要技术支持？</h3>
          <p class="lead">我们的专业团队随时准备为您的智能系统提供全方位技术服务。</p>
        </div>
        <div class="col-lg-6">
          <div
            class="card bg-transparent blur-10 hover-up transition-500 overflow-hidden cursor-pointer"
            @click="goToContact"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="card-body text-white d-flex flex-column justify-content-center align-items-center p-2 p-md-4"
            >
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-calendar-check display-4 text-primary me-3"></i>
                <h4 class="fw-bold mb-0">预约咨询</h4>
              </div>
              <p class="lead mb-0">Make an Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 跳转到联系我们页面
const goToContact = () => {
  router.push('/contact')
}
</script>
