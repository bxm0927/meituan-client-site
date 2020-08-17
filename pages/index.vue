<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">meituan-client-site</h1>
      <h2>IP: {{ ip }}</h2>

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
  components: {
    Logo,
  },
  async fetch({ $axios, store }) {
    const ip = await $axios.$get('http://icanhazip.com')
    store.commit('setIp', ip)
  },
  async asyncData({ $axios }) {
    const test = await $axios.$get('/api/users/list')
    return { test }
  },
  computed: {
    ...mapState(['ip']),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
