<template>
  <!-- <Magnifier :imgUrl="state.url" />
  <Stars :num="state.star" :disabled="state.disabled" @getStar="getStar" /> -->
  <!-- <Select v-model="state.star" /> -->
  {{ state.star }}

  <Stars v-model="state.star" />
</template>

<script setup>
  import { reactive } from "vue";
  const state = reactive({
    star: 3,
    disabled: true,
    url: 'https://gd3.alicdn.com/imgextra/i1/0/T1gXCcFfVbXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
  })
  const getStar = num => {
    console.log(num.value)
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 40vw;
    margin: 60px auto;
  }
  * {
    padding: 0;
    margin: 0;
  }
</style>