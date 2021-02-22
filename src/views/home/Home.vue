<template>
  <div class="home">
    <navbar class="home-nav"> <div slot="center">购物街</div> </navbar>
    <home-swiper :banners="banners" />
    <scroll class="content" ref="scroll">
      <recommend-view :recommend="recommend" />
      <featureview />
      <tab-control
        class="tabcontrol"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <good-list :goods="showGoods" />
    </scroll>
    <backtop @click.native="backClick" />
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/navbar.vue";
import { getHomeMultidata, getHomeGoods } from "../../network/Home.js";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import Featureview from "./childComps/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodList from "../../components/content/goods/GoodList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import backtop from "../../components/content/backtop/backtop";
export default {
  name: "home",
  components: {
    Navbar,
    HomeSwiper,
    RecommendView,
    Featureview,
    TabControl,
    GoodList,
    Scroll,
    backtop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  created() {
    //  request
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      // console.log("111");
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-text);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
  color: aliceblue;
}
.tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
}
</style>
