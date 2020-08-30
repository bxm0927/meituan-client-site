<!-- 首页 猫眼电影 滑块 -->

<template>
  <div class="hot-container">
    <!-- 电影滑块 -->
    <ul ref="slidesRef" class="slides">
      <FilmSlidesItem v-for="item in slides" :key="item.id" :data="item" />
    </ul>

    <!-- 翻页器 -->
    <div class="navigation">
      <button v-if="pageIndex !== 1" class="btn prev" @click="turnPage('prev')">
        <i class="iconfont icon-left" />
      </button>
      <button v-if="pageIndex !== pageCount" class="btn next" @click="turnPage('next')">
        <i class="iconfont icon-right" />
      </button>
    </div>

    <!-- 分页指示器 -->
    <ul class="pagination clearfix">
      <li
        v-for="item in pageCount"
        :key="item"
        class="pagination-item"
        :class="{ active: item === pageIndex }"
      />
    </ul>
  </div>
</template>

<script>
import FilmSlidesItem from './FilmSlidesItem.vue'

export default {
  components: {
    FilmSlidesItem,
  },
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 5,
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.slides.length / this.pageSize)
    },
  },
  methods: {
    // 翻页
    turnPage(type) {
      const slidesRef = this.$refs.slidesRef
      console.log('slidesRef: ', slidesRef)
      if (!slidesRef) return

      if (type === 'prev') {
        if (this.pageIndex === 1) return
        this.pageIndex--
      } else if (type === 'next') {
        if (this.pageIndex === this.pageCount) return
        this.pageIndex++
      }

      // 计算滑动距离
      const DISTANCE = 100 * (this.pageIndex - 1) // 滑动距离
      slidesRef.style.transform = `translate3d(-${DISTANCE}%, 0, 0)`
    },
  },
}
</script>

<style lang="scss" scoped>
.slides {
  white-space: nowrap;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease-in-out;
}

.navigation {
  .btn {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s linear;
    .iconfont {
      color: #fff;
      font-weight: 500;
      font-size: 18px;
    }
    &.prev {
      left: 0;
      .iconfont {
        margin-left: -4px;
      }
    }
    &.next {
      right: 0;
      .iconfont {
        margin-left: -2px;
      }
    }
    &:hover {
      .iconfont {
        font-weight: bold;
      }
    }
  }
}

.pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  .pagination-item {
    float: left;
    width: 15px;
    height: 2px;
    margin-right: 10px;
    background-color: rgba(51, 51, 51, 0.2);
    border-radius: 1px;
    transition: background-color 0.5s;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      background-color: rgba(51, 51, 51, 0.9);
    }
  }
}
</style>
