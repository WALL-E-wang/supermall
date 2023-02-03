<template>
	<div>
			<router-view v-slot="{ Component }">
        <keep-alive exclude="detail">
          <component :is="Component" />
        </keep-alive>
      </router-view>
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar.vue";

export default {
	name: "App",
	components: {
		MainTabBar,
	},
};
</script>

<style>
@import "assets/css/base.css";
@import "https://at.alicdn.com/t/c/font_990287_k0utwvbx3j.css";
</style>
