<template>
  <div id="detall">
    <DetailNavBar @titleClick="titClick"></DetailNavBar>
    <scroll @scroll="scroll_jianting" ref="wrapperDetail" class="contentDetail">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <shopInfo :shop="shop"></shopInfo>
      <DetailInfo :detailInfo="detailInfo"></DetailInfo>
      <DetailTable ref="params" :datailParams="datailParams"></DetailTable>
      <DetailComment
        ref="recommend"
        :detailComment="detailComment"
      ></DetailComment>
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar.vue";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper.vue";
import detailbaseinfo from "@/views/detail/childComps/detailbaseinfo.vue";
import shopInfo from "@/views/detail/childComps/shopInfo.vue";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailTable from "./childComps/DetailTable.vue";
import DetailComment from "@/views/detail/childComps/DetailComment.vue";
import { getdetail, Goods, Shop, GoodsParam } from "@/network/detail";
import scroll from "@/components/common/scroll/Scroll.vue";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      datailParams: {},
      detailComment: {},
      bs: {},
      themeTopYs: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getdetail(this.iid).then((res) => {
      //获取顶部图片的轮播数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      // console.log(this.topImages);
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商店信息
      this.shop = new Shop(data.shopInfo);
      //获取商品图片信息
      this.detailInfo = data.detailInfo;
      //获取商品参数
      this.datailParams = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论
      if (data.rate.cRate !== 0) {
        this.detailComment = data.rate.list[0];
        console.log(this.detailComment);
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          console.log(this.themeTopYs);
        }, 1000);
      });
    });
  },
  mounted() {
    this.initBscroll();
  },

  methods: {
    initBscroll() {
      this.bs = this.$refs.wrapperDetail.bs;
      this.bs.on("pullingDown", () => {
        this.bs.finishPullDown();
        //这插件自带一个minScrollY=40，拉完了手动回到顶部
        this.bs.scrollTo(0, 0, 300);
      });
    },
    titClick(index) {
      this.bs.scrollTo(0, -this.themeTopYs[index], 600);
    },
    scroll_jianting(position) {
      const positionY = -position.y;
      for (let i in this.themeTopYs) {
        if (
          positionY > this.themeTopYs[parseInt(i)] &&
          positionY < this.themeTopYs[parseInt(i) + 1]
        ) {
          console.log(i);
        } else {
        }
      }
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    detailbaseinfo,
    shopInfo,
    DetailInfo,
    DetailTable,
    DetailComment,
    scroll,
  },
};
</script>
<style>
#detall {
  background: #fff;
  z-index: 999;
  position: relative;
  padding-top: 0.98rem;
  height: calc(100vh - 0.98rem);
  overflow-y: auto;
}
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
  top: 0;
  z-index: 99;
}
.contentDetail {
  position: relative;
  height: calc(100vh - 0.98rem);
  overflow: hidden;
}
</style>
