<template>
	<div v-if="Object.keys(shop).length !== 0" class="shopinfo">
		<div class="shopinfo_tit">
			<img :src="shop.logo" alt="" />
			<span>{{ shop.name }}</span>
		</div>
		<div class="shopinfo_main">
			<div class="shopinfo_main_l">
				<div class="shopinfo_main_l_info">
					<div class="shopinfo_main_l_info_tit">
						{{ max_num(this.shop.fans) }}
					</div>
					<div>总销量</div>
				</div>
				<div class="shopinfo_main_l_info">
					<div class="shopinfo_main_l_info_tit">{{ max_num(shop.sells) }}</div>
					<div>全部宝贝</div>
				</div>
			</div>
			<div class="shopinfo_main_r">
				<ul>
					<li :key="item" v-for="item in shop.score">
						<span>{{ item.name }}</span>
						<b :class="{ red_color: item.isBetter }">{{ item.score }}</b>
						<span class="better" :class="{ better_more: item.isBetter }">{{
							item.isBetter ? "高" : "低"
						}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "shopInfo",
	props: {
		shop: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	computed: {},
	mounted() {},
	methods: {
		max_num(num) {
			if (num < 10000) {
				return num;
			}
			return (num / 10000).toFixed(1) + "万";
		},
	},
};
</script>
<style scoped>
.shopinfo {
	padding: 0.3rem;
}
.shopinfo_tit {
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
}
.shopinfo_tit > img {
	width: 0.8rem;
	margin-right: 0.15rem;
	border: 1px solid #dcdcdc;
	border-radius: 50%;
}
.shopinfo_tit > span {
	font-size: 0.32rem;
	color: rgb(170, 170, 170);
}
.shopinfo_main {
	display: flex;
	align-items: center;
	position: relative;
}
.shopinfo_main::after {
	position: absolute;
	content: "";
	width: 1px;
	height: 1rem;
	background: rgb(204, 204, 204);
	left: 50%;
	top: 50%;
	transform: translateY(-50%);
}
.shopinfo_main_l,
.shopinfo_main_r {
	display: flex;
	flex: 1;
	justify-content: center;
}
.shopinfo_main_l .shopinfo_main_l_info {
	font-size: 0.28rem;
	margin: 0 0.22rem;
	text-align: center;
}
.shopinfo_main_l_info_tit {
	margin-bottom: 0.15rem;
	font-size: 0.32rem;
}
.shopinfo_main_r ul > li {
	display: flex;
	font-size: 0.28rem;
	margin-bottom: 0.15rem;
}
.shopinfo_main_r ul > li > b {
	font-size: 0.26rem;
	margin: 0 0.15rem;
	color: green;
	flex: 1;
}
.shopinfo_main_r ul > li > .red_color {
	color: red;
}
.better {
	background: green;
	color: #fff;
}
.better_more {
	background: red;
}
</style>