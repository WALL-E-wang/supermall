<template>
  <div class="goods">
    <goods-list-item @sencountjiajia="sencountjiajia" class="goods_item" :goodsItemNum="goodsItemNum" :key="i" v-for="(item, i) in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "@/components/content/goos/GoodsListItem.vue";
export default {
  components: { GoodsListItem },
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      counter: 0,
      goodsItemNum: 0
    };
  },
  watch: {
    goods: {
      handler(val) {
        this.goodsItemNum = val.length;
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    goodsItemNum() {
      return this.goods.length;
    }
  },
  mounted() {},
  methods: {
    sencountjiajia() {
      this.counter++;
      if (this.counter === this.goodsItemNum) {
        this.$emit("jiajiaOver");
      }
    }
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  padding: 0.1rem;
  background: #fff;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 0;
}
</style>
