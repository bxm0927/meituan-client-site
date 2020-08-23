<template>
  <footer class="footer-wrapper">
    <div class="container">
      <Entrance />
      <Copyright />
    </div>
  </footer>
</template>

<script>
import Entrance from '@/components/common/footer/entrance.vue'
import Copyright from '@/components/common/footer/copyright.vue'

export default {
  components: {
    Entrance,
    Copyright,
  },
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  margin-top: 40px;
  background-color: #f8f8f8;
}
</style>
