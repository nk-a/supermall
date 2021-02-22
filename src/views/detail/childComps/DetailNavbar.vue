<template>
  <div id="detailNavbar">
    <navbar>
      <div slot="left" @click="backClick" class="back">
        <img src="../../../assets/img/fanhui.png" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in titles"
          :key="index"
          @click="titleClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/navbar/navbar.vue";
export default {
  name: "detailNavbar",
  components: { Navbar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      console.log("click");
    },
    backClick() {
      this.$router.back();
      console.log(this.titles);
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  width: 25px;
  height: 25px;
  margin-top: 13px;
}
</style>
