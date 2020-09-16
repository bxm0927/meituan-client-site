<template>
  <ul class="search-panel search-result">
    <li v-for="item in searchResult" :key="item.id" class="item">
      <a href="#" class="link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    searchResult: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  display: block;
  padding: 4px 10px;
  color: #333;
  &:hover {
    color: #fe8c00;
    background-color: #f8f8f8;
  }
}
</style>
