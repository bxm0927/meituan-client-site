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
  computed: {
    ...mapState(['ip']),
  },
  async mounted() {
    const [categories, hotFilms, comingFilms, recommends] = await Promise.all([
      this.$axios.$get('/mock/categories.json'),
      this.$axios.$get('/mock/hotFilms.json'),
      this.$axios.$get('/mock/comingFilms.json'),
      this.$axios.$get('/mock/recommends.json'),
    ])

    this.$store.commit('modules/home/setCategories', categories.data)
    this.$store.commit('modules/home/setHotFilms', hotFilms.data.hot)
    this.$store.commit('modules/home/setComingFilms', comingFilms.data.coming)
    this.$store.commit('modules/home/setRecommends', recommends)

    const { data } = await this.$axios.$get('/api/users/list')
    console.log('data: ', data)
  },
}
</script>
