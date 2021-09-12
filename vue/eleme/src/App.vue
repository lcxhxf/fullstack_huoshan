<template>
  <div class="demo">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import header from './components/header/header.vue';
const response = require('./common/data/seller.json')
export default {
  data() {
    return {
      count: 0,
      seller: response.data
    }
  },
  methods: {
    addCount() {
      this.count++
    } 
  },
  components: {
      'v-header':header
    }
}
</script>

<style lang="stylus">
@import './stylus/reset.styl'
.demo 
  font-size 30px
  color aqua

</style>
