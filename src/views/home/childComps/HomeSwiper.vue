<template>
  <swiper>
    <swiperItem v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  name: "home",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped></style>
