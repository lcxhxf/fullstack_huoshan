<template>
  <div class="home">
    <div class="header">
      <div class="type-wrap" @click="toggle">
        <span class="title">{{ currentSelect.name || '全部类型' }}</span>
        <i class="iconfont leixing" />
      </div>
      <div class="data-wrap">
        <span class="time" @click="monthToggle">{{ currentTime }} <i class="iconfont sort-down" /></span>
        <span class="expense">总支出 ¥{{ totalExpense }}</span>
        <span class="income">总收入 ¥{{ totalIncome }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
  setup() {
    const state = reactive({
      currentSelect: {},
      currentTime: '2021-10-23',
      totalExpense: 0,
      totalIncome: 0
    })

    const toggle = () => {

    }
    const monthToggle = () => {

    }

    return {
      ...toRefs(state),
      toggle,
      monthToggle
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../config/custom.less');

.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: @primary;
    color: #fff;
    font-size: 14px;
    padding: 20px 20px;
    z-index: 100;
    .type-wrap {
      background-color: #50ca84;
      display: inline-block;
      padding: 6px;
      border-radius: 4px;
      position: relative;
      align-self: baseline;
      .title {
        margin-right: 22px;
      }
      .title::after {
        content: '';
        position: absolute;
        top: 12px;
        bottom: 11px;
        right: 32px;
        width: 1px;
        background-color: #e9e9e9;
      }
    }
    .data-wrap {
      margin-top: 10px;
      font-size: 13px;
      .time {
        margin-right: 12px;
        .sort-down {
          font-size: 12px;
        }
      }
      .expense {
        margin-right: 10px;
      }
    }
  }
  .content-wrap {
    height: calc(~"(100% - 50px)");
    overflow: hidden;
    overflow-y: scroll;
    background-color: #f5f5f5;
    padding: 10px;
    // padding-bottom: 50px;
  }
  .add {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    color: @primary;
  }
}
</style>
