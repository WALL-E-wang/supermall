<template>
	<div id="home">
		<navbar>
			<template #center> <div class="home_nav">购物街</div> </template>
		</navbar>
		<tabControl
			id="tabControl1"
			ref="tabControl_1"
			@tabclick="tabclick"
			v-show="isfixd"
			:class="{ fixd: isfixd }"
			:titles="['流行', '新款', '精选']"
		></tabControl>
		<scroll ref="wrapper" class="content" :probeType="0">
			<HomeSwiper
				@swiper_imgload="swiper_imgload"
				@swiperimg_ready="swiperimg_ready"
				:banner="banner"
			></HomeSwiper>
			<RecommendView :recommends="recommends"></RecommendView>
			<FeatureView :class="{ tabControl_show: isfixd }"></FeatureView>
			<tabControl
				id="tabControl2"
				ref="tabControl_2"
				@tabclick="tabclick"
				:class="{ fixd: isfixd }"
				:titles="['流行', '新款', '精选']"
			></tabControl>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		<!-- <BackTop ref="backtop" @backtop="backtop"></BackTop> -->
		<!--原生监听点击,返回顶部-->
		<BackTop
			v-show="backtop_show"
			ref="backtop"
			@click="yuansheng_backtop"
		></BackTop>
	</div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue";
import RecommendView from "@/views/home/childComps/RecommendView.vue";
import FeatureView from "@/views/home/childComps/FeatureView.vue";

import navbar from "@/components/common/navbar/navbar.vue";
import TabControl from "@/components/content/tabControl/tabControl.vue";
import scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/common/backTop/backTop.vue";

import { debounce } from "@/common/utils";

import { getHomeMultidata, getHomeGoos } from "@/network/home";
import GoodsList from "@/components/content/goos/GoodsList.vue";
export default {
	name: "home",
	data() {
		return {
			banner: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] },
			},
			currentType: "pop",
			bs: null,
			backtop_show: false,
			taboffsettop: 0,
			taboffsetfunc: Function,
			isfixd: false,
		};
	},
	unmounted() {
		console.log("销毁了");
	},
	mounted() {
		//初始化better-scroll
		this.initBscroll();
		this.taboffsetfunc = debounce(this.change_off, 200);
	},
	created() {
		this.getHomeMultidata();
		this.getHomeGoos("pop");
		this.getHomeGoos("new");
		this.getHomeGoos("sell");
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		},
	},
	methods: {
		/* 事件监听*/

		tabclick(index) {
			// switch (index) {
			// 	case 0:
			// 		this.currentType = "pop";

			// 		break;
			// 	case 1:
			// 		this.currentType = "new";
			// 		console.log(this.currentType);
			// 		break;
			// 	case 2:
			// 		this.currentType = "sell";
			// 		console.log(this.currentType);
			// 		break;
			// }
			this.currentType = Object.keys(this.goods)[index];
			this.$refs.tabControl_1.currentIndex = index;
			this.$refs.tabControl_2.currentIndex = index;
		},
		swiper_imgload() {
			this.taboffsetfunc();
		},
		swiperimg_ready() {
			// this.taboffsettop = this.$refs.tabControl.$el.offsetTop;
			// console.log(this.taboffsettop);
		},
		change_off() {
			this.taboffsettop = this.$refs.tabControl_2.$el.offsetTop;
		},
		// backtop(){
		// 		this.$refs.wrapper.bs.scrollTo(0,0,300)
		// },
		yuansheng_backtop() {
			this.bs.scrollTo(0, 0, 300);
		},
		/* 网络请求*/
		getHomeMultidata() {
			getHomeMultidata()
				.then((res) => {
					this.banner = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getHomeGoos(type) {
			const page = this.goods[type].page + 1;
			getHomeGoos(type, page).then((res) => {
				// console.log(res.data.list);
				//   for( let item of res.data.list){
				//  this.goods[type].list.push(item)
				//   }
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
				this.bs.finishPullUp();
			});
		},

		/* scroll插件的调用*/
		initBscroll() {
			this.bs = this.$refs.wrapper.bs;
			this.bs.on("pullingUp", () => {
				console.log("上拉执行刷新2");
				this.getHomeGoos(this.currentType);
			});

			this.bs.on("pullingDown", () => {
				console.log("下拉执行刷新2");
				this.bs.finishPullDown();
				//这插件自带一个minScrollY=40，拉完了手动回到顶部
				this.bs.scrollTo(0, 0, 300);
			});
			this.bs.on("scroll", (position) => {
				this.backtop_show = position.y < -564;
				this.isfixd = position.y < -this.taboffsettop;
			});
		},
	},
	beforeUpdate() {},
	components: {
		HomeSwiper,
		RecommendView,
		FeatureView,
		navbar,
		TabControl,
		scroll,
		GoodsList,
		BackTop,
	},
};
</script>

<style scoped>
#home {
	padding: 0.98rem 0 0.96rem 0;
}
.nav-bar {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 8;
}
.home_nav {
	background-color: var(--color-text);
	color: #fff;
}
.tab-control {
	/* position: sticky;
	top: 0.96rem; */
}
.content {
	position: relative;
	height: calc(100vh - 1.94rem);
	overflow: hidden;
}
.fixd {
	position: fixed;
	left: 0;
	right: 0;
	top: 0.98rem;
	z-index: 9;
}
.tabControl_show {
	margin-bottom: 0.8rem;
}
</style>
