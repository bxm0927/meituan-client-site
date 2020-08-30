/*
 * home page store
 * @Author: xiaoming.bai
 * @Date: 2020-08-29 21:24:32
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-08-30 11:36:13
 */

export const state = () => ({
  categories: [], // 分类菜单
  hotFilms: [], // 猫眼电影 正在热映
  comingFilms: [], // 猫眼电影 即将上映
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setHotFilms(state, hotFilms) {
    state.hotFilms = hotFilms
  },
  setComingFilms(state, comingFilms) {
    state.comingFilms = comingFilms
  },
}