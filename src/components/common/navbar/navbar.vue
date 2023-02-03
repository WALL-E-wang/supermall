<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 0.98rem;
  line-height: 0.98rem;
  align-items: center;
  text-align: center;
  font-size: 0.36rem;
}
.nav-bar .left {
}
.center {
  flex: 1;
}
</style>
