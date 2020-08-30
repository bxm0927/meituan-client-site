<!--
  TODO 实现无延迟菜单效果
  教程：https://www.imooc.com/learn/829
  但是美团官网的实现和这个貌似不太一样
-->
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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      activeCategory: '',
      timer: null,
    }
  },
  computed: {
    ...mapState('modules/home', ['categories']),
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
  top: 59px;
  left: 229px;
  z-index: 10;
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
        content: ' ';
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
