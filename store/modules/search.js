export const state = () => ({
  title: 'search store',
})

export const mutations = {
  setTitle(state, title) {
    state.title = title
  },
}
