<template>
  <div class="i-tree">
    <div class="i-tree-content" v-for="item in data" :key="item.label">
      <div v-if="!item.children">
        <i class="iconfont icon-down"></i>
        <span> {{ item.label }}tree</span>
      </div>
      <re-tree :data="item"></re-tree>
    </div>
  </div>
</template>
<script>
  import ReTree from './ReTree.vue'
  export default {
    name: "ITree",
    components: { ReTree },
    props: {
      data: {
        type: [Array, Object],
        required: true
      },
      props: {
        type: Object
      }
    },
    setup (props) {
      console.log(props.data)
      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>