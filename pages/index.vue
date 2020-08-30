<template>
  <main class="page page-index">
    <div class="container">
      <Banner />
      <Film />
      <Homestay />
      <Recommend />
      <BottomNav />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/home/Banner.vue'
import Film from '@/components/home/Film.vue'
import Homestay from '@/components/home/Homestay.vue'
import Recommend from '@/components/home/Recommend.vue'
import BottomNav from '@/components/home/BottomNav.vue'

export default {
  layout: 'main',
  components: {
    Banner,
    Film,
    Homestay,
    Recommend,
    BottomNav,
  },
  async fetch({ $axios, store }) {
    const [categories, hotFilms, comingFilms, recommends] = await Promise.all([
      $axios.$get('/mock/categories.json'),
      $axios.$get('/mock/hotFilms.json'),
      $axios.$get('/mock/comingFilms.json'),
      $axios.$get('/mock/recommends.json'),
    ])

    store.commit('modules/home/setCategories', categories.data)
    store.commit('modules/home/setHotFilms', hotFilms.data.hot)
    store.commit('modules/home/setComingFilms', comingFilms.data.coming)
    store.commit('modules/home/setRecommends', recommends)
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
