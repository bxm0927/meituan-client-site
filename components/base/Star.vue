<!-- 评星组件 -->
<!-- TODO 评星组件需要优化，研究美团的评星组件是怎么实现的，支持 4.2 这种小数进度的展示 -->

<template>
  <ul class="star-list clearfix">
    <li v-for="item in scoreNum" :key="'full' + item" class="full">
      <i class="iconfont icon-star" />
    </li>
    <li v-for="item in 5 - scoreNum" :key="item">
      <i class="iconfont icon-star" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    score: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    scoreNum() {
      return Math.round(this.score)
    },
  },
}
</script>

<style lang="scss" scoped>
.star-list {
  display: inline-block;
  vertical-align: middle;
  li {
    float: left;
    color: #c3c3c3;
    &.full {
      color: #f29d38;
    }
  }
}
</style>
