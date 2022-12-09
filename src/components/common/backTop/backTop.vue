<template>
	<div @click="backtop" class="backTop">
		<img v-show="back_topshow" src="@/assets/img/back-top.png" alt="" />
	</div>
</template>
<script>
export default {
	name: "backTop",
  computed: {
    back_topshow(){
      return true
    }
  },
  methods:{
    backtop(){
      this.$emit("backtop")
    }
  }
};
</script>
<style scoped>
.backTop {
	position: fixed;
	right: 0.2rem;
	bottom: 1rem;
	z-index: 3;
}
.backTop > img {
	width: 1rem;
}
</style>>
