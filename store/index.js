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
