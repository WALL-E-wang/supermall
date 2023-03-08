<template>
  <div v-if="Object.keys(detailComment).length !== 0" class="detailCommentWrap">
    <div class="detailComment_tit">
      <span>用户评价</span>
      <span>更多<i class="iconfont icon-jinru"></i></span>
    </div>
    <div class="detailComment_main">
      <div class="user_info">
        <img :src="detailComment.user.avatar" alt="" />
        <span>{{ detailComment.user.uname }}</span>
      </div>
      <div class="detailComment_main_text">
        {{ detailComment.content }}
      </div>
      <div class="detailCommentOther">
        <span>{{ showDate(detailComment.created) }}</span>
        <span>{{ detailComment.style }}</span>
      </div>
      <div class="info_images">
        <img
          :src="item"
          v-for="(item, index) in detailComment.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "@/common/utils";
export default {
  name: "DetailComment",
  props: {
    detailComment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
  computed: {},
  methods: {
    showDate(value) {
      //1将时间戳转换成date对象
      const date = new Date(value * 1000);
      //2将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh");
    },
  },
};
</script>
<style scoped>
.detailComment_tit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.98rem;
  margin: 0 0.25rem 0.1rem 0.25rem;
  border-bottom: 1px solid #dcdcdc;
}
.detailComment_tit > span {
  font-size: 0.34rem;
}
.detailComment_main {
  font-size: 0.28rem;
  color: #333;
  padding: 0.25rem;
}
.user_info {
  display: flex;
  align-items: center;
  padding: 0.15rem 0;
}
.user_info > img {
  width: 0.8rem;
  border-radius: 50%;
  margin-right: 0.2rem;
}
.user_info .span {
  font-size: 0.28rem;
  color: #333;
}
.detailComment_main_text {
  margin-bottom: 0.15rem;
}
.detailCommentOther > span {
  color: rgb(150, 150, 150);
  margin-right: 0.2rem;
}
.detailCommentOther {
  margin-bottom: 0.15rem;
}
.info_images > img {
  width: 2rem;
  margin-right: 0.15rem;
}
</style>
