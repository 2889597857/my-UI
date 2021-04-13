<template>
  <transition>
    <div class="i-carousel-item" v-if="selfIndex == currentIndex">
      <slot />
    </div>
  </transition>
</template>

<script>
  import { getCurrentInstance, reactive, toRefs, watch } from 'vue'
  export default {
    name: "ICarouselItem",
    setup () {
      const intance = getCurrentInstance()
      const state = reactive({
        selfIndex: intance.vnode.key,
        currentIndex: intance.parent.ctx.currentIndex
      })
      watch(() => intance.parent.ctx.currentIndex, value => {
        state.currentIndex = value
      })
      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s linear;
  }
  .v-enter-active {
    transform: translateX(100%);
  }
  .v-enter-to {
    transform: translateX(0);
  }
  .v-leave-active {
    transform: translateX(0);
  }
  .v-leave-to {
    transform: translateX(-100%);
  }
</style>