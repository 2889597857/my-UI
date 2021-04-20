<template>
  <i-selector :value="value" :options="options" />
</template>

<script setup>
  import { ref } from 'vue'
  import ISelector from './index.vue'
  const options = ref([{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶',
    disabled: true
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }])
  const value = ref('')

</script>

<style lang="scss" scoped>
</style>