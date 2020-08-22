<template>
  <div class="city-wrapper fl">
    <i class="iconfont icon-dingwei" />
    <span class="city-name">北京</span>

    <nuxt-link to="/city" class="change-city">切换城市</nuxt-link>

    <div class="near-cities">
      [
      <a v-for="item in nearCities" :key="item.id" class="city-item" href="#">
        {{ item.name }}
      </a>
      ]
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nearCities: [
        { id: 1, name: '门头沟区' },
        { id: 2, name: '大厂回族自治县' },
        { id: 3, name: '廊坊' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.city-wrapper {
  height: 40px;
  line-height: 40px;
  .icon-dingwei {
    font-size: 15px;
    vertical-align: bottom;
  }
  .city-name {
    color: #666;
  }
  .change-city {
    margin: 0 4px;
    padding: 0 4px;
    color: #666;
    background: #f4f4f4;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
  }
}

.near-cities {
  display: inline-block;
  .city-item {
    color: #999;
  }
}
</style>
