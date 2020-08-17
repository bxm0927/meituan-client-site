export const state = () => ({
  title: 'project title',
})

export const mutations = {
  setTitle(state, title) {
    state.title = title
  },
}
