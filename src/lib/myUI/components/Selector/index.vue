<template>
  <sInput />
</template>

<script>
  import sInput from './Input.vue';
  export default {
    name: 'Select',
    props: ['modelValue'],
    components: { sInput },
    setup (props, ctx) {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>