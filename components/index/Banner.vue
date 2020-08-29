<template>
  <section class="banner-wrapper clearfix">
    <BannerCategory />

    <div class="right-banner fl">right-banner</div>
  </section>
</template>

<script>
import BannerCategory from './BannerCategory.vue'

export default {
  components: {
    BannerCategory,
  },
}
</script>

<style lang="scss" scoped>
.right-banner {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
