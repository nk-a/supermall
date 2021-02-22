<template>
  <div id="app">
    <router-view />
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "./components/content/MainTabBar";
export default {
  name: "App",
  components: { MainTabbar }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
