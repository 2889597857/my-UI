<template>
  <div
    class="img-wrapper"
    :style="{ width: imgWidtn + 'px', height: imgHeight + 'px' }"
    v-magnifier
  >
    <div
      class="static-img"
      :style="{ width: imgWidtn + 'px', height: imgHeight + 'px' }"
    >
      <img :src="imgUrl" />
      <div class="mag-img">
        <img
          :style="{ width: imgWidtn * 2 + 'px', height: imgHeight * 2 + 'px' }"
          :src="imgUrl"
        />
      </div>
      <div
        class="mag-wrapper"
        :style="{ width: magWidth + 'px', height: magWidth + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
  import { magnifier } from '../../directives';
  export default {
    name: "Magnifier",
    directives: {
      magnifier
    },
    props: {
      imgUrl: {
        type: String,
        required: true
      },
      imgWidtn: {
        type: Number,
        default: 400
      },
      imgHeight: {
        type: Number,
        default: 400
      },
      magWidth: {
        type: Number,
        default: 200
      },
    },
    setup () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .static-img {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mag-wrapper {
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
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 105%;
    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .img-wrapper .show {
    display: block;
  }
</style>