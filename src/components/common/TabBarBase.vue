<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarBase",
};
</script>
<style>
#tab-bar {
  display: flex;
  font-size: 0.32rem;
  background: #dedede;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  box-shadow: 0px -3px 1px rgba("100,100,100,0.8");
  justify-content: center;
}
</style>
