<template>
  <div class="ListItem" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" />
    <p>{{ goodsItem.title }}</p>
    <span class="price">{{ goodsItem.price }}</span>
    <div class="collect-icon">
      <img src="../../../assets/img/home/collect_icon.png" alt="" />
      <span class="collect">{{ goodsItem.csav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>
<style scoped>
.ListItem {
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}
.ListItem img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.price {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
  color: var(--color-text);
}
.collect-icon img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
