import { reactive } from 'vue';
import { calendarTitle } from '../data'
export default function computedDay () {
    function getYearMonthDay (date) {
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let seconds = date.getSeconds()
        return { year, month, day, hour, minute, seconds }
    }
    function getDay (year, month, day) {
        return new Date(year, month, day)
    }
    function monthCalendar (date) {
        if (date instanceof Date) {
            const { year, month } = getYearMonthDay(date)
            const currentFirstDay = getDay(year, month, 1)
            const week = currentFirstDay.getDay()
            const a = currentFirstDay - week * 60 * 60 * 1000 * 24
            const arr = []
            for (let index = 0; index < 42; index++) {
                arr.push(new Date(a + index * 60 * 60 * 1000 * 24))
            }
            return arr
        }
    }
    const state = reactive({
        CalendarList: [],
        title: calendarTitle,
        year: 0,
        month: 0,
        day: 0,
    })
    const isCurrentMonth = thisDay => {
        const { year, month } = getYearMonthDay(thisDay)
        if (year == state.year && month == state.month) {
            return true
        } else {
            return false
        }
    }
    const getToday = thisDay => {
        if (isCurrentMonth(thisDay)) {
            state.day = thisDay.getDate()
        } else {
            mothList(thisDay)
        }
    }
    const isToday = (thisDay, nowDay = new Date()) => {
        const { year, month, day } = getYearMonthDay(thisDay)
        const { year: y, month: m, day: d } = getYearMonthDay(nowDay)
        if (year == y && month == m && day == d) {
            return true
        } else {
            return false
        }
    }
    const changeMoth = (value) => {
        let nowDate = getDay(state.year, state.month, 1)
        switch (value) {
            case 'next':
                nowDate.setMonth(nowDate.getMonth() + 1)
                break;
            case 'prev':
                nowDate.setMonth(nowDate.getMonth() - 1)
                break;
            default:
                break;
        }
        mothList(nowDate)
    }
    const changeYear = (value) => {
        let nowDate = getDay(state.year, state.month, 1)
        switch (value) {
            case 'next':
                nowDate.setFullYear(nowDate.getFullYear() + 1)
                break;
            case 'prev':
                nowDate.setFullYear(nowDate.getFullYear() - 1)
                break;
            default:
                break;
        }
        mothList(nowDate)
    }
    function mothList (day) {
        const a = getYearMonthDay(day)
        state.year = a.year
        state.month = a.month
        state.day = a.day
        state.CalendarList = monthCalendar(day)
    }
    return {
        state, isCurrentMonth, getToday, isToday, changeMoth, changeYear, mothList, getYearMonthDay
    }
}
