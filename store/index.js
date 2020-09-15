export const state = () => ({
  poi: null,
  userInfo: null,
})

export const mutations = {
  setPoi(state, poi) {
    state.poi = poi
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const [poi, userInfo] = await Promise.all([
      $axios.$get('/api/geo/poi'), // 城市定位
      $axios.$get('/api/users/info'), // 已登录用户的信息
    ])

    commit('setPoi', poi.data)
    commit('setUserInfo', userInfo.data)
  },
}
