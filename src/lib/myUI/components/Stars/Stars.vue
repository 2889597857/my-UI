<template>
  <div class="stars">
    <i
      v-for="item in 5"
      :key="item"
      :class="[
        'iconfont',
        'icon-xingxing',
        item <= star ? 'active' : '',
        disabled ? 'cursor' : '',
      ]"
      :style="{ 'font-size': size + 'px' }"
      @click="setStar(item, disabled)"
    ></i>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import { useStars, } from '../../hooks';
  export default {
    name: 'Stars',
    props: {
      num: {
        type: Number,
        default: 0
      },
      modelValue: {
        type: [String, Number],
      },
      size: {
        type: Number,
        default: 30
      },
      disabled: {
        type: Boolean,
        default: true
      }
    },
    setup (props, ctx) {
      const [star, setStar] = useStars(props.modelValue, () => {
        ctx.emit('update:modelValue', star.value)
      })
      return {
        star,
        setStar,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: "iconfont";
    src: url("//at.alicdn.com/t/font_2465798_nbfix3h48g9.eot?t=1617624979250"); /* IE9 */
    src: url("//at.alicdn.com/t/font_2465798_nbfix3h48g9.eot?t=1617624979250#iefix")
        format("embedded-opentype"),
      url("//at.alicdn.com/t/font_2465798_nbfix3h48g9.woff?t=1617624979250")
        format("woff"),
      url("//at.alicdn.com/t/font_2465798_nbfix3h48g9.ttf?t=1617624979250")
        format("truetype"),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url("//at.alicdn.com/t/font_2465798_nbfix3h48g9.svg?t=1617624979250#iconfont")
        format("svg"); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #999;
    &:before {
      content: "\e642";
    }
    &.active {
      color: #fccf0a;
    }
  }
  .stars {
    display: flex;
    i {
      cursor: not-allowed;
    }
    .cursor {
      cursor: pointer;
    }
  }
</style>