<template>
  <nav class="nav-wrapper fr">
    <ul class="nav-list clearfix">
      <li class="nav-item has-child">
        <a class="nav-link" href="/" target="_blank">我的美团</a>
        <ul class="child-box my">
          <li v-for="item in myChildren" :key="item.id">
            <a rel="nofollow" href="#" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/" target="_blank">手机APP</a>
      </li>

      <li class="nav-item has-child">
        商家中心
        <ul class="child-box merchant">
          <li v-for="item in merchantChildren" :key="item.id">
            <a rel="nofollow" href="#" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </li>

      <li class="nav-item has-child">
        美团规则
        <ul class="child-box rule">
          <li v-for="item in ruleChildren" :key="item.id">
            <a rel="nofollow" href="#" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </li>

      <li class="nav-item has-child">
        网站导航
        <div class="child-box site">
          <dl class="travel">
            <dt>酒店旅游</dt>
            <dd v-for="item in sitemap.travel" :key="item.id">
              <a href="#" target="_blank">{{ item.name }}</a>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd v-for="item in sitemap.food" :key="item.id">
              <a href="#" target="_blank">{{ item.name }}</a>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd v-for="item in sitemap.movie" :key="item.id">
              <a href="#" target="_blank">{{ item.name }}</a>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd v-for="item in sitemap.app" :key="item.id">
              <a href="#" target="_blank">
                <img
                  :src="require(`@/assets/images/common/app-logo/${item.pic}.png`)"
                  :title="item.name"
                  :alt="item.name"
                />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      myChildren: [
        { id: 1, name: '我的订单' },
        { id: 2, name: '我的收藏' },
        { id: 3, name: '抵用券' },
        { id: 4, name: '账户设置' },
      ],
      merchantChildren: [
        { id: 1, name: '美团餐饮商户中心' },
        { id: 2, name: '登录商家中心' },
        { id: 3, name: '美团智能收银' },
        { id: 4, name: '我想合作' },
        { id: 5, name: '手机免费开店' },
        { id: 6, name: '餐饮代理商招募' },
        { id: 7, name: '商家申请开票' },
        { id: 8, name: '免费合作美团排队' },
      ],
      ruleChildren: [
        { id: 1, name: '规则中心' },
        { id: 2, name: '规则目录' },
        { id: 3, name: '规则评议院' },
      ],
      sitemap: {
        travel: [
          { id: 1, name: '国际机票' },
          { id: 2, name: '火车票' },
          { id: 3, name: '民宿' },
          { id: 4, name: '经济型酒店' },
          { id: 5, name: '主题酒店' },
          { id: 6, name: '商务酒店' },
          { id: 7, name: '公寓' },
          { id: 8, name: '豪华酒店' },
          { id: 9, name: '客栈' },
          { id: 10, name: '青年旅社' },
          { id: 11, name: '度假酒店' },
          { id: 12, name: '别墅' },
          { id: 13, name: '农家院' },
        ],
        food: [
          { id: 1, name: '烤鱼' },
          { id: 2, name: '特色小吃' },
          { id: 3, name: '烧烤' },
          { id: 4, name: '自助餐' },
          { id: 5, name: '火锅' },
          { id: 6, name: '代金券' },
        ],
        movie: [
          { id: 1, name: '热映电影' },
          { id: 2, name: '热门影院' },
          { id: 3, name: '热映电影口碑榜' },
          { id: 4, name: '最受期待电影' },
          { id: 5, name: '国内票房榜' },
          { id: 6, name: '北美票房榜' },
          { id: 7, name: '电影排行榜' },
        ],
        app: [
          { id: 1, name: '美团app', pic: 'meituan' },
          { id: 2, name: '美团外卖app', pic: 'waimai' },
          { id: 3, name: '美团民宿app', pic: 'minsu' },
          { id: 4, name: '美团点评app', pic: 'dianping' },
          { id: 5, name: '猫眼app', pic: 'maoyan' },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  position: relative;
  float: left;
  box-sizing: border-box;
  height: 40px;
  padding: 12px 14px;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  .nav-link {
    display: block;
    color: #999;
  }
}

.nav-item .child-box {
  position: absolute;
  top: 38px;
  right: -1px;
  z-index: 10;
  z-index: 20;
  display: none;
  width: 100%;
  line-height: 35px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  &::after {
    position: absolute;
    top: -2px;
    right: 0;
    width: 76px;
    height: 4px;
    background-color: #fff;
    content: '';
  }
  &.merchant {
    width: 150%;
    line-height: 35px;
    border-top-left-radius: 4px;
  }
  &.site {
    box-sizing: border-box;
    width: 1190px;
    padding: 30px 36px 36px 47px;
    line-height: normal;
    border-top-left-radius: 4px;
    dl {
      display: inline-block;
      margin-right: 60px;
      vertical-align: top;
      dt {
        margin-bottom: 26px;
        color: #222;
        font-weight: bold;
        font-size: 14px;
      }
      a {
        display: block;
        padding: 5px 0;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
    .travel {
      width: 240px;
      dd {
        float: left;
        width: 33.333%;
        text-align: center;
      }
    }
    .food {
      width: 160px;
      dd {
        float: left;
        width: 50%;
        text-align: center;
      }
    }
    .movie {
      width: 100px;
    }
    .app {
      width: 380px;
      margin-right: 0;
      dd {
        display: inline-block;
        margin: 0 8px;
      }
    }
  }
}

.nav-item.has-child:hover {
  color: #fe8c00;
  background-color: #fff;
  border-color: #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  .child-box {
    display: block;
  }
}
</style>
