<template>
	<div v-if="Object.keys(goods).length !== 0" class="base-info">
		<div class="info_title">{{ goods.title }}</div>
		<div class="info_price">
			<b>{{ goods.newPrice }}</b>
			<span>{{ goods.oldPrice }}</span>
			<i>优惠价</i>
		</div>
		<div class="info_other">
			<span> {{ goods.columns[0] }}</span>
			<span> {{ goods.columns[1] }}</span>
			<span> {{ goods.services[goods.services.length - 1].name }}</span>
		</div>
		<div class="info_serves">
			<ul>
				<li :key="index" v-for="index in goods.services.length - 1">
					<img :src="goods.services[index - 1].icon" alt="" />
					<span>{{ goods.services[index - 1].name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "detailbaseinfo",
	props: {
		goods: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>
<style scoped>
.base-info {
	padding: 0.2rem;
}
.info_title {
	font-size: 0.32rem;
	margin-bottom: 0.15rem;
}
.info_price {
	display: flex;
	align-items: center;
  margin-bottom: 0.3rem;
}
.info_price > b {
	font-size: 0.4rem;
	color: var(--color-text);
	margin-right: 0.1rem;
}
.info_price > span {
	font-size: 0.28rem;
	color: rgb(139, 139, 139);
	text-decoration: line-through;
}
.info_price > i {
	font-size: 0.28rem;
	color: #fff;
	background: var(--color-text);
	margin-left: 0.15rem;
	border-radius: 0.1rem;
	padding: 0 0.1rem;
	margin-top: -0.2rem;
	display: block;
}
.info_other{
  font-size: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(219, 219, 219);
  padding-bottom: 0.2rem;
}
.info_other span {
	font-size: 0.28rem;
}
.info_serves>ul{
  display: flex;
  padding: 0.2rem 0;
}
.info_serves>ul>li{
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
}
.info_serves>ul>li>img{
  width: 0.3rem;
  margin-right: 0.1rem;
}
.info_serves>ul>li>span{
  font-size: 0.26rem;
  color: #333;
}
</style>