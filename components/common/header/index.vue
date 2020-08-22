<template>
  <header class="header-wrapper">
    <Topbar />
    <Searchbar />
    <Navbar />
  </header>
</template>

<script>
import Topbar from '@/components/common/header/topbar/index.vue'
import Searchbar from '@/components/common/header/searchbar/index.vue'
import Navbar from '@/components/common/header/searchbar/nav.vue'

export default {
  components: {
    Topbar,
    Searchbar,
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  background-color: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
</style>
