<template>
  <div id="detail">
    <detail-navbar />
    <detail-swiper :topImages="topImage" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailInfo" />
  </div>
</template>

<script>
import DetailNavbar from "./childComps/DetailNavbar.vue";
import detailSwiper from "./childComps/DetailSwiper.vue";
import { getDetail, GoodsInfo, Shop } from "../../network/detail";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
export default {
  components: {
    DetailNavbar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo
  },

  name: "detail",
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImage = res.result.itemInfo.topImages;
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
    });
  }
};
</script>

<style scoped></style>
