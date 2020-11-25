<template>
  <div class="container">
    <div class="bar">
      <wxc-icon class="icon" size="medium" name="success"></wxc-icon>
      <text class="bar-text">首页</text>
    </div>
    <div class="bar">
      <wxc-icon class="icon" size="medium" name="success"></wxc-icon>
      <text class="bar-text">首页</text>
    </div>
    <div class="bar">
      <wxc-icon class="icon" size="medium" name="success"></wxc-icon>
      <text class="bar-text">首页</text>
    </div>
    <div class="bar">
      <wxc-icon class="icon" size="medium" name="success"></wxc-icon>
      <text class="bar-text">设置</text>
    </div>
  </div>
</template>

<script>
import { WxcIcon } from 'weex-ui';

export default {
  components: { WxcIcon },
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
  .container {
    width: 750px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
  }
  .bar {
    flex-flow: column nowrap;
    align-items: center;
    color: #424242;
    font-size: 30px;
    padding: 30px;
  }
  .bar-text {
    margin-top: 10px;
    font-size: 30px;
    color: #424242;
  }
  .icon {
    }
</style>

