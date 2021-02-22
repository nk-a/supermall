<template>
  <swiper class="swiperItem">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  name: "detailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.swiperItem {
  height: 300px;
  overflow: hidden;
  width: 100%;
}
</style>
