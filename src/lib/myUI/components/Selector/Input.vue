<template>
  <div class="Seletor-input">
    <input type="text" class="input" :placeholder="placeholder" />
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'SelectorInput',
    props: {
      placeholder: {
        type: String,
        default: '请选择'
      }
    }
  }
</script>

<style lang="scss" scoped>
  input {
    outline: none;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 14px;
    padding: 10px;
    height: 40px;
  }
  .Seletor-input {
  }
</style>