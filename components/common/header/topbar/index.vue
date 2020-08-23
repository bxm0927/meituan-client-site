<template>
  <div class="topbar-wrapper">
    <div class="container clearfix">
      <City />
      <User />
      <Nav />
    </div>
  </div>
</template>

<script>
import City from '@/components/common/header/topbar/city.vue'
import User from '@/components/common/header/topbar/user.vue'
import Nav from '@/components/common/header/topbar/nav.vue'

export default {
  components: {
    City,
    User,
    Nav,
  },
}
</script>

<style lang="scss" scoped>
.topbar-wrapper {
  height: 40px;
  color: #999;
  font-size: 12px;
  background-color: #f8f8f8;

  /deep/ a {
    color: #999;
    &:hover {
      color: #fe8c00;
    }
  }
}
</style>
