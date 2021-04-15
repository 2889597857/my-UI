export default function computedDay () {
    function getYearMonthDay (date) {
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        return { year, month, day }
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

    return {
        getYearMonthDay, getDay, monthCalendar,
    }
}
