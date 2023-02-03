<template>
	<div ref="wrapper" class="wrapper">
		<div class="content">
			<slot></slot>
		</div>
		<!-- <div class="custom-vertical-scrollbar" ref="vertical">
			<div class="custom-vertical-indicator"></div>
		</div> -->
	</div>
</template>
<script>
import BScroll from "better-scroll";
export default {
	name: "Scroll",
	data() {
		return {
			bs: null,
		};
	},
	props: {
		probeType: {
			type: Number,
			default: 0,
		},
	},
	mounted() {
		this.bs = new BScroll(this.$refs.wrapper, {
			scrollY: true,
			startY:0,
			scrollX: false,
			probeType: this.probeType,
			click: true,
			pullDownRefresh: true,
			pullUpLoad: true,
			observeDOM: true,
			// bounce:{
			// 	top:false
			// },
			observeImage: true,
			// useTransition:false,
			// scrollbar: {
			// 	customElements: [this.$refs.vertical],
			// 	fade: false,
			// 	scrollbarTrackClickable: true,
			// 	interactive: true,
			// },
			mouseWheel: {
				speed: 20,
				invert: false,
				easeTime: 300,
			},
		});
		// this.bs.on("scroll", (position) => {
		// 	  console.log(position)
		// });
		// this.bs.on("pullingDown", () => {
		// 	console.log("上拉执行刷新");
		// });
		// this.bs.on("pullingUp", () => {
		// 	console.log("上拉执行刷新1");
		// 	this.bs.finishPullUp();
		// });
	},
};
</script>
<style scoped>
.wrapper {
	position: relative;
	overflow: hidden;
}
.custom-vertical-scrollbar {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 7px;
	border-radius: 6px;
	background-color: rgb(200, 200, 200, 0.3);
}
.custom-vertical-indicator {
	width: 100%;
	height: 20px;
	border-radius: 6px;
	background-color: #db8090;
}
</style>