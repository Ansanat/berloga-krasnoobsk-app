<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :keyboard="{
      enabled: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <img class="block-background" src="@/images/dashboard/block1.jpg"/>
        <div class="block-container anim">
            <div class="block-text">Добро пожаловать в банный комплекс Берлога</div>
            <div class="block-text">Краснообск</div>
            <router-link :to="{ name: 'Main', hash: '#berloga'}" style="text-decoration: none;"><div class="info-button">Подробнее</div></router-link>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/dashboard/block2.jpg"/>
        <div class="block-container anim">
            <div class="block-text">Мужское отделение</div>
            <router-link :to="{ name: 'Male', hash: '#page'}" style="text-decoration: none;"><div class="info-button">Подробнее</div></router-link>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/dashboard/block3.jpg"/>
        <div class="block-container anim">
            <div class="block-text">Женское отделение</div>
            <router-link :to="{ name: 'Female', hash: '#page'}" style="text-decoration: none;"><div class="info-button">Подробнее</div></router-link>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/dashboard/block4.jpg"/>
        <div class="block-container anim">
            <div class="block-text">Коллективное парение</div>
            <router-link :to="{ name: 'Male', hash: '#collect-par'}" style="text-decoration: none;"><div class="info-button">Подробнее</div></router-link>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/dashboard/block5.jpg"/>
        <div class="block-container anim">
            <div class="block-text">Еда и напитки</div>
            <router-link :to="{ name: 'Kitchen', hash: '#page'}" style="text-decoration: none;"><div class="info-button">Подробнее</div></router-link>
        </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
// import Slider from "@/components/v-slider";

export default {
    name: 'v-header-block',
        props: {
        text: String,
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Keyboard, Pagination, Navigation],
      };
    },
    data() {
        return {
        ref: null
        };
    },
    methods: {
        handleClick() {
        this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

<style>
.swiper-pagination-bullet, .swiper-pagination-bullet-active {
    background-color: black;
    width: 15px;
    height:15px;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    color: white;
}
.swiper-button-next:hover{
    color: white;
    opacity:0.4;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
    color: white;
}
.swiper-button-prev:hover{
    color: white;
    opacity:0.4;
}
.v-header-block {
    border: 4px solid #121820;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
.block-background {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.block-container{
    width: 1500px;
    font-size: 60px;
    color: white;
    position: absolute;
    left: 50%;
    top: 72%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.block-text {
    text-stroke: 2.5px #121820;
    margin-top: 0px;
    text-shadow: 2px 2px 3px black;
}

.menu-container{
    width: 900px;
    font-size: 30px;
    color: white;
    position: absolute;
    left: 51%;
    top: 80%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.menu-text{

    text-stroke: 5px #121820;

    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
    font-size:70px;
    width: 900px;
}

.male-time{
    left:25% !important;
}

.female-time{
    left:75% !important;
}

.time-container{
    width: 1200px;
    font-size: 30px;
    color: white;
    position: absolute;
    left: 51%;
    top: 75%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.time-text{

    text-stroke: 4px #121820;

    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
    font-size:80px;
    width: 1200px;
}

.loyal-container{
    width: 1500px;
    font-size: 30px;
    color: white;
    position: absolute;
    left: 51%;
    top: 70%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.loyal-text{
    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
    font-size:70px;
    width: 1500px;
}

.info-button{
    margin-top: 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    display: inline-block;
    background-color: rgb(222, 222, 222);
    border-color: #121820;
    border-style: solid;
    height: 60px;
    width: 180px;
    font-size: 16px;
    color: #121820;
    font-weight: bold;
    font-style: italic;
}

.info-button:hover{
    background-color: #D2B48C;
}
.anim{
    animation: show 2s;
    animation-fill-mode: forwards;
    opacity:0;
}
@keyframes show{
    0%{
        opacity:0;
    }
    100% {
        opacity:1;
    }
}

@media screen and (max-width: 700px) {
    .block-background {
        aspect-ratio: 9 / 14;
    }
    .block-container{
        top: 65%;
        font-size: 30px;
        width: 350px;
    }
    .block-text {
        margin-top: 5px;
        text-shadow: 2px 2px 5px black;
    }
    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
        display: none;
    }
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
        display: none;
    }
    .menu-text{
        font-size: 50px;
        width:400px;
    }
    .menu-container{
        width: 400px;
        top:55%;
    }
    .time-text{
        font-size: 50px;
        width:400px;
    }
    .time-container{
        width: 400px;
        top:70%;
    }
    .male-time{
        left: 21.5% !important;
    }
    .female-time{
        left:71.5% !important;
    }

    .loyal-text{
        font-size: 50px;
        width:400px;
    }
    .loyal-container{
        width: 400px;
        top:55%;
    }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
    .block-container{
        top: 65%;
        font-size: 35px;
        width: 700px;
    }
    .time-container{
        width: 400px;
        top:65%;
    }
    .time-text{
        font-size: 50px;
        width:400px;
    }
    .menu-text{
        font-size: 50px;
        width:400px;
    }
    .menu-container{
        width: 400px;
        top:55%;
    }
}

</style>