<script setup lang="ts">
// 联系我们页面组件
import contactBg1 from '@/assets/images/contact1.webp'
import contactBg2 from '@/assets/images/contact2.webp'

// 联系方式数据
const contactInfoList = [
  {
    icon: 'bi bi-geo-alt-fill',
    title: '公司地址 / Company Address',
    content: '韶关市浈江区十里亭镇良村公路35号良村综合商贸城E栋八楼',
  },
  {
    icon: 'bi bi-telephone-fill',
    title: '联系电话 / Contact Number',
    content: '0751-8819008',
  },
  {
    icon: 'bi bi-phone-fill',
    title: '手机号码 / Phone Number',
    content: '叶灶生：13726565111',
  },
  {
    icon: 'bi bi-envelope-fill',
    title: '电子邮箱 / Email',
    content: '13726565111@139.com',
  },
]
</script>

<template>
  <main class="bg-body">
    <section
      class="position-relative bgimg-center-cover"
      :style="{ backgroundImage: `url(${contactBg1})` }"
    >
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-body bg-opacity-50"></div>
      <div class="container py-5">
        <div class="row pt-4">
          <div class="col-12 text-center pt-3">
            <h1
              class="fw-bold fs-2 fs-md-1 position-relative"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              联系我们 <span class="text-muted d-none d-lg-inline">/ Contact Us</span>
            </h1>
            <p
              class="fs-5 fs-md-4 position-relative"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              期待与您的沟通/ We Look Forward to Hearing from You
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="position-relative py-5 bgimg-center-cover"
      :style="{
        backgroundImage: `url(${contactBg2})`,
      }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div
              class="card hover-up bg-body bg-opacity-50 overflow-hidden blur-10 p-4 transition-750"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="position-relative">
                <h2 class="mb-4" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                  联系方式 <span class="text-muted fs-5 fs-md-5">/ Contact Information</span>
                </h2>

                <div
                  v-for="(item, index) in contactInfoList"
                  :key="index"
                  :class="{ 'mb-4': index !== contactInfoList.length - 1 }"
                  data-aos="fade-up"
                  :data-aos-delay="400 + index * 100"
                  data-aos-duration="800"
                >
                  <h3 class="fw-semibold fs-6 fs-md-5 mb-2">
                    <i :class="item.icon" class="me-2 text-primary"></i>
                    {{ item.title }}
                  </h3>
                  <p class="text-body-secondary mb-0 ps-4">{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
/* 移动端背景设置 */
@media (max-width: 767.98px) {
  .contact-bg-section {
    background-size: 110% auto !important; /* 允许横向略微裁切 */
    padding-top: 5rem !important; /* 为背景图预留足够空间 */
  }
}

/* 大屏背景设置 */
@media (min-width: 768px) {
  .contact-bg-section {
    background-size: cover !important;
  }
}

/* 引入Bootstrap图标 */
@import 'bootstrap-icons/font/bootstrap-icons.css';
</style>
