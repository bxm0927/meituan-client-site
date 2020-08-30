<template>
  <div class="slides fl">
    <el-carousel :interval="5000" height="240px">
      <el-carousel-item v-for="item in slides" :key="item.id">
        <img class="pic" :src="item.photo" :alt="item.name" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { id: 1, name: '住酒店', photo: require('@/assets/images/index/banner/1.jpg') },
        { id: 2, name: '吃美食', photo: require('@/assets/images/index/banner/2.jpg') },
        { id: 3, name: '点外卖', photo: require('@/assets/images/index/banner/3.jpg') },
        { id: 4, name: '看电影', photo: require('@/assets/images/index/banner/4.jpg') },
        { id: 5, name: '美团排队', photo: require('@/assets/images/index/banner/5.png') },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.slides {
  width: 550px;
  height: 100%;
  background-color: #fff;
}

.pic {
  width: 100%;
  height: 100%;
}
</style>
