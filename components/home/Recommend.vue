<template>
  <section class="recommend-wrapper">
    <div class="recommend-header">
      <ul class="clearfix">
        <li class="nav-item fl title mf-shang-hei-regular">猜你喜欢</li>
        <li class="nav-item active fl">为你甄选最适合的</li>
      </ul>
    </div>

    <div class="recommend-content">
      <ul class="recommend-list clearfix">
        <RecommendItem v-for="item in recommends" :key="item.itemId" :data="item" />
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import RecommendItem from './RecommendItem.vue'

export default {
  components: {
    RecommendItem,
  },
  computed: {
    ...mapState('modules/home', ['recommends']),
  },
}
</script>

<style lang="scss" scoped>
.recommend-wrapper {
  margin-top: 40px;
}

.recommend-header {
  box-sizing: border-box;
  height: 44px;
  padding: 0 12px;
  color: #fff;
  font-size: 14px;
  line-height: 44px;
  background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%)
    rgb(88, 174, 221);
  border-radius: 5px 5px 0 0;
  .nav-item {
    position: relative;
    padding: 0 5px;
    cursor: pointer;
    &.title {
      margin-right: 10px;
      font-size: 18px;
      cursor: default;
    }
    &.active::after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      height: 0;
      margin: auto;
      border-right: 5px solid transparent;
      border-bottom: 7px solid #fff;
      border-left: 5px solid transparent;
      content: ' ';
    }
  }
}

.recommend-content {
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-top: 0;
  border-radius: 0 0 5px 5px;
}

// .recommend-list {
// }
</style>
