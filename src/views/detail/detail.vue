<template>
  <div id="detall">
    <DetailNavBar ref="NavBar" @titleClick="titleClick"></DetailNavBar>
    <scroll @scroll="contentScroll" ref="wrapperDetail" class="contentDetail">
      <!--商品顶部滑动图片-->
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <!--商品销量收藏退换货-->
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <!--商品信息-->
      <shopInfo ref="shop" :shop="shop"></shopInfo>
      <!--穿着效果-->
      <DetailInfo @detailInfoSuccess="detailInfoSuccess" :detailInfo="detailInfo" class="card-panel-num"></DetailInfo>
      <DetailTable ref="parame" :datailParams="datailParams"></DetailTable>
      <!--推荐-->
      <DetailComment ref="comment" :detailComment="detailComment"></DetailComment>
      <GoodsList @jiajiaOver="jiajiaOver" ref="rerommends" :goods="rerommends"></GoodsList>
      <!--底部工具栏-->
    </scroll>
    <BottomBar></BottomBar>
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
import GoodsList from "@/components/content/goos/GoodsList.vue";
import BottomBar from "@/views/detail/childComps/DetailBottomBar.vue";
import { getdetail, Goods, Shop, GoodsParam, getRecommend } from "@/network/detail";
import scroll from "@/components/common/scroll/Scroll.vue";
import { number } from "echarts";
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
      rerommends: [],
      scrollListY: [],
      currentIndex: "", //顶部tab的index
      detailState: false, //试穿详情加载状态
      goodListState: false //商品详情加载状态
    };
  },
  created() {
    //1获取iid
    this.iid = this.$route.params.iid;
    //2获取详情数据
    getdetail(this.iid).then((res) => {
      //获取顶部图片的轮播数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      // console.log(this.topImages);
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //获取商店信息
      this.shop = new Shop(data.shopInfo);
      //获取商品图片信息
      this.detailInfo = data.detailInfo;
      //获取商品参数
      this.datailParams = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      //获取评论
      if (data.rate.cRate !== 0) {
        this.detailComment = data.rate.list[0];
      }
    });
    //3获取推荐数据
    getRecommend().then((res) => {
      this.rerommends = res.data.list;
      console.log(res);
    });
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    //推荐列表加载完了调用
    jiajiaOver() {
      console.log("推荐列表加载完了调用");
      this.goodListState = true;
      this.onloadSuccess();
    },
    //穿着效果加载完了调用
    detailInfoSuccess() {
      console.log("穿着效果加载完了调用");
      this.detailState = true;
      this.onloadSuccess();
    },
    //都加载完了调用
    onloadSuccess() {
      if (this.goodListState && this.detailState) {
        console.log("都加载完了");
        this.$nextTick(() => {
          //给数组追加tab栏目的滚动数值
          this.scrollListY.push(this.$refs.shop.$el.offsetTop);
          this.scrollListY.push(this.$refs.parame.$el.offsetTop);
          this.scrollListY.push(this.$refs.comment.$el.offsetTop);
          this.scrollListY.push(this.$refs.rerommends.$el.offsetTop);
          this.scrollListY.push(Number.MAX_VALUE);
        });
      }
    },
    initBscroll() {
      this.bs = this.$refs.wrapperDetail.bs;
      this.bs.on("pullingDown", () => {
        this.bs.finishPullDown();
        //这插件自带一个minScrollY=40，拉完了手动回到顶部
        this.bs.scrollTo(0, 0, 300);
      });
    },
    //顶部点击
    titleClick(index) {
      this.bs.scrollTo(0, -this.scrollListY[index], 1000);
    },
    contentScroll(position) {
      let scrollY = -position;
      let length = this.scrollListY.length;
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex != i && scrollY >= this.scrollListY[i] && scrollY < this.scrollListY[i + 1]) {
          this.currentIndex = i;
          this.$refs.NavBar.currentIndex = this.currentIndex;
        }
      }
    }
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
    GoodsList,
    BottomBar
  }
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
