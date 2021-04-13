<template>
  <i-tabs>
    <i-tab-pane label="用户管理" name="first">用户管理</i-tab-pane>
    <i-tab-pane label="配置管理" name="second">配置管理</i-tab-pane>
    <i-tab-pane label="角色管理" name="third">角色管理</i-tab-pane>
    <i-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</i-tab-pane>
  </i-tabs>
</template>

<script>   
  import { ref } from 'vue'
  export default {
    setup () {
      const activeName = ref('second')
      return {
        activeName
      }
    }
  }
</script>

