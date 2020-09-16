<!-- 热门搜索词 -->

<template>
  <ul v-if="topsearches" class="search-hotword">
    <li v-for="item in topsearches.slice(0, 5)" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('modules/home', ['topsearches']),
  },
}
</script>

<style lang="scss" scoped>
.search-hotword {
  width: 550px;
  margin-top: 8px;
  margin-left: 15px;
  font-size: 12px;

  li {
    display: inline-block;
    margin-right: 8px;
    &:hover {
      color: #fe8c00;
      cursor: pointer;
    }
  }
}
</style>
