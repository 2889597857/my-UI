<template>
  <div class="i-calendar">
    <div class="i-calendar-title">
      <div>
        <span>{{ year }}年</span> <span>{{ month + 1 }}月</span>
      </div>
      <div class="title-right">
        <span @click="changeMoth('prev')">上个月</span>
        <span @click="mothList(new Date())">今天</span>
        <span @click="changeMoth('next')">下个月</span>
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
          {
            today: isToday(item),
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
  import { onMounted, toRefs } from 'vue'
  export default {
    name: "ICalendar",
    props: {
      modelValue: {
        type: Date,
        default: () => new Date()
      }
    },
    setup (props) {
      const {
        state, isCurrentMonth, getToday, isToday, changeMoth, mothList
      } = computedDay()
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