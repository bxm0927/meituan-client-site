<template>
  <main class="page page-index">
    <Banner />
    <Movie />
    <Homestay />
    <Guess />
    <BottomNav />
    <!-- <h2 class="subtitle">IP: {{ ip }}</h2> -->
    <!-- <h3 class="subtitle">usersList: {{ usersList.map((i) => i.name).join(', ') }}</h3> -->
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/index/Banner.vue'
import Movie from '@/components/index/Movie.vue'
import Homestay from '@/components/index/Homestay.vue'
import Guess from '@/components/index/Guess.vue'
import BottomNav from '@/components/index/BottomNav.vue'

export default {
  layout: 'main',
  components: {
    Banner,
    Movie,
    Homestay,
    Guess,
    BottomNav,
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
