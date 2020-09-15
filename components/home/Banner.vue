<template>
  <section class="banner-wrapper clearfix">
    <BannerMenu />

    <div class="right-banner fl">
      <div class="banner-row row1 clearfix">
        <BannerSlides />

        <div class="col3 life fl">
          <img src="@/assets/images/index/life.jpg" alt="休闲生活" />
        </div>

        <div class="col4 login fr">
          <template v-if="userInfo">
            <img class="avatar" src="@/assets/images/common/avatar.jpg" alt="用户头像" />
            <p class="hello ellipsis">Hi！{{ decodeURIComponent(userInfo.username) }}</p>
          </template>
          <template v-else>
            <img class="avatar" src="@/assets/images/common/avatar.jpg" alt="用户头像" />
            <p class="hello ellipsis">Hi！你好</p>
            <a href="/login" class="btn login-btn">立即登录</a>
            <a href="/register" class="btn register-btn">注册</a>
          </template>
        </div>
      </div>

      <div class="banner-row row2 clearfix">
        <div class="col1 hotel fl">
          <img src="@/assets/images/index/hotel.png" alt="住酒店" />
        </div>

        <div class="col2 edu fl">
          <img src="@/assets/images/index/edu.jpg" alt="教育" />
        </div>

        <div class="col3 business fl">
          <img src="@/assets/images/index/business.jpg" alt="商家合作" />
        </div>

        <div class="col4 qrcode fr">
          <img class="qrcode-img" src="@/assets/images/common/download-app-qr.png" alt="下载APP" />
          <p class="app-name">美团APP手机版</p>
          <p class="tip"><span>1元起</span> 吃喝玩乐</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BannerMenu from './BannerMenu.vue'
import BannerSlides from './BannerSlides.vue'

export default {
  components: {
    BannerMenu,
    BannerSlides,
  },
  computed: {
    ...mapState(['userInfo']),
  },
}
</script>

<style lang="scss" scoped>
.right-banner {
  width: 950px; // 1190 - 230 - 10
  margin-top: 10px;
  margin-left: 10px;
}

.banner-row {
  &.row1 {
    height: 240px;
  }
  &.row2 {
    height: 165px;
    margin-top: 10px;
  }
  .col1 {
    width: 270px;
    height: 100%;
  }
  .col2 {
    width: 270px;
    height: 100%;
    margin-left: 10px;
  }
  .col3 {
    width: 150px;
    height: 100%;
    margin-left: 10px;
  }
  .col4 {
    box-sizing: border-box;
    width: 230px;
    height: 100%;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .login {
    .avatar {
      width: 47px;
      height: 47px;
      margin-top: 30px;
      border: 4px solid #e5e5e5;
      border-radius: 50%;
    }
    .hello {
      width: 10em;
      margin: 0 auto;
      color: #222;
      font-weight: 500;
      font-size: 16px;
    }
    .btn {
      display: block;
      width: 120px;
      margin: 10px auto;
      color: #333;
      font-size: 14px;
      line-height: 34px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 40px;
      transition: background-color 0.5s;
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
  .qrcode {
    .qrcode-img {
      width: 95px;
      height: 95px;
      margin-top: 10px;
    }
    .app-name {
      color: #222;
      font-weight: 500;
      font-size: 16px;
    }
    .tip {
      color: #3f3f3f;
      font-weight: 500;
      font-size: 12px;
      span {
        margin-right: 5px;
        color: #ec5330;
      }
    }
  }
}
</style>
