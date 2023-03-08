<template>
  <div>
    <navbar>
      <template #left>
        <i @click="back_nav" class="back_icon iconfont icon-xiangzuo"></i>
      </template>
      <template #center>
        <div class="title">
          <a
            @click="titclick(index)"
            :class="{ active: index === currentIndex }"
            :key="index"
            v-for="(item, index) in titles"
          >
            {{ item }}</a
          >
        </div>
      </template>
    </navbar>
  </div>
</template>
<script>
import navbar from "@/components/common/navbar/navbar.vue";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titclick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    back_nav() {
      this.$router.back();
    },
  },
  components: {
    navbar,
  },
};
</script>
<style scoped>
.title {
  display: flex;
  background: #fff;
}
.title > a {
  flex: 1;
}
.active {
  color: var(--color-text);
}
.back_icon {
  font-size: 0.48rem;
  margin-left: 0.2rem;
}
</style>
