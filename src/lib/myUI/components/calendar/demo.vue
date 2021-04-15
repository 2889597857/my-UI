<template>
  <i-calendar v-model="date" />
</template>

<script>
  import { ref } from 'vue'
  import ICalendar from './index.vue'
  export default {
    name: "CalendarDemo",
    components: { ICalendar },
    setup () {
      const date = ref(new Date())
      return {
        date
      }
    }
  }
</script>