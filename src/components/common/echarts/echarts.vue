<template>
	<div id="ceshi" ref="chart"></div>
</template>
<script>
const echarts = require("echarts");
export default {
	name: "echarts",
	props: {
		datax: {
			type: Array,
		},
		datay: {
			type: Array,
		},
	},
	data() {
		return {
			mycart: {},
		};
	},
	methods: {
		initCharts() {
			let myChart = echarts.init(this.$refs.chart);
			//等价获取dom let myChart = echarts.init(document.getElementById("ceshi"));
			// 绘制图表
			myChart.setOption({
				title: { text: "在Vue中使用echarts" },
				tooltip: {},
				xAxis: {
					data: this.datax,
				},
				yAxis: {},
				series: [
					{
						name: "销量",
						type: "bar",
						data: this.datay,
					},
				],
			});
		},
	},
	mounted() {
		this.initCharts();
		console.log(this.datax);
		window.onresize = function () {
			myChart.resize();
		};
	},
};
</script>
<style scoped>
</style>