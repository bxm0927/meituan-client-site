<template>
  <div class="topbar-wrapper container clearfix">
    <City />
    <User />
    <Nav />
  </div>
</template>

<script>
import City from '@/components/common/topbar/city.vue'
import User from '@/components/common/topbar/user.vue'
import Nav from '@/components/common/topbar/nav.vue'

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
  background: #f8f8f8;

  /deep/ a {
    color: #999;
    &:hover {
      color: #fe8c00;
    }
  }
}
</style>
