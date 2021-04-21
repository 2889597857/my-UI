<template>
  <div class="i-carousel" @mouseleave="mouseleave" @mouseenter="mouseenter">
    <dot
      :itemLen="itemLen"
      :currentIndex="currentIndex"
      v-show="pagination"
      @dotClick="dotClick"
    />
    <div v-show="director">
      <dorDirector dir="next" @dirClick="dirClick" />
      <dorDirector dir="prev" @dirClick="dirClick" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
  import carousel from './carousel.js'
  import { onBeforeUnmount, onMounted, toRefs, getCurrentInstance, provide, watch } from 'vue'
  import dorDirector from './director.vue'
  import dot from './dot.vue'
  export default {
    name: 'ICarousel',
    components: { dot, dorDirector },
    props: {
      autoPlay: {
        type: Boolean,
        default: true
      },
      duration: {
        type: Number,
        default: 3000
      },
      initial: {
        type: Number,
        default: 0
      },
      direction: {
        type: String,
        default: 'next'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      director: {
        type: Boolean,
        default: true
      },
    },
    setup (props, { slots }) {
      const intance = getCurrentInstance()
      const { currentIndex, itemLen, autoPlay, stop, dotClick, mouseleave, mouseenter, dirClick } = carousel(props)
      onMounted(() => {
        itemLen.value = intance.slots.default()[0].children.length
        autoPlay()
      })
      onBeforeUnmount(() => {
        stop()
      })
      return {
        currentIndex, itemLen, dotClick, mouseleave, mouseenter, dirClick
      }
    }

  }
</script>
