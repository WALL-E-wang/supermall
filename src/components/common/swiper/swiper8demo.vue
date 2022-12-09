<template>
  <div>
   <swiper
    :modules="modules"
    :loop="true"
    :slides-per-view="1"
    :space-between="0"
    :autoplay="{ delay: 10000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :observer="true"
    :observeParents="true"
    @swiper="onSwiper"
    @onSlideChange="onSlideChange"
    @click="clickswiper"
  >
    <!-- loop可循环轮播，autoplay可自动播放 -->
      <swiper-slide>Slide 11</swiper-slide>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 1</swiper-slide>
  </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
export default {
  name: "swiper",
  components: {
      Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const clickswiper = () => {
      console.log("slide change");
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      clickswiper,
      modules: [Navigation, Pagination, Scrollbar],
    };
  },
};
</script>
<style>
.swiper {
  height: 2rem;
  width: 7.5rem;
}
.swiper .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 100%;
  background-color: #42b983;
  text-align: center;
}
.swiper .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper .swiper-pagination {
  font-size: 0;
}
</style>
