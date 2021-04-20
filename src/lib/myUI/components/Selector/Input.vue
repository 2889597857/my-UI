<template>
  <i-input placeholder="请选择日期">
    <template #icon><i class="iconfont icon-down"></i></template>
  </i-input>
</template>

<script>
  import IInput from '../Input/index.vue'
  export default {
    name: 'SelectorInput',
    props: {
      placeholder: {
        type: String,
        default: '请选择'
      }
    },
    components: { IInput }
  }
</script>

<style lang="scss" scoped>
</style>