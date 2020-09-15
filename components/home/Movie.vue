<!-- 首页 猫眼电影 -->

<template>
  <section class="movie-wrapper">
    <div class="movie-header">
      <ul class="clearfix">
        <li class="nav-item fl title mf-shang-hei-regular">猫眼电影</li>
        <li
          v-for="item in navItems"
          :key="item.id"
          class="nav-item fl"
          :class="{ active: item.id === activeNavItem }"
          @click="handelNavItemClick(item)"
        >
          {{ item.name }}
        </li>
        <li class="nav-item fr total">
          <a href="https://maoyan.com" class="all" target="_blank">全部</a>
        </li>
      </ul>
    </div>

    <div class="movie-content">
      <MovieSlides v-show="activeNavItem === 1" :slides="hotFilms" />
      <MovieSlides v-show="activeNavItem === 2" :slides="comingFilms" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MovieSlides from './MovieSlides.vue'

export default {
  components: {
    MovieSlides,
  },
  data() {
    return {
      activeNavItem: 1,
      navItems: [
        { id: 1, name: '正在热映' },
        { id: 2, name: '即将上映' },
      ],
    }
  },
  computed: {
    ...mapState('modules/home', ['hotFilms', 'comingFilms']),
  },
  methods: {
    handelNavItemClick(item) {
      if (item.id === this.activeNavItem) return
      this.activeNavItem = item.id
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-wrapper {
  margin-top: 40px;
}

.movie-header {
  box-sizing: border-box;
  height: 44px;
  padding: 0 12px;
  color: #fff;
  font-size: 14px;
  line-height: 44px;
  background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%)
    rgb(250, 60, 104);
  border-radius: 5px 5px 0 0;
  .nav-item {
    position: relative;
    padding: 0 5px;
    cursor: pointer;
    &.title {
      margin-right: 10px;
      font-size: 18px;
      cursor: default;
    }
    &.total .all {
      position: relative;
      display: inline-block;
      padding: 0 8px;
      color: #fff;
      &::after {
        position: absolute;
        top: 19px;
        right: 0;
        width: 5px;
        height: 5px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(45deg);
        content: ' ';
      }
      &:hover {
        font-weight: bold;
        &::after {
          border-top: 2px solid #fff;
          border-right: 2px solid #fff;
        }
      }
    }
    &.active::after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      height: 0;
      margin: auto;
      border-right: 5px solid transparent;
      border-bottom: 7px solid #fff;
      border-left: 5px solid transparent;
      content: ' ';
    }
  }
}

.movie-content {
  position: relative;
  box-sizing: border-box;
  height: 340px;
  padding: 20px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-top: 0;
  border-radius: 0 0 5px 5px;
}

.movie-content:hover {
  /deep/ .navigation .btn {
    opacity: 0.9;
  }
}
</style>
