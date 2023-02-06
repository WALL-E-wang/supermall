<template>
	<div id="detall">
		<DetailNavBar></DetailNavBar>
		<DetailSwiper :topImages="topImages"></DetailSwiper>
		<detailbaseinfo :goods="goods"></detailbaseinfo>
		<shopInfo :shop="shop"></shopInfo>
		<!-- <DetailInfo :detailInfo="detailInfo"></DetailInfo> -->
		<DetailTable :datailParams="datailParams"></DetailTable>
	</div>
</template>
<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar.vue";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper.vue";
import detailbaseinfo from "@/views/detail/childComps/detailbaseinfo.vue";
import shopInfo from "@/views/detail/childComps/shopInfo.vue";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailTable from "./childComps/DetailTable.vue";
import { getdetail, Goods, Shop, GoodsParam } from "@/network/detail";
export default {
	name: "detail",
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			datailParams: {},
		};
	},
	created() {
		this.iid = this.$route.params.iid;
		getdetail(this.iid).then((res) => {
			//获取顶部图片的轮播数据
			console.log(res);
			const data = res.result;
			this.topImages = res.result.itemInfo.topImages;
			// console.log(this.topImages);
			//获取商品信息
			this.goods = new Goods(
				data.itemInfo,
				data.columns,
				data.shopInfo.services
			);
			//获取商店信息
			this.shop = new Shop(data.shopInfo);
			//获取商品图片信息
			this.detailInfo = data.detailInfo;
			//获取商品参数
			this.datailParams = new GoodsParam(
				data.itemParams.info,
				data.itemParams.rule
			);
			console.log(this.datailParams);
		});
	},
	mounted() {},
	components: {
		DetailNavBar,
		DetailSwiper,
		detailbaseinfo,
		shopInfo,
		DetailInfo,
		DetailTable,
	},
};
</script>
<style>
#detall {
	background: #fff;
	z-index: 999;
	position: relative;
	padding-top: 0.98rem;
	height: calc(100vh - 0.98rem);
	overflow-y: auto;
}
.nav-bar {
	position: fixed;
	left: 0;
	right: 0;
	background: #fff;
	top: 0;
	z-index: 99;
}
</style>