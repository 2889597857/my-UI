<template>
  <div :class="{ 'i-submenu': true, 'is-open': ShowSub }">
    <div class="i-submenu-title" @click="isShow(index)">
      <slot name="title" />
      <i class="el-submenu-arrow iconfont icon-down"></i>
    </div>
    <ul class="i-submenu-content" style="transition-property: height">
      <slot />
    </ul>
  </div>
</template>

<script>
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
  export default {
    name: "ISubmenu",
    props: {
      index: {
        type: String
      }
    },
    setup (props) {
      const intance = getCurrentInstance()
      const state = reactive({
        ShowSub: true
      })

      const isShow = () => {
        state.ShowSub = !state.ShowSub
      }
      onMounted(() => {
        const a = intance.parent.ctx.defaultAct
        if (a) {
          if (a == props.index) {
            state.ShowSub = true
          } else {
            state.ShowSub = false
          }
        }
      })
      return {
        ...toRefs(state),
        isShow
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-submenu {
    .i-submenu-title {
      height: 56px;
      line-height: 56px;
      font-size: 14px;
      color: #fff;
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      position: relative;
      transition: border-color 0.3s, background-color 0.3s, color 0.3s;
      box-sizing: border-box;
      white-space: nowrap;
      &:hover {
        background-color: rgb(67, 75, 80);
      }
      .el-submenu-arrow {
        position: absolute;
        right: 20px;
        transition: transform 0.3s;
      }
    }
  }
  .is-open .el-submenu-arrow {
    transform: rotate(180deg);
  }

  .i-submenu-content {
    display: none;
    transition: all 0.3s;
    height: 0;
    padding-left: 10px;
  }
  .is-open .i-submenu-content {
    display: block;
    height: auto;
  }
</style>