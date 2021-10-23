<template>
  <router-view></router-view>
  <NavBar />
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
  setup() {},
};
</script>
<style lang="less">
</style>
