<template>
  <div class="i-selector" v-selector>
    <i-input :placeholder="placeholder" v-model="modelValue">
      <template #icon><i class="iconfont icon-down"></i></template>
    </i-input>
    <div class="i-selector-content" v-show="isShow">
      <slot />
    </div>
  </div>
</template>

<script>
  import IInput from '../Input/index.vue';
  import { selector } from '../../directives'
  import { reactive, toRefs } from 'vue';
  export default {
    name: 'Select',
    props: ['modelValue', 'placeholder',],
    directives: { selector },
    components: { IInput },
    setup (props, ctx) {
      const state = reactive({
        isShow: false
      })
      function showContent () {
        state.isShow = true
      }
      function hideContent () {
        state.isShow = false
      }
      return {
        ...toRefs(state), showContent, hideContent
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-selector {
    width: 200px;
    position: relative;
  }
  .i-selector-content {
    position: absolute;
    top: 45px;
    width: 100%;
    background: #fff;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    &::before {
      content: " ";
      position: absolute;
      top: -6px;
      width: 10px;
      height: 10px;
      background-color: #fff;
      transform: rotate(-45deg);
      border: 1px solid #e4e7ed;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }
  // .v-enter-active,
  // .v-leave-active {
  //   transition: all 0.3s linear;
  // }
  // .v-enter-active {
  //   opacity: 0;
  // }
  // .v-leave-to {
  //   opacity: 1;
  // }
</style>                                                                                                                                