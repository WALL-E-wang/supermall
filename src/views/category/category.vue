
<template>
	<scroll class="content">
		<ul class="con_ul">
			<TransitionGroup name="list">
				<li v-for="item in items" :key="item">
					{{ item }}
				</li>
			</TransitionGroup>
		</ul>

		<button @click="tianjia">添加</button>
		<button @click="yichu">移除</button>
	</scroll>
</template>

<script>
import scroll from "@/components/common/scroll/Scroll.vue";

export default {
	name: "Category",
	data() {
		return {
			lishow: Boolean,
			items: [1, 2, 3],
			num: 0,
		};
	},
	components: {
		scroll,
	},
	mounted() {
		this.num = this.items.length;
	},
	methods: {
		tianjia() {
			this.num++;
			this.items.push(this.num);
		},
		yichu() {
			this.items.shift();
		},
	},
};
</script>

<style scoped>
.content {
	height: calc(100vh - 0.96rem);
}
.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}
.list-move,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-active {
	transition: all 0.5s ease;
}

.list-leave-to {
	opacity: 0;
	transform: translateX(40px);
}
.list-enter-from {
	opacity: 0;
	transform: translateX(-40px);
}
.list-leave-active {
	position: absolute;
}
</style>