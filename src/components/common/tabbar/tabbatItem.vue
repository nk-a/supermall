<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }" :style="activeColorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColorStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  cursor: pointer;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
}
</style>
