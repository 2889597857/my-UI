<template>
  <div class="aside">
    <i-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      defaultActive="2"
    >
      <i-submenu index="1">
        <template #title>
          <span>导航一</span>
        </template>
        <i-menu-item index="1-1">选项1</i-menu-item>
        <i-menu-item index="1-2">选项2</i-menu-item>
        <i-menu-item index="1-3">选项3</i-menu-item>
        <i-menu-item index="1-4">选项4</i-menu-item>
      </i-submenu>
      <i-submenu index="2">
        <template #title>
          <span>导航二</span>
        </template>
        <i-menu-item index="2-1">选项1</i-menu-item>
        <i-menu-item index="2-2">选项2</i-menu-item>
      </i-submenu>
      <i-menu-item index="3">
        <template #title>
          <span>导航三</span>
        </template>
      </i-menu-item>
    </i-menu>
  </div>
</template>

<script>
  import IMenu from './index.vue'
  import ISubmenu from './subMenu.vue'
  import IMenuItem from './menuItem.vue'
  export default {
    name: "MenuDemo",
    components: { IMenu, ISubmenu, IMenuItem },
  }
</script>

<style lang="scss" scoped>
  .aside {
    width: 400px;
  }
</style>