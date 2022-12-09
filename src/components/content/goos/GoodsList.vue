<template>
  <div class="goods">
    <goods-list-item class="goods_item" :key="i" v-for="(item,i) in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from '@/components/content/goos/GoodsListItem.vue';
export default {
	components: { GoodsListItem },
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>
<style scoped>
.goods{
  display: flex;
  padding: 0.1rem;
  background: #fff;
  flex-wrap: wrap;
  justify-content:space-around;
  font-size: 0;
}

</style>
