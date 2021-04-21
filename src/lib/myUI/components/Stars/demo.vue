<template>
  <div class="star">
    <stars v-model="num" />
    <h1>{{ star }}</h1>
  </div>
</template>

<script>
  import { computed, ref } from 'vue'
  import Stars from './Stars.vue'
  export default {
    components: { Stars },
    setup () {
      let num = ref(3)
      const star = computed(() => {
        return `${num.value} 星`
      })
      return {
        num, star
      }
    }
  }
</script>

<style lang="scss" scoped>
  .star {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
    }
  }
</style>
