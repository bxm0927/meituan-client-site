<template>
  <section class="copyright clearfix">
    <div class="left-info fl">
      <p>
        <a href="/">©美团网团购 meituan.com</a>
        <a href="http://www.beian.miit.gov.cn/">京ICP证070791号</a>
        <a href="#">京ICP备10211739号</a>
      </p>
      <p>
        <a href="#" target="_blank">广播电视节目制作经营许可证（京）字第03889号</a>
      </p>
      <p>
        <a href="#" target="_blank">食品经营许可证</a>
        <a href="#" target="_blank">互联网药品信息服务资格证</a>
      </p>
      <p>
        <a href="#" target="_blank">
          医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号
        </a>
      </p>
    </div>

    <div class="right-license fr">
      <p class="beian">
        <a href="#" target="_blank">
          <img class="beian-icon" src="@/assets/images/footer/beianicon.png" />
          京公网安备 11000002002052号
        </a>
      </p>

      <div class="license">
        <a class="bus-license" href="#" title="营业执照" target="_blank">
          <img src="@/assets/images/footer/sankuai-license.png" />
          <span>北京三快科技有限公司</span>
        </a>
        <a class="sprites record" href="#" title="备案信息" target="_blank">备案信息</a>
        <a class="sprites knet" href="#" title="可信网站认证" target="_blank">可信网站</a>
        <a class="sprites consume" href="#" title="12315消费争议" target="_blank">
          12315消费争议
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.copyright {
  padding: 20px;
  color: #999;
  font-size: 12px;
  line-height: 1.6;
  a {
    color: #999;
  }
}

.left-info a {
  margin-right: 20px;
}

.beian {
  text-align: right;
  .beian-icon {
    width: 15px;
    vertical-align: text-bottom;
  }
}

.license {
  margin-top: 6px;
  text-align: left;
  .bus-license {
    img {
      width: 38px;
      height: 38px;
    }
    span {
      display: inline-block;
      line-height: 38px;
      vertical-align: top;
    }
  }
  .sprites {
    display: inline-block;
    height: 38px;
    margin-right: 2px;
    overflow: hidden;
    text-indent: -1000px;
    background-image: url('~assets/images/footer/footer-sprites.png');
    background-repeat: no-repeat;
    &.record {
      width: 109px;
      background-position: 0 -167px;
    }
    &.knet {
      width: 107px;
      background-position: 0 -127px;
    }
    &.consume {
      width: 107px;
      background-position: 0 -40px;
    }
  }
}
</style>
