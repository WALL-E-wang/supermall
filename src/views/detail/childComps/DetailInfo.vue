<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailinfo_wrap">
    <div class="detailinfo_tit_warp">
      <div class="detailinfo_tit">
        {{ detailInfo.desc }}
      </div>
      <div class="detailinfo_subtit">
        {{ detailInfo.detailImage[0].key }}
      </div>
    </div>
  </div>
  <div v-if="detailInfo.detailImage" class="detail_imglist">
    <img @load="onload" :key="item" v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" />
  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      count: 0,
      listNum: 0
    };
  },
  watch: {
    detailInfo(val) {
      this.listNum = val.detailImage[0].list.length;
    }
  },
  mounted() {},
  methods: {
    onload() {
      this.count++;
      if (this.count == this.listNum) {
        this.$emit("detailInfoSuccess");
      }
    }
  }
};
</script>
<style scoped>
.detailinfo_wrap {
  padding: 0.2rem;
}
.detailinfo_tit,
.detailinfo_subtit {
  font-size: 0.32rem;
  margin-bottom: 0.15rem;
}
.detail_imglist img {
  display: block;
  width: 100%;
  margin-bottom: 0.1rem;
}
</style>
