<template>
  <div class="tab_control">
    <div
      :class="{ action_click: i === currentIndex }"
      :key="i"
      v-for="(item, i) in titles"
      class="tab_control_title"
      @click="tab_click(i)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
    tab_click(i){
      this.currentIndex =i
      this.$emit("tabclick",i)
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>
<style>
.tab_control {
  display: flex;
  background: #fff;
}
.tab_control_title {
  flex: 1;
  font-size: 0.32rem;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
}
.tab_control_title > span {
  padding: 0.1rem;
  border-bottom: 2px solid transparent;
}
.action_click {
  color: var(--color-high-text);
}
.action_click span {
  border-bottom: 2px solid var(--color-high-text);
}
.tab_fixd{
  position: fixed;
  left: 0;
  right: 0;
  top: 0.98rem;
}
</style>
