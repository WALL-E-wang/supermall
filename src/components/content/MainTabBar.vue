<template>
  <div>
    <tab-bar-base>
      <TabbarItem path ="/home" active_color="red">
        <template #icon>
          <img src="@/assets/img/tabbar/index.png"/>
        </template>
        <template #action_icon>
          <img src="@/assets/img/tabbar/index_action.png"/>
        </template>
        <template #text>
          <p>首页</p>
        </template>
      </TabbarItem>
      <TabbarItem path ="/category">
        <template #icon>
          <img src="@/assets/img/tabbar/class.png"/>
        </template>
         <template #action_icon>
          <img src="@/assets/img/tabbar/class_action.png"/>
        </template>
        <template #text>
          <p>分类</p>
        </template>
      </TabbarItem>
       <TabbarItem path ="/cart">
        <template #icon>
          <img src="@/assets/img/tabbar/gouwu.png"/>
        </template>
         <template #action_icon>
          <img src="@/assets/img/tabbar/gouwu_action.png"/>
        </template>
        <template #text>
          <p>购物车</p>
        </template>
      </TabbarItem>
       <TabbarItem path ="/profile">
        <template #icon>
          <img src="@/assets/img/tabbar/index.png"/>
        </template>
         <template #action_icon>
          <img src="@/assets/img/tabbar/index_action.png"/>
        </template>
        <template #text>
          <p>我的</p>
        </template>
      </TabbarItem>
    </tab-bar-base>
  </div>
</template>
<script>
import TabBarBase from "@/components/common/TabBarBase.vue";
import TabbarItem from "@/components/common/TabbarItem.vue";
export default {
  components: {
    TabBarBase,
    TabbarItem,
  },
  name: "MainTabBar",
};
</script>
<style></style>
