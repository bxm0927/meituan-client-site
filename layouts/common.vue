<template>
  <div class="layout-common">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header/index.vue'
import Footer from '@/components/common/footer/index.vue'

export default {
  name: 'Common',
  components: {
    Header,
    Footer,
  },
}
</script>
