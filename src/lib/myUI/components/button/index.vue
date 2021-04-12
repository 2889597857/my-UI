<template>
  <button class="I-button" type="button">
    <slot />
  </button>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'IButton',
    setup () {
      const state = reactive({
        count: 0,
      })

      return {
        ...toRefs(state),
      }
    }
  }
</script>