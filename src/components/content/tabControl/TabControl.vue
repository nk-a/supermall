<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(title, index) in titles"
      :class="{ isActive: currentIndex == index }"
      :key="title.index"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContorl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  data() {
    return { currentIndex: 0 };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.isActive {
  color: var(--color-high-text);
}
.isActive span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
