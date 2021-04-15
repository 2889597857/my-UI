<template>
  <div class="i-calendar">
    <div class="i-calendar-tit">
      <div>
        <span>{{ year }}年</span> <span>{{ month + 1 }}月</span>
      </div>
    </div>
    <div class="i-calendar-content">
      <div v-for="item in title" :key="item.id">
        {{ item }}
      </div>
      <div
        v-for="item in CalendarList"
        :key="item.id"
        @click="getToday(item)"
        :class="[
          'i-day',
          {
            notCurrentMonth: !isCurrentMonth(item),
          },
        ]"
      >
        {{ item.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
  import { computedDay } from '../../hooks'
  import { calendarTitle } from '../../data'
  import { onMounted, reactive, toRefs, watch } from 'vue'
  export default {
    name: "ICalendar",
    props: {
      modelValue: {
        type: Date,
        default: () => new Date()
      }
    },
    setup (props) {
      const state = reactive({
        CalendarList: [],
        title: calendarTitle,
        year: 0,
        month: 0,
        day: 0,
      })
      const { getYearMonthDay, monthCalendar } = computedDay()
      const getToday = thisDay => {
        console.log(thisDay)
        if (isCurrentMonth(thisDay)) {
          state.day = thisDay.getDate()
        } else {
          mothList(thisDay)
        }
      }
      const isCurrentMonth = thisDay => {
        const { year, month } = getYearMonthDay(thisDay)
        if (year == state.year && month == state.month) {
          return true
        } else {
          return false
        }

      }
      const isToday = thisDay => {
        const { year, month, day } = getYearMonthDay(thisDay)
        const { year: y, month: m, day: d } = getYearMonthDay(new Date())
        if (year == y && month == m && day == d) {
          return true
        } else {
          return false
        }
      }
      const changeMoth = (value) => {
        switch (value) {
          case 'next':
            var a = state.month + 1
            if (a <= 11) {
              mothList(new Date(state.year, a))
            } else {
              mothList(new Date(state.year + 1, 0))
            }
            break;
          case 'prev':
            var a = state.month - 1
            if (a < 0) {
              mothList(new Date(state.year - 1, 11))
            } else {
              mothList(new Date(state.year, a))
            }
            break;

          default:
            break;
        }
      }
      function mothList (day) {
        const a = getYearMonthDay(day)
        state.year = a.year
        state.month = a.month
        state.day = a.day
        state.CalendarList = monthCalendar(day)
      }

      onMounted(() => {
        mothList(props.modelValue)
      })
      return {
        ...toRefs(state),
        getToday,
        isCurrentMonth, isToday, mothList, changeMoth
      }
    }
  }
</script>  