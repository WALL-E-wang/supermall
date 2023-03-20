<template>
  <div @click="item_click">
    <img @load="onload" :src="showimg" alt="" />
    <h3>{{ goodsItem.title }}</h3>
    <div class="info_goods">
      <b>￥{{ goodsItem.price }}</b>
      <i class="collect"></i>
      <span class="clloct">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/common/utils";
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {},
  computed: {
    showimg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    item_click() {
      console.log("跳转详情页");
      this.$router.push("/detail" + this.goodsItem.iid);
    },
    onload() {
      this.$emit("sencountjiajia");
      //   if (++this.curr === this.goodsItemNum) {
      //     console.log("加载成功了");
      //   }
    }
  }
};
</script>
<style scoped>
.goods_item {
  width: 3.6rem;
  margin-bottom: 0.1rem;
}
.goods_item > img {
  display: block;
  width: 100%;
}
.goods_item > h3 {
  font-size: 0.24rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info_goods {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info_goods > b {
  font-size: 0.24rem;
  color: var(--color-text);
  margin: 0 0.2rem;
}
.info_goods > span {
  font-size: 0.24rem;
}
.collect {
  width: 0.2rem;
  height: 0.2rem;
  background: url(@/assets/img/detail/icon03.png);
  background-size: 0.2rem 0.2rem;
}
.collect_action {
}
</style>
