<template>
  <div class="search-panel search-history">
    <div class="header">
      <span class="title">最近搜索</span>
      <span class="clean fr" @click="cleanSearchHistory">删除搜索历史</span>
    </div>

    <ul>
      <li v-for="item in searchHistory" :key="item.id" class="search-history-item">
        <a href="#">{{ item.name + item.id }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    searchHistory: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 删除搜索历史
    cleanSearchHistory() {},
  },
}
</script>

<style lang="scss" scoped>
.search-history {
  padding: 10px;
  .header {
    margin-bottom: 6px;
  }
  .title {
    font-weight: bold;
  }
  .clean {
    cursor: pointer;
  }
  .search-history-item {
    display: inline-block;
    margin-right: 10px;
    color: #666;
    line-height: 2;
  }
}
</style>
