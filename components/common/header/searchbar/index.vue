<template>
  <section class="searchbar-wrapper">
    <div class="container clearfix">
      <Logo />
      <Search />
    </div>
  </section>
</template>

<script>
import Logo from '@/components/common/header/searchbar/logo.vue'
import Search from '@/components/common/header/searchbar/search.vue'

export default {
  components: {
    Logo,
    Search,
  },
}
</script>

<style lang="scss" scoped>
.searchbar-wrapper {
  box-sizing: border-box;
  height: 120px;
  padding-top: 28px;
  color: #999;
  font-size: 12px;
  background-color: #fff;
}
</style>
