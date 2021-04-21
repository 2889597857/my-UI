<template>
  <carousel class="carousel">
    <carousel-item v-for="(item, index) of imgs" :key="index">
      <img :src="item.imgUrl" />
    </carousel-item>
  </carousel>
</template>

<script>
  import carousel from './index.vue'
  import carouselItem from './carouselItem.vue'
  import img1 from '../../assets/1.jpg'
  import img2 from '../../assets/2.jpg'
  import img3 from '../../assets/3.jpg'
  import img4 from '../../assets/4.jpg'
  import img5 from '../../assets/5.jpg'

  export default {
    name: "carouselDemo",
    components: { carousel, carouselItem },
    setup () {
      const imgs = [
        { imgUrl: img1 },
        { imgUrl: img2 },
        { imgUrl: img3 },
        { imgUrl: img4 },
        { imgUrl: img5 },
      ]
      return { imgs, }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    width: 520px;
    height: 280px;
  }
</style>

  // autoPlay: {
  //   type: Boolean,
  //   default: true
  // },
  // duration: {
  //   type: Number,
  //   default: 3000
  // },
  // initial: {
  //   type: Number,
  //   default: 0
  // },
  // direction: {
  //   type: String,
  //   default: 'next'
  // },
  // pagination: {
  //   type: Boolean,
  //   default: true
  // },
  // director: {
  //   type: Boolean,
  //   default: true
  // },