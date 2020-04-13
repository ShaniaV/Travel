<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script type="text/javascript">
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 轮播循环，即轮播到最后一张，下一张回到第一张
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// >>>穿透  因为.swiper-pagination-bullet-active属于插槽组件pagination里的内容，而scoped决定了样式只修饰swiper里的内容。>>>穿透表示.swiper-pagination-bullet-active不受scoped限制
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 36.5%
    // height: 31.25vw
    background: #ccc
    .swiper-img
      width: 100%
</style>
