<template>
  <h1>{{ state.count }} * 2 = {{ double }}</h1>
  <h2>{{ num }}</h2>
  <button @click="add">累加</button>
</template>

<script>
import { reactive, computed, ref, onMounted } from 'vue'
export default {
  name: "App",
  setup() {
    const state = reactive({
      count: 1
    })
    const double = computed(() => state.count * 2)
    const num = ref(2)
    function add() {
      state.count++
      num.value += 1
      console.log(state.count);
    }
    onMounted(() => {
      console.log('onMounted');
    })
    return { state, double, add, num };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
