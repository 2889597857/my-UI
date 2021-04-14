<template>
  <li class="i-menu-item" :style="{ color: textColor }">
    <slot name="title" />
    <slot />
  </li>
</template>

<script>
  import { inject, reactive, toRefs } from 'vue'

  export default {
    name: "IMenuItem",
    setup (props) {
      const color = inject('color')
      const state = reactive({
        textColor: color.textColor
      })
      return {
        ...toRefs(state),
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-menu-item {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding: 0 45px;
    cursor: pointer;
    &:hover {
      background-color: rgb(67, 75, 80);
    }
  }
</style>