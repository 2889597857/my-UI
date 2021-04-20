<template>
  <div class="i-date-picker" v-datepicker>
    <i-input v-model="dateShow" placeholder="请选择日期" @blur="blur">
      <template #icon><i class="iconfont icon-calculator"></i></template>
    </i-input>
    <i-calendar v-model="datepicker" v-show="content" ref="calendar" />
  </div>
</template>

<script>
  import { ref, watch, getCurrentInstance } from 'vue'
  import { computedDay } from '../../hooks'
  import IIput from '../Input/index.vue'
  import ICalendar from './calendar.vue'
  import { datepicker } from '../../directives'
  export default {
    name: "IDatePicker",
    components: { IIput, ICalendar },
    directives: {
      datepicker
    },
    setup () {
      const intance = getCurrentInstance()
      const { getYearMonthDay } = computedDay()
      let datepicker = ref(new Date())
      let dateShow = ref('')
      const calendar = ref(null)
      const inspectDate = () => {
        const { year, month, day } = getYearMonthDay(datepicker.value)
        dateShow.value = `${year}-${month + 1}-${day}`
      }
      watch(() => datepicker.value, () => {
        inspectDate()
      })
      const blur = () => {
        const a = dateShow.value.split('-')
        a[1] = parseInt(a[1]) - 1
        const b = new Date(a[0], a[1], a[2])
        if (b == 'Invalid Date') {
          inspectDate()
        } else {
          calendar.value.getToday(b)
        }
      }
      const content = ref(false)
      const showContent = () => {
        content.value = true
      }
      const hideContent = () => {
        content.value = false
      }
      return {
        datepicker, dateShow, blur, content, showContent, hideContent, calendar
      }
    }
  }
</script>
<style lang="scss" scoped>
  .i-date-picker {
    width: 210px;
  }
</style>