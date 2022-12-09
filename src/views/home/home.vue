<template>
	<div id="home">
		<navbar>
			<template #center> <div class="home_nav">购物街</div> </template>
		</navbar>
		<scroll ref="wrapper" class="content" :probeType="0">
			<HomeSwiper :banner="banner"></HomeSwiper>
			<RecommendView :recommends="recommends"></RecommendView>
			<FeatureView></FeatureView>
			<tabControl
				@tabclick="tabclick"
				class="tab-control"
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
		};
	},
	mounted() {
		this.bs = this.$refs.wrapper.bs;
		this.bs.on("pullingUp", () => {
			console.log("上拉执行刷新2");
			
		 this.getHomeGoos(this.currentType)
		});
		this.bs.on("scroll", (position) => {
			if (position.y < -500) {
				this.backtop_show = true;
			} else {
				this.backtop_show = false;
			}
		});
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
	},
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
</style>
