<template>
	<div id="detall">
		<DetailNavBar></DetailNavBar>
		<DetailSwiper :topImages="topImages"></DetailSwiper>
		<detailbaseinfo :goods = "goods"></detailbaseinfo>
		<shopInfo :shop ="shop"></shopInfo>
	</div>
</template>
<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar.vue";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper.vue";
import detailbaseinfo from "@/views/detail/childComps/detailbaseinfo.vue";
import shopInfo from "@/views/detail/childComps/shopInfo.vue";
import { getdetail,Goods,Shop} from "@/network/detail";
export default {
	name: "detail",
	data() {
		return {
			iid: null,
			topImages: [],
			goods:{},
			shop:{}
		};
	},
	created() {
		this.iid = this.$route.params.iid;
		getdetail(this.iid).then((res) => {
			//获取顶部图片的轮播数据
      console.log(res);
			const data = res.result
			this.topImages = res.result.itemInfo.topImages;
			// console.log(this.topImages);
			//获取商品信息
			this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			//获取商店信息
			this.shop = new Shop(data.shopInfo)
		});

	},
	components: {
		DetailNavBar,
		DetailSwiper,
		detailbaseinfo,
		shopInfo
	},
};
</script>
<style>
</style>