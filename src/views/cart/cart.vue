<template>
	<div>购物车1</div>
	<echarts
		:datax="datax"
		:datay="datay"
		style="width: 100%; height: 500px"
	></echarts>
	<echarts :datay="datay" style="width: 100%; height: 300px"></echarts>
</template>

<script>
import echarts from "@/components/common/echarts/echarts.vue";
export default {
	name: "cart",
	data() {
		return {
			datax: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			datay: [5, 20, 36, 10, 10, 20],
		};
	},
	components: {
		echarts,
	},
};
</script>

