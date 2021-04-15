<template>
  <div class="i-date-picker">
    <i-input placeholder="请选择日期">
      <template #icon><i class="iconfont icon-calculator"></i></template>
    </i-input>
    <i-calendar />
  </div>
</template>

<script>
  import { onMounted, reactive, ref } from 'vue'
  import { computedDay } from '../../hooks'
  import IIput from '../Input/index.vue'
  import ICalendar from './calendar.vue'
  export default {
    name: "IDatePicker",
    components: { IIput, ICalendar },
    setup () {
      const { getYearMonthDay, monthCalendar } = computedDay()
      let datepicker = ref()
      onMounted(() => {
        datepicker.value = new Date()
      })
      return {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .i-date-picker {
    width: 210px;
  }
</style>