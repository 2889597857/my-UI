<template>
  <div class="i-tree-content" v-for="item in data.children" :key="item.label">
    <div v-if="!item.children">
      <i class="iconfont icon-down"></i>
      <span> {{ item.label }} ReTree</span>
    </div>
    <re-tree v-else :data="item"></re-tree>
  </div>
</template>

<script>
  export default {
    name: "ReTree",
    props: {
      data: {
        type: [Array, Object],
        required: true
      }
    },
    setup () {


      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>