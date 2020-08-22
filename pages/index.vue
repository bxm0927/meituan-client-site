<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">meituan-client-site</h1>
      <h2 class="subtitle">IP: {{ ip }}</h2>
      <h3 class="subtitle">usersList: {{ usersList.map((i) => i.name).join(', ') }}</h3>

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo.vue'

export default {
  layout: 'main',
  components: {
    Logo,
  },
  async fetch({ $axios, store }) {
    const ip = await $axios.$get('http://icanhazip.com')
    store.commit('setIp', ip)
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get('/api/users/list')
    return { usersList: data }
  },
  computed: {
    ...mapState(['ip']),
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-weight: 300;
  font-size: 100px;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  font-weight: 300;
  font-size: 28px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
