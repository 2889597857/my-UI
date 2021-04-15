<template>
  <div :class="{ 'i-submenu': true, 'is-open': ShowSub }">
    <div
      class="i-submenu-title"
      :style="{ color: textColor }"
      @click="isShow(index)"
    >
      <slot name="title" />
      <i class="el-submenu-arrow iconfont icon-down"></i>
    </div>

    <ul
      class="i-submenu-content"
      style="transition-property: height"
      ref="submenu"
      v-show="ShowSub"
    >
      <slot />
    </ul>
  </div>
</template>

<script>
  import { reactive, toRefs, getCurrentInstance, onMounted, inject, ref } from 'vue'
  export default {
    name: "ISubmenu",
    props: {
      index: {
        type: String
      }
    },
    setup (props) {
      const color = inject('color')
      const intance = getCurrentInstance()
      const state = reactive({
        textColor: color.textColor,
      })
      const submenu = ref(null)
      let ShowSub = ref(false)
      let size
      const isShow = () => {
        if (!ShowSub.value) {
          ShowSub.value = true
          submenu.value.style.height = 0
          setTimeout(() => {
            submenu.value.style.height = size + 'px'
          }, 100);
          // submenu.value.addEventListener('transitionend', dowm1, false)
        } else {
          submenu.value.style.height = 0
          submenu.value.addEventListener('transitionend', up, false)
        }

        function up () {
          ShowSub.value = false
          submenu.value.removeEventListener('transitionend', up, false)
        }
      }
      onMounted(() => {
        const a = intance.parent.ctx.defaultAct
        if (a) {
          if (a == props.index) {
            isShow()
          } else {
            ShowSub.value = false
          }
        }
        size = intance.slots.default().length * 56
      })
      return {
        ...toRefs(state),
        isShow, submenu, ShowSub
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
    transition: all 0.5s;
    padding-left: 15px;
    overflow: hidden;
  }
</style>