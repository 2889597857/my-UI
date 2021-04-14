<template>
  <div
    class="i-menu"
    :style="{ 'background-color': backgroundColor }"
    ref="menu"
  >
    <slot />
  </div>
</template>

<script>
  import { onMounted, provide, reactive, ref, toRefs } from 'vue'
  export default {
    name: "IMenu",
    props: {
      backgroundColor: {
        type: String
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      activeTextColor: {
        type: String
      },
      defaultActive: {
        type: String,
        default: ''
      }
    },
    setup (props) {
      const state = reactive({
        defaultAct: props.defaultActive
      })
      provide('color', {
        backgroundColor: props.backgroundColor,
        textColor: props.textColor,
      })
      const menu = ref(null)
      onMounted(() => {
        const menulist = menu.value
        if (menulist) {
          const menuItem = menulist.querySelectorAll('.i-menu-item')
          menuItem.forEach(element => {
            element.addEventListener('click', (e) => {
              menuItem.forEach(element => {
                element.style.color = props.textColor
              })
              element.style.color = props.activeTextColor
            })
          })
        }
      })
      return {
        ...toRefs(state), menu
      }
    }
  }
</script>
