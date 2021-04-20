<template>
  <div class="i-calendar">
    <div class="i-calendar-title">
      <div class="i-title-right">
        <span @click="changeYear('prev')"
          ><i class="iconfont icon-first"></i
        ></span>
        <span @click="changeMoth('prev')"
          ><i class="iconfont icon-left"></i
        ></span>
      </div>
      <div>
        <span>{{ year }}年</span> <span>{{ month + 1 }}月</span>
      </div>
      <div class="i-title-right">
        <span @click="changeMoth('next')"
          ><i class="iconfont icon-right"></i
        ></span>
        <span @click="changeYear('next')"
          ><i class="iconfont icon-last"></i
        ></span>
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
            today: isToday(item, datepicker),
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
  import { onMounted, ref, toRefs, watch } from 'vue'
  export default {
    name: "ICalendar",
    props: {
      modelValue: {
        type: Date,
        default: () => new Date()
      }
    },
    emits: ['update:modelValue'],
    setup (props, { emit }) {
      const {
        state, isCurrentMonth, changeMoth, mothList, isToday, changeYear
      } = computedDay()
      const datepicker = ref()
      const getToday = thisDay => {
        datepicker.value = thisDay
        emit('update:modelValue', thisDay)
        mothList(thisDay)
      }
      onMounted(() => {
        mothList(props.modelValue)
        datepicker.value = new Date()
      })
      return {
        ...toRefs(state),
        getToday,
        isCurrentMonth, isToday, mothList, changeMoth, datepicker, changeYear
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-title-right {
    width: 25%;
    span {
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
    }
  }
</style>