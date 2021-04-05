<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
  export default {
    name: 'Select',
    props: ['modelValue'],
    setup (props, ctx) {
      console.log(props.modelValue)
      ctx.emit('update:modelValue', 1233)
      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>