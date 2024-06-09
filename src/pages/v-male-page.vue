<template>
  <div
    class="
      v-male-page
      page-container
    "
    id="page"
  >
    <div class="zagolovok-container">
      <div class="zagolovok">Мужское отделение</div>
    </div>
    <div class="text-background">
      <div class="text" style="padding-top: 10px;">
        Мужское отделение банного комплекса Берлога рассчитано на одновременное посещение 70 человек. Каждому гостю предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту. В моечном отделении находится бассейн размерами 6*5 м., глубина 1,5-1,9 м., температура воды 28 градусов. Русская парная рассчитана на 40 человек. Температура в парной 90-100 градусов. Объём парной 100 м.куб. Топится 2-мя газовыми печами (Тепло дар). Турецкий хамам, в котором могут комфортно расположиться до 10 человек. Для любителей экстрима есть купель с температурой воды 12 градусов. Для клиентов бани работает кухня и бар. Так же есть отдельная зона для курения.
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
      <swiper-slide><img src="@/images/for-pages/male/7.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/8.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/9.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/10.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/11.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/12.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/13.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/14.jpg" class="page-image"></swiper-slide>
      <swiper-slide><img src="@/images/for-pages/male/15.jpg" class="page-image"></swiper-slide>
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
    name: 'v-male-page',
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