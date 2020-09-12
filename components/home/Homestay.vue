<template>
  <section class="homestay-wrapper">
    <div class="recommend-header">
      <ul class="clearfix">
        <li class="nav-item fl title mf-shang-hei-regular">推荐民宿</li>

        <li
          v-for="item in minsuCitys"
          :key="item.cityId"
          class="nav-item fl"
          :class="{ active: item.cityId === activeNavItem }"
          @click="handelNavItemClick(item)"
        >
          {{ item.cityName }}
        </li>

        <li class="nav-item fr total">
          <a href="https://minsu.meituan.com" class="all" target="_blank">全部</a>
        </li>
      </ul>
    </div>

    <ul class="homestay-list clearfix">
      <li v-for="item in minsuData" :key="item.productId" class="homestay-item">
        <a href="#" target="_blank" class="homestay-link" :title="item.title">
          <div class="picture">
            <img class="img" :src="item.coverImage" :alt="item.title" />
          </div>
          <div class="overview">
            <p class="title ellipsis">
              {{ item.title }}
            </p>
            <p class="spec">
              整套{{ item.layoutRoom }}居室·可住{{ item.maxGuestNumber }}人 |
              {{ item.locationArea }}
            </p>
            <p class="price">
              <span class="icon">￥</span>
              {{ item.price }}
            </p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      activeNavItem: '',
      minsuData: [],
    }
  },
  computed: {
    ...mapState('modules/home', ['minsuCitys']),
  },
  mounted() {
    const defaultCityId = this.minsuCitys[0].cityId
    this.activeNavItem = defaultCityId
    this.getMinsuData(defaultCityId)
  },
  methods: {
    async getMinsuData(cityId) {
      const result = await this.$axios.$get(`/mock/minsu.json?cityId=${cityId}`)
      this.minsuData = result.productList
    },
    handelNavItemClick(item) {
      if (item.cityId === this.activeNavItem) return
      this.activeNavItem = item.cityId
      this.getMinsuData(item.cityId)
    },
  },
}
</script>

<style lang="scss" scoped>
.homestay-wrapper {
  margin-top: 40px;
}

.recommend-header {
  box-sizing: border-box;
  height: 44px;
  padding: 0 12px;
  color: #fff;
  font-size: 14px;
  line-height: 44px;
  background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%)
    rgb(243, 182, 74);
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

.homestay-list {
  padding: 20px 20px 0 20px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-top: 0;
  border-radius: 0 0 5px 5px;
}

.homestay-item {
  float: left;
  width: 32.33333%;
  margin-right: 1.5%;
  margin-bottom: 15px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover .img {
    transform: scale(1.2);
  }

  .picture {
    height: 208px;
    overflow: hidden;
    font-size: 0;
    border-radius: 4px;
    .img {
      width: 100%;
      height: 100%;
      transition: 0.5s transform;
    }
  }
  .overview {
    padding-top: 10px;
    .title {
      color: #222;
      font-size: 16px;
    }
    .spec {
      margin-top: 4px;
      color: #999;
      font-size: 12px;
    }
    .price {
      color: #f60;
      font-weight: 500;
      font-size: 22px;
      .icon {
        margin-right: -4px;
        font-size: 14px;
      }
    }
  }
}
</style>
