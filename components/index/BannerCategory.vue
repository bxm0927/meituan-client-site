<template>
  <div class="left-category fl">
    <p class="category-title">全部分类</p>

    <ul class="category-content" @mouseleave="handelCategoryOut">
      <li
        v-for="category in categories"
        :key="category.id"
        class="category-item"
        @mouseenter="handelCategoryEnter(category)"
      >
        <i :class="`iconfontNew icon-${category.type}`" />
        <span class="items">
          <a v-for="item in category.items" :key="item" class="text-link" href="#" target="_blank">
            {{ item }}
            <span v-if="category.hot" class="hot">HOT</span>
          </a>
        </span>
        <i class="arrow" />
      </li>
    </ul>

    <div
      v-if="activeCategory"
      class="category-detail"
      @mouseenter="handelCategoryDetailEnter"
      @mouseleave="handelCategoryDetailOut"
    >
      <dl v-for="(item, index) in activeCategoryDetail" :key="index">
        <dt class="clearfix">
          <h2 class="fl">{{ item.title }}</h2>
          <a class="fr more" href="#" target="_blank">更多</a>
        </dt>
        <dd v-for="data in item.datas" :key="data">
          <a href="#" target="_blank">{{ data }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: '',
      timer: null,
      categories: [
        {
          id: 1,
          type: 'food',
          items: ['美食'],
          children: [
            {
              title: '热门城市',
              link: '#',
              datas: [
                '上海',
                '成都',
                '北京',
                '重庆',
                '南京',
                '杭州',
                '广州',
                '西安',
                '武汉',
                '厦门',
                '长沙',
                '青岛',
                '深圳',
                '天津',
                '苏州',
              ],
            },
            {
              title: '热门房源',
              link: '#',
              datas: ['复式Loft', '别墅'],
            },
          ],
        },
        {
          id: 2,
          type: 'waimai',
          items: ['外卖'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 3,
          type: 'hotel',
          items: ['酒店'],
          hot: true,
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1'] },
            { title: '测试3', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 4,
          type: 'zhenguo',
          items: ['民宿'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 5,
          type: 'maoyan',
          items: ['猫眼电影'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试3', link: '#', datas: ['测试项1'] },
          ],
        },
        {
          id: 6,
          type: 'plane',
          items: ['机票', '火车票'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 7,
          type: 'ktv',
          items: ['休闲娱乐', 'KTV'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试3', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 8,
          type: 'life',
          items: ['生活服务'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 9,
          type: 'beauty',
          items: ['丽人', '美发', '医学美容'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试3', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 10,
          type: 'married',
          items: ['结婚', '婚纱摄影', '婚宴'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1'] },
          ],
        },
        {
          id: 11,
          type: 'child',
          items: ['亲子', '儿童乐园', '幼教'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试3', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 12,
          type: 'sport',
          items: ['运动健身', '健身中心'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 13,
          type: 'decorate',
          items: ['家装', '建材', '家居'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试3', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 14,
          type: 'education',
          items: ['学习培训', '音乐培训'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 15,
          type: 'medical',
          items: ['医疗健康', '宠物', '爱车'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试3', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
        {
          id: 16,
          type: 'bar',
          items: ['酒吧', '密室逃脱'],
          children: [
            { title: '测试', link: '#', datas: ['测试项1', '测试项2'] },
            { title: '测试2', link: '#', datas: ['测试项1', '测试项2'] },
          ],
        },
      ],
    }
  },
  computed: {
    activeCategoryDetail() {
      return this.categories.find((i) => i.type === this.activeCategory).children
    },
  },
  methods: {
    handelCategoryEnter(category) {
      this.activeCategory = category.type
    },
    handelCategoryOut() {
      this.timer = setTimeout(() => {
        this.activeCategory = ''
      }, 200)
    },
    handelCategoryDetailEnter() {
      clearTimeout(this.timer)
    },
    handelCategoryDetailOut() {
      this.activeCategory = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.left-category {
  position: relative;
  box-sizing: border-box;
  width: 230px;
  height: 475px; // 50 + 10 + 415
  margin-top: -50px;
  color: #646464;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}

.category-title {
  height: 50px;
  padding: 0 15px;
  color: #222;
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
}

.category-content {
  height: 415px;
  margin-top: 10px;
}

.category-item {
  position: relative;
  box-sizing: border-box;
  height: 25.5px;
  padding: 0 12px;
  line-height: 25.5px;
  .iconfontNew {
    display: inline-block;
    width: 16px;
  }
  .items {
    margin-left: 10px;
  }
  .text-link {
    position: relative;
    margin-right: 14px;
    color: #646464;
    font-size: 13px;
    &::after {
      position: absolute;
      right: -10px;
      margin-top: 1px;
      color: #646464;
      font-weight: normal;
      font-size: 16px;
      content: '/';
      pointer-events: none;
    }
    &:last-child::after {
      display: none;
    }
  }
  .hot {
    display: inline-block;
    margin-left: 4px;
    padding: 0 7px;
    color: #222;
    font-size: 12px;
    line-height: 16px;
    background: #fff3cc;
    border-radius: 10px;
  }
  .arrow {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 4px;
    height: 4px;
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    transform: rotate(-45deg);
  }
  &:hover {
    color: #222;
    background-color: rgba(255, 150, 0, 0.08);
    .text-link {
      color: #222;
      font-weight: bold;
      &::after {
        color: #222;
      }
    }
    .hot {
      font-weight: 400;
      background: linear-gradient(to bottom right, #ffd000, #ffbd00);
    }
    .arrow {
      border-right: 1px solid #222;
      border-bottom: 1px solid #222;
    }
  }
}

.category-detail {
  position: absolute;
  top: 60px;
  left: 230px;
  width: 400px;
  height: 416px;
  overflow: hidden;
  color: #666;
  background-color: #fff;
  dl {
    margin-top: 24px;
    padding: 0 30px;
  }
  dt {
    height: 22px;
    padding-bottom: 10px;
    line-height: 22px;
    border-bottom: 1px solid #e5e5e5;
    h2 {
      float: left;
      color: #222;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }
    .more {
      position: relative;
      margin-right: 10px;
      color: #999;
      font-size: 12px;
      &::after {
        position: absolute;
        top: 8px;
        right: -8px;
        width: 4px;
        height: 4px;
        border-right: 1px solid #999;
        border-bottom: 1px solid #999;
        transform: rotate(-45deg);
        content: '';
      }
      &:hover {
        color: #222;
        &::after {
          border-right: 1px solid #222;
          border-bottom: 1px solid #222;
        }
      }
    }
  }
  dd {
    display: inline-block;
    margin-top: 10px;
    margin-right: 16px;
    a {
      position: relative;
      color: #999;
      font-size: 12px;
      @include extend-hotspot(5px);
      &:hover {
        color: #fe8c00;
      }
    }
  }
}
</style>
