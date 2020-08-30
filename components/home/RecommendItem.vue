<template>
  <li class="recommend-item">
    <a
      :href="`https://www.meituan.com/meishi/${data.itemId}`"
      target="_blank"
      class="recommend-link"
    >
      <div class="picture">
        <img :src="picture" :alt="data.title" />
      </div>

      <div class="overview">
        <p class="title ellipsis" :title="data.title">{{ data.title }}</p>
        <div class="score-line">
          <Star :score="data.score" />
          <span class="comment">{{ data.commentNum }}个评价</span>
        </div>
        <p class="area">{{ data.areaName }}</p>
        <p class="price">
          <span class="unit">￥</span>
          <span class="num">{{ data.lowPrice }}</span>
          <span class="desc">起</span>
        </p>
      </div>
    </a>
  </li>
</template>

<script>
import Star from '@/components/base/Star.vue'

export default {
  components: {
    Star,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    // 从接口获取的图片地址不能直接使用，需要格式化
    picture() {
      const PREFIX1 = 'https://p0.meituan.net/w.h'
      const PREFIX2 = 'http://p0.meituan.net/w.h'
      const PREFIX3 = 'http://p1.meituan.net/w.h'
      const PREFIX4 = 'https://img.meituan.net/w.h'

      const PREFIX5 = 'https://p0.meituan.net'
      const PREFIX6 = 'https://p1.meituan.net'

      const SUFFIX = '@428w_240h_1e_1c'

      if (this.data.imgUrl.startsWith(PREFIX1)) {
        return this.data.imgUrl.replace(PREFIX1, PREFIX5) + SUFFIX
      }
      if (this.data.imgUrl.startsWith(PREFIX2)) {
        return this.data.imgUrl.replace(PREFIX2, PREFIX6) + SUFFIX
      }
      if (this.data.imgUrl.startsWith(PREFIX3)) {
        return this.data.imgUrl.replace(PREFIX3, PREFIX5) + SUFFIX
      }
      if (this.data.imgUrl.startsWith(PREFIX4)) {
        return this.data.imgUrl.replace(PREFIX4, PREFIX6) + SUFFIX
      }
      return this.data.imgUrl + SUFFIX
    },
  },
}
</script>
<style lang="scss" scoped>
.recommend-item {
  float: left;
  width: 20%;
}

.recommend-link {
  display: block;
  box-sizing: border-box;
  height: 246px; // 120 + 126
  padding: 10px;
  overflow: hidden;
  transition: all 0.3s;
  &:hover {
    border-radius: 4px;
    box-shadow: 0 2px 9px 0 rgba(93, 93, 93, 0.2);
    transform: translateY(-2px);
  }
}

.picture {
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}

.overview {
  padding-top: 10px;
  .title {
    height: 24px;
    color: #222;
    font-weight: 500;
    font-size: 16px;
  }
  .score-line {
    height: 24px;
    .comment {
      height: 24px;
      margin-left: 10px;
      color: #999;
      font-size: 12px;
    }
  }
  .area {
    height: 18px;
    color: #999;
    font-size: 12px;
  }
  .price {
    height: 30px;
    color: #f60;
    font-weight: 500;
    font-size: 0;
    .unit {
      font-size: 14px;
    }
    .num {
      font-size: 22px;
    }
    .desc {
      margin-left: 4px;
      font-size: 12px;
    }
  }
}
</style>
