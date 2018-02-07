export default {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    isSameDay(a, b) {
        return (a.getDate() == b.getDate()) &&
               (a.getMonth() == b.getMonth()) &&
               (a.getFullYear() == b.getFullYear());
    }
}
