<template>
  <!-- 热门搜索词 -->
  <div class="search-hotword">
    <ul>
      <li v-for="item in searchHotword" :key="item.id" class="search-hotword-item">
        {{ item.name + item.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchHotword: [
        { id: 1, name: '热门搜索词' },
        { id: 2, name: '热门搜索词' },
        { id: 3, name: '热门搜索词' },
        { id: 4, name: '热门搜索词' },
        { id: 5, name: '热门搜索词' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.search-hotword {
  width: 550px;
  font-size: 12px;
  ul {
    margin-top: 8px;
    margin-left: 15px;
  }
  li {
    display: inline-block;
    margin-right: 8px;
  }
}
</style>
