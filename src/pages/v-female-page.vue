<template>
  <div
    class="
      v-female-page
      page-container
    "
    id="page"
  >
    <div class="zagolovok-container">
      <div class="zagolovok">Женское отделение</div>
    </div>
    <div class="text-background">
      <div class="text" style="padding-top: 10px;">
        Женское отделение банного комплекса Берлога рассчитано на одновременное посещение 40 человек. Каждому гостю предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту. В моечном отделении находится бассейн размерами 6*5 м., глубина 1,5-1,9 м., температура воды 28 градусов. Русская парная, рассчитана на 30 человек. Температура в парной 85-95 градусов. Объём парной 70 куб.м, Топится 1-й газовой печью. Турецкий хамам, в котором могут комфортно расположиться до 10 человек. Для клиентов бани работает кухня и бар.
      </div>
    </div>
    <swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="@/images/for-pages/female/20.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/female/21.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/female/22.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/female/23.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/female/24.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/female/25.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/female/26.jpg" class="page-image"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    name: 'v-ауmale-page',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
</style>