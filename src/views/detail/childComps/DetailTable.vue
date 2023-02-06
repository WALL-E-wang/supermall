<template>
	<div v-if="Object.keys(datailParams).length !== 0">
		<table
			class="params_table"
			:key="index"
			v-for="(table, index) in datailParams.rule"
		>
			<tr v-for="(tr, indey) in table" :key="indey">
				<td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
			</tr>
		</table>
		<table class="params_table info_table">
			<tr :key="index" v-for="(table, index) in datailParams.info">
				<td>{{ table.key }}</td>
				<td>{{ table.value }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: "DetailTable",
	props: {
		datailParams: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	mounted() {
		console.log(this.datailParams);
	},
};
</script>
<style scoped>
.params_table {
	width: 100%;
}
.params_table tr {
	border-bottom: 1px solid #eee;
}
.params_table td {
	height: 0.8rem;
	text-align: center;
	font-size: 0.32rem;
}
.params_table tr td:first-child {
	width: 1.5rem;
}
.info_table tr td:nth-child(2) {
	color: var(--color-text);
}
</style>