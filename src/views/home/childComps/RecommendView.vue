<template>
  <div class="recommend">
    <a :key="i" v-for="(item, i) in recommends" :href="item.link">
      <img :src="item.image" alt="" />
      <div class="recommend_tit">{{ item.title }}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  data() {
    return {
      ceshi: "测试",
    };
  },
  props: {
    recommends: {
      type: Array,
      dafault() {
        return [];
      },
    },
  },
  mounted() {},
};
</script>
<style>
.recommend {
  display: flex;
  border-bottom: 0.2rem solid #eee;
}
.recommend > a {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem 0;
}
.recommend > a > img {
  width: 1.2rem;
  margin-bottom: 0.1rem;
}
.recommend > a > .recommend_tit {
  font-size: 0.28rem;
}
</style>
