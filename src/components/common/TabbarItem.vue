<template>
  <div @click="item_click" class="tab_bar_item">
      <slot v-if="!isActice" name="icon"></slot>
      <slot v-else name="action_icon"></slot>
    <div :style='isaction'><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props:{
    path:String,
    active_color:{
      type:String,
      default:"red",
    }
  },
  methods:{
    item_click(){
       this.$router.push(this.path); 
       console.log(this.$route.path.indexOf(this.path))
    }
  },
  computed:{
    isActice(){
        return this.$route.path.indexOf(this.path)!==-1
    },
    isaction(){
      return this.isActice ?{color:this.active_color}:{}
    }
  }
};
</script>
<style>
.tab_bar_item {
  display: flex;
  flex: 1;
  height: 0.96rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tab_bar_item img {
  width: 0.4rem;
}
.tab_bar_item p {
  font-size: 0.28rem;
}
</style>
