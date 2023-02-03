<template>
	<div class="swiper-container banner_index">
		<div class="swiper-wrapper">
			<div :key="i" v-for="(item, i) in banner" class="swiper-slide">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="swiper_imgload" />
				</a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>

import { swiper_5 } from "@/common/swiper";
export default {
	name: "honeSwiper",
	props: {
		banner: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	mounted() {
		let vm = this
    setTimeout(() => {
      swiper_5(".banner_index", {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			 preloadImages:true,
			 updateOnImagesReady:true,
			loop: true,
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			on: {
				click: function () {
					console.log("你点了Swiper");
				},
        init:function(){
          // this.slideTo(3, 1000, false)
        },
				observerUpdate: function () {
        //  console.log("变化了")
				},
				imagesReady:function(){
					 vm.imagesReady()
				}
			},
			
		});
    },100);
	
	},
	methods:{
		swiper_imgload(){
			this.$emit("swiper_imgload")
		},
		imagesReady(){
				this.$emit("swiperimg_ready")
		}
	}
};
</script>
<style>
.swiper-container .swiper-wrapper .swiper-slide > a {
	display: block;
	width: 100%;
	height: 100%;
}
.swiper-container {
	height: 3.5rem;
}
</style>
