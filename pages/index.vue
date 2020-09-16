<template>
  <main class="page">
    <div class="container">
      <Banner />
      <Movie />
      <Homestay />
      <Recommend />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/home/Banner.vue'
import Movie from '@/components/home/Movie.vue'
import Homestay from '@/components/home/Homestay.vue'
import Recommend from '@/components/home/Recommend.vue'

export default {
  layout: 'common',
  name: 'Home',
  components: {
    Banner,
    Movie,
    Homestay,
    Recommend,
  },
  async fetch({ $axios, store }) {
    const [menu, topsearches, hotFilms, comingFilms, minsuCitys, recommends] = await Promise.all([
      $axios.$get('/api/search/menu'),
      $axios.$get('/api/search/topsearches'),

      $axios.$get('/mock/hotFilms.json'),
      $axios.$get('/mock/comingFilms.json'),
      $axios.$get('/mock/minsuCitys.json'),
      $axios.$get('/mock/recommends.json'),
    ])

    store.commit('modules/home/setMenu', menu.data)
    store.commit('modules/home/setTopsearches', topsearches.data)
    store.commit('modules/home/setHotFilms', hotFilms.data.hot)
    store.commit('modules/home/setComingFilms', comingFilms.data.coming)
    store.commit('modules/home/setMinsuCitys', minsuCitys.cityList)
    store.commit('modules/home/setRecommends', recommends)
  },
}
</script>
