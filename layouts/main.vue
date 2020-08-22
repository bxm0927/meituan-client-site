<template>
  <div class="layout-main">
    <Topbar />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/common/topbar/index.vue'
import Header from '@/components/common/header/index.vue'
import Footer from '@/components/common/footer/index.vue'

export default {
  components: {
    Topbar,
    Header,
    Footer,
  },
}
</script>
