<template>
  <Magnifier :imgUrl="img" />
</template>

<script>
  import Magnifier from './Magnifier.vue';
  import img from "../../assets/6.jpg"
  export default {
    setup () {
      const url = 'https://gd3.alicdn.com/imgextra/i1/0/T1gXCcFfVbXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
      return {
        url, img
      }
    }
  }
</script>