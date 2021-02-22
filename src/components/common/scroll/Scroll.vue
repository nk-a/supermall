<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  // this.scroll = new BScroll(this.$refs.wrapper, {
  //   probeType: 3,
  //   // click: true,
  //   pullUpLoad: true
  // });console.log("--------");
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     click: true,
    //     probeType: 3
    //   });
    // });
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // console.log("aaa");
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped></style>
