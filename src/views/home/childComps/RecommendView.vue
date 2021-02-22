<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 15px 0 30px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 65px;
  height: 68px;
  margin-bottom: 15px;
}
</style>
