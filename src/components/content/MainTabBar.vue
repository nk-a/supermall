<template>
  <tabbar>
    <tabbarItem path="/home" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/线性爆竹.svg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/线性饺子.svg" />
      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/category" activeColor="brown">
      <img slot="item-icon" src="../../assets/img/tabbar/线性红包.svg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/线性气球.svg" />
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart">
      <img slot="item-icon" src="../../assets/img/tabbar/线性葫芦.svg" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/线性糖葫芦.svg"
      />
      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile" activeColor="green">
      <img slot="item-icon" src="../../assets/img/tabbar/线性酒坛.svg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/线性汤圆.svg" />
      <div slot="item-text">我的</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
import tabbar from "../common/tabbar/tabbar";
import tabbarItem from "../common/tabbar/tabbatItem";
export default {
  name: "MainTabbar",
  components: { tabbar, tabbarItem }
};
</script>
<style scoped></style>
