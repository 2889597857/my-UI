<template>
  <div class="img-wrapper" v-magnifier>
    <div class="static-img">
      <img
        id="J_ImgBooth"
        src="https://gd3.alicdn.com/imgextra/i1/0/T1gXCcFfVbXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"
        data-haszoom="700"
        data-size="400x400"
      />
      <div class="mag-wrapper"></div>
    </div>
    <div class="mag-img">
      <img
        id="J_ImgBooth"
        src="https://gd3.alicdn.com/imgextra/i1/0/T1gXCcFfVbXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"
        data-haszoom="700"
        data-size="400x400"
      />
    </div>
  </div>
</template>

<script>
  import { magnifier } from '../directives';
  export default {
    name: "Magnifier",
    directives: {
      magnifier
    },
    setup () {
      return {}
    }

  }
</script>

<style lang="scss" scoped>
  .img-wrapper {
    margin: 0 auto;
    width: 800px;
    height: 400px;
    display: flex;
  }
  .static-img {
    width: 50%;
    height: 100%;
    position: relative;
  }
  .mag-wrapper {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(//gtms01.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png) repeat
      scroll 0 0 transparent;
    cursor: move;
    display: none;
  }
  .mag-img {
    overflow: hidden;
    display: none;
    width: 50%;
    height: 100%;
    position: relative;
    img {
      width: 200%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .img-wrapper .show {
    display: block;
  }
</style>