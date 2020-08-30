export const state = () => ({
  counter: 0,
  ip: '',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setIp(state, ip) {
    state.ip = ip
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    commit('setIp', ip)
  },
}
