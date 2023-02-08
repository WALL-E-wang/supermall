<template>
	<div>
		<router-view v-slot="{ Component }">
			<keep-alive exclude="detail">
				<component :is="Component" />
			</keep-alive>
		</router-view>
		<main-tab-bar v-if="showNav"></main-tab-bar>
	</div>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar.vue";

export default {
	name: "App",
	components: {
		MainTabBar,
	},
	data() {
		return {
			showNav: true,
		};
	},
	mounted() {},
};
</script>

<style>
@import "assets/css/base.css";
@import "https://at.alicdn.com/t/c/font_990287_k0utwvbx3j.css";
</style>
