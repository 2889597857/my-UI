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
    props: ['modelValue', 'placeholder'],
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
  }
</style>                                                                                                                                