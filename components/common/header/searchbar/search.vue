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

    <!-- 搜索结果 -->
    <SearchResult v-if="isShowSearchResult" :search-result="searchResult" />

    <!-- 历史搜索 -->
    <SearchHistory v-if="isShowSearchHistory" :search-history="searchHistory" />

    <!-- 热门搜索词 -->
    <SearchHotword />
  </div>
</template>

<script>
import { debounce } from 'lodash'
import SearchResult from '@/components/common/header/searchbar/SearchResult.vue'
import SearchHistory from '@/components/common/header/searchbar/SearchHistory.vue'
import SearchHotword from '@/components/common/header/searchbar/SearchHotword.vue'

export default {
  components: {
    SearchResult,
    SearchHistory,
    SearchHotword,
  },
  data() {
    return {
      searchKeyword: '', // 搜索词
      isFocus: false, // 输入框是否是聚焦状态
      searchResult: [], // 搜索结果
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
    }
  },
  computed: {
    // 聚焦状态，且搜索框无内容，且有数据时，显示搜索历史面板
    isShowSearchHistory() {
      const { isFocus, searchKeyword, searchHistory } = this
      return isFocus && !searchKeyword && searchHistory && searchHistory.length
    },
    // 聚焦状态，且搜索框有内容，且有数据时，显示搜索结果面板
    isShowSearchResult() {
      const { isFocus, searchKeyword, searchResult } = this
      return isFocus && searchKeyword && searchResult && searchResult.length
    },
  },
  methods: {
    // 输入框输入事件
    // 去抖的作用是：避免频繁请求 https://www.lodashjs.com/docs/lodash.debounce
    handelSearchInput: debounce(async function () {
      const result = await this.$axios.$get('/api/search/top', {
        params: {
          word: this.searchKeyword,
          city: this.$store.state.poi.city,
        },
      })
      if (result.code === '0') {
        this.searchResult = result.data
      }
    }, 500),
    // 输入框聚焦事件
    handelSearchInputFocus() {
      this.isFocus = true
    },
    // 输入框失焦事件
    // 延时的作用是：避免失焦过快导致点击事件无效
    handelSearchInputBlur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
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

  /deep/ .search-panel {
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
</style>
