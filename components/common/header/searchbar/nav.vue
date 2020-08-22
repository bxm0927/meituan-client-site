<template>
  <nav class="header-nav container">
    <ul class="nav-list clearfix">
      <li class="nav-item waimai">
        <a href="#" target="_blank">美团外卖</a>
      </li>
      <li class="nav-item maoyan">
        <a href="#" target="_blank">猫眼电影</a>
      </li>
      <li class="nav-item hotel">
        <a href="#" target="_blank">美团酒店</a>
      </li>
      <li class="nav-item homestay">
        <a href="#" target="_blank">民宿／公寓</a>
      </li>
      <li class="nav-item merchant">
        <a href="#" target="_blank">商家入驻</a>
      </li>
      <li class="nav-item gongyi">
        <a href="#" target="_blank">美团公益</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-nav {
  height: 40px;
}

.nav-list {
  margin-left: 260px;
}

.nav-item {
  float: left;
  a {
    display: block;
    box-sizing: border-box;
    margin: 0 10px;
    padding: 2px 10px;
    color: #222;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  &.waimai:hover a {
    color: #fbc700;
  }
  &.maoyan:hover a {
    color: #ed1e24;
  }
  &.hotel:hover a {
    color: #f04d4e;
  }
  &.homestay:hover a {
    color: #fdc411;
  }
  &.merchant:hover a {
    color: #fe8c00;
  }
  &.gongyi:hover a {
    color: #f04d4e;
  }
}
</style>
