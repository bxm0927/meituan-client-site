<template>
  <header class="header-wrapper">
    <Logo />
    <Search />
  </header>
</template>

<script>
import Logo from '@/components/common/header/logo.vue'
import Search from '@/components/common/header/search.vue'

export default {
  components: {
    Logo,
    Search,
  },
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  background-color: #fff;
}
</style>
