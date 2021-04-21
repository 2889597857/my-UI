<template>
  <transition>
    <div class="i-carousel-item" v-if="selfIndex == currentIndex">
      <slot />
    </div>
  </transition>
</template>

<script>
  import { getCurrentInstance, inject, reactive, toRefs, watch } from 'vue'
  export default {
    name: "ICarouselItem",
    setup () {
      const intance = getCurrentInstance()
      const state = reactive({
        selfIndex: intance.vnode.key,
      })
      const currentIndex = inject('currentIndex')
      watch(() => currentIndex.value, value => state.currentIndex = value)
      return {
        ...toRefs(state), currentIndex
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