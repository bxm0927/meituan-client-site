<!-- 首页 猫眼电影 电影卡片 -->

<template>
  <li class="slide-item">
    <a :href="`https://maoyan.com/films/${data.id}`" target="_blank" :title="data.videoName">
      <img class="film-img" :src="filmImg" :alt="data.videoName" />

      <img v-if="filmMark" :src="filmMark.pic" :alt="filmMark.name" class="film-mark" />

      <div class="film-info">
        <p v-if="data.mk" class="film-score">
          观众评分 <span>{{ data.mk }}</span>
        </p>
        <p v-else class="film-score">
          <span>{{ data.wish }}</span> 人想看
        </p>

        <p class="film-name ellipsis" :title="data.nm">{{ data.nm }}</p>

        <button v-if="data.preSale" class="btn buy-ticket" @click.stop.prevent="preSale">
          预售
        </button>
        <button v-else class="btn buy-ticket" @click.stop.prevent="buyTicket">购票</button>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    // 从接口获取的图片地址不能直接使用，需要格式化
    filmImg() {
      const PREFIX1 = 'http://p0.meituan.net/w.h'
      const PREFIX2 = 'https://p1.meituan.net'
      const PREFIX3 = 'http://p1.meituan.net/w.h'
      const PREFIX4 = 'https://p0.meituan.net'
      const SUFFIX = '@420w_600h_1e_1c'

      if (this.data.img.startsWith('http://p0')) {
        return this.data.img.replace(PREFIX1, PREFIX2) + SUFFIX
      }
      if (this.data.img.startsWith('http://p1')) {
        return this.data.img.replace(PREFIX3, PREFIX4) + SUFFIX
      }
      return this.data.img + SUFFIX
    },
    // 格式化电影标识
    // ["2D", "3D", "IMAX 2D", "IMAX 3D", "中国巨幕3D", "杜比影院 3D" ...]
    filmMark() {
      if (!this.ver) return null
      const vers = this.ver.split('/')

      if (vers.includes('IMAX 3D')) {
        return {
          name: 'IMAX 3D',
          pic: require('@/assets/images/common/imax3d.png'),
        }
      }
      if (vers.includes('IMAX 2D')) {
        return {
          name: 'IMAX 2D',
          pic: require('@/assets/images/common/imax.png'),
        }
      }
      if (vers.includes('3D')) {
        return {
          name: '3D',
          pic: require('@/assets/images/common/3d.png'),
        }
      }
      return null
    },
  },
  methods: {
    preSale() {
      console.log('预售')
    },
    buyTicket() {
      console.log('购票')
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-item {
  position: relative;
  display: inline-block;
  width: 210px;
  height: 300px;
  margin-right: 20px;
}

.film-img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.film-mark {
  position: absolute;
  top: 10px;
  left: -6px;
  width: auto;
  height: 20px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}

.film-info {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 42px 10px 0;
  // 渐变黑色透明遮罩
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 45, 55, 0.8) 99%);
  border-radius: 0 0 4px 4px;
  .film-score {
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    span {
      color: #fd9827;
      font-size: 16px;
    }
  }
  .film-name {
    width: 8em;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
  }
  .buy-ticket {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 2px 12px;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    background: #ff4949;
    border-radius: 100px;
  }
}
</style>
