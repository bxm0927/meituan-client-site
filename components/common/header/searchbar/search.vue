<template>
  <div class="search-wrapper">
    <!-- 搜索框 -->
    <div class="search-block clearfix">
      <input
        v-model="searchKeyword"
        class="search-input"
        type="text"
        placeholder="搜索商家或地点"
        @input="handelSearchInput"
        @focus="handelSearchInputFocus"
        @blur="handelSearchInputBlur"
      />
      <button class="btn search-button">
        <i class="iconfont icon-sousuo" />
      </button>
    </div>

    <!-- 历史搜索 -->
    <!-- SearchHistory -->
    <div v-if="isShowSearchHistory" class="search-panel search-history">
      <div class="header">
        <span class="title">最近搜索</span>
        <span class="clean fr" @click="cleanSearchHistory">删除搜索历史</span>
      </div>

      <ul>
        <li v-for="item in searchHistory" :key="item.id" class="search-history-item">
          <a href="#">{{ item.name + item.id }}</a>
        </li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <!-- SearchResult -->
    <div v-if="isShowSearchResult" class="search-panel search-result">
      <ul>
        <li v-for="item in searchResult" :key="item.id" class="search-result-item">
          <a href="#" class="search-result-link">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <!-- 热门搜索词 -->
    <SearchHotword />
  </div>
</template>

<script>
import { throttle } from 'lodash'
import SearchHotword from '@/components/common/header/searchbar/SearchHotword.vue'

export default {
  components: {
    SearchHotword,
  },
  data() {
    return {
      searchKeyword: '', // 搜索词
      isSearchInputFocus: false, // 输入框是否是聚焦状态
      searchHistory: [
        { id: 1, name: '历史搜索' },
        { id: 2, name: '历史搜索' },
        { id: 3, name: '历史搜索' },
        { id: 4, name: '历史搜索' },
        { id: 5, name: '历史搜索' },
        { id: 6, name: '历史搜索' },
        { id: 7, name: '历史搜索' },
        { id: 8, name: '历史搜索' },
        { id: 9, name: '历史搜索' },
      ],
      searchResult: [
        { id: 1, name: '1點點' },
        { id: 2, name: '1stChicken韩式炸鸡' },
        { id: 3, name: '1stChicken韩式炸鸡啤酒' },
        { id: 4, name: '1元炸鸡' },
        { id: 5, name: '1516串串香' },
        { id: 6, name: '1元' },
        { id: 7, name: '1976烤翅' },
        { id: 8, name: '1元抢购' },
        { id: 9, name: '1号电池' },
        { id: 10, name: '13酒吧' },
      ],
    }
  },
  computed: {
    // 聚焦状态，且搜索框无内容，且有数据时，显示搜索历史面板
    isShowSearchHistory() {
      const { isSearchInputFocus, searchKeyword, searchHistory } = this
      return isSearchInputFocus && !searchKeyword && searchHistory && searchHistory.length
    },
    // 聚焦状态，且搜索框有内容，且有数据时，显示搜索结果面板
    isShowSearchResult() {
      const { isSearchInputFocus, searchKeyword, searchResult } = this
      return isSearchInputFocus && searchKeyword && searchResult && searchResult.length
    },
  },
  methods: {
    // 输入框输入时 input
    // 节流操作 https://www.lodashjs.com/docs/lodash.throttle
    handelSearchInput: throttle(function () {
      console.log(this.searchKeyword)
    }, 500),
    // 输入框聚焦时 focus
    handelSearchInputFocus() {
      this.isSearchInputFocus = true
    },
    // 输入框失焦时 blur
    // 延时的作用是：避免失焦过快导致点击事件无效
    handelSearchInputBlur() {
      setTimeout(() => {
        this.isSearchInputFocus = false
      }, 200)
    },
    // 删除搜索历史
    cleanSearchHistory() {},
  },
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: absolute;
  left: 50%;
  z-index: 10;
  float: left;
  width: 550px;
  transform: translate(-50%);
}

.search-block {
  height: 40px;
}

.search-input {
  float: left;
  box-sizing: border-box;
  width: 470px;
  height: 100%;
  padding: 0 15px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  border-right: none;
  border-radius: 4px 0 0 4px;
  &::placeholder {
    color: #666;
  }
}

.search-button {
  float: right;
  width: 80px;
  height: 100%;
  color: #222;
  background-color: #ffc300;
  border-radius: 0 4px 4px 0;
  .iconfont {
    font-weight: bold;
    font-size: 16px;
  }
  &:hover {
    color: #212529;
    background-color: #e0a800;
  }
  &:active {
    color: #212529;
    background-color: #d39e00;
    border-radius: 4px;
    box-shadow: 0 0 0 4px rgba(222, 170, 12, 0.5);
  }
}

.search-panel {
  position: absolute;
  box-sizing: border-box;
  width: 470px;
  color: #999;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  a {
    color: #666;
    &:hover {
      color: #fe8c00;
    }
  }
}

.search-history {
  padding: 10px;
  .header {
    margin-bottom: 6px;
  }
  .title {
    font-weight: bold;
  }
  .clean {
    cursor: pointer;
  }
  .search-history-item {
    display: inline-block;
    margin-right: 10px;
    color: #666;
    line-height: 2;
  }
}

.search-result {
  .search-result-link {
    display: block;
    padding: 4px 10px;
    color: #333;
    &:hover {
      color: #fe8c00;
      background-color: #f8f8f8;
    }
  }
}
</style>
