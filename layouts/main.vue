<template>
  <div class="layout-main">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header/index.vue'
import Footer from '@/components/common/footer/index.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
