<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{ goods.title }}</div>
    <div class="price-wrap">
      <div class="new-price">{{ goods.newPrice }}</div>
      <div class="old-price">{{ goods.oldPrice }}</div>
      <div class="discount-desc">{{ goods.discount }}</div>
    </div>
    <div class="info">
      <div class="columns">{{ goods.columns[0] }}</div>
      <div class="columns">{{ goods.columns[1] }}</div>
      <div class="columns">
        {{ goods.services[goods.services.length - 1].name }}
      </div>
    </div>
    <div class="service-wrap">
      <div v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        {{ goods.services[index - 1].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.title {
  margin: 10px 0;
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
}
.price-wrap {
  display: flex;
  padding: 0 4px 10px;
}
.new-price {
  color: var(--color-high-text);
}
.discount-desc {
  color: #fff;
  font-size: 12px;
  border-radius: 100px;
  padding: 2px 6px;
  background-color: var(--color-high-text);
}
.old-price {
  color: #999;
  font-size: 12px;
  margin: 0 4px;
  text-decoration: line-through;
}
.info {
  display: flex;
  color: #999;
  font-size: 12px;
  padding: 10px 4px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
}
.info .columns {
  flex: 1;
}
.service-wrap {
  display: flex;
  font-size: 12px;
  color: #333;
  padding: 10px 4px;
  justify-content: space-between;
  border-bottom: 4px solid #ededed;
}
.service-wrap img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
</style>
