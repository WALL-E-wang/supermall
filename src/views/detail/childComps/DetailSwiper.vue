<template>
	<div class="details_swiper">
		<div class="swiper-wrapper">
			<div :key="i" v-for="(item, i) in topImages" class="swiper-slide">
				<img :src="item" alt="" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
import { swiper_5 } from "@/common/swiper";
export default {
	name: "DetailSwiper",
	props: {
		topImages: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			topImages_data: [],
		};
	},
	watch: {
		topImages(newdata, prevdata) {
			this.topImages_data = newdata;
			setTimeout(() => {
				swiper_5(".details_swiper", {
					observer: true,
					observeParents: true,
					observeSlideChildren: true,
					preloadImages: true,
					updateOnImagesReady: true,
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
						init: function () {
							if (newdata.length <= 1) {
                 this.params.autoplay=false;
								this.destroy(false)
							}
						},
						observerUpdate: function () {
							//  console.log("变化了")
						},
					},
				});
			}, 100);
		},
	},
	mounted() {},
};
</script>
<style scoped>
.details_swiper {
	height: 5rem;
	overflow: hidden;
	position: relative;
}
.details_swiper img{
  width: 100%;
  object-fit: cover;
}
</style>