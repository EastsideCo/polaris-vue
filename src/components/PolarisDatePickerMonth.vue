<template>
<div role="grid" class="Polaris-DatePicker__Month">
    <div :class="titleClasses">
        {{ realMonthName }} {{ year }}
    </div>
    <div role="rowheader" class="Polaris-DatePicker__WeekHeadings">
        <polaris-date-picker-weekday 
            v-for="dayName, dayIndex in weekdays"
            :key="dayIndex"
            :title="abbreviateWeekday(dayName)"
            :current="current && new Date().getDay() === dayIndex"
            :label="dayName">
        </polaris-date-picker-weekday>
    </div>
    <div v-for="week, index in weeks">
        <div role="row" class="Polaris-DatePicker__Week" key="index">
            <template v-for="day, dayIndex in week">
                <polaris-date-picker-day
                    v-if="!day"
                    :key="dayIndex"
                    @hover="handleHoverEmptyDay">
                </polaris-date-picker-day>
                <polaris-date-picker-day
                    v-if="day"
                    :focused="focusedDate && isSameDay(focusedDate, day)"
                    :day="day"
                    @focus="handleFocus(day)"
                    @click="handleDayClick(day)"
                    @hover="handleHover(day)"
                    :selected="selected && dateIsSelected(day)"
                    :in-range="selected && dateIsInRange(day)"
                    :disabled="dateIsDisabled(day)"
                    :in-hovering-range="selected && hoverDate && isInHoveringRange(day)">
                </polaris-date-picker-day>
            </template>
        </div>
    </div>
</div>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisDatePickerWeekday from './PolarisDatePickerWeekday.vue';
import PolarisDatePickerDay from './PolarisDatePickerDay.vue';
import dateUtils from '../data/date-utils.js';

export default {
    components: {
        PolarisDatePickerWeekday,
        PolarisDatePickerDay
    },
    data() {
        return {
            weekdays: dateUtils.weekdays.slice()
        };
    },
    props: {
        focusedDate: Date,
        selected: [Date, Object],
        hoverDate: Date,
        month: Number,
        year: Number,
        disableDatesBefore: Date,
        disableDatesAfter: Date,
        allowRange: Boolean,
        monthName: String,
        weekdayName: String,
    },
    computed: {
        titleClasses() {
            return {
                'Polaris-DatePicker__Title': 1,
                'Polaris-DatePicker__Month--current': this.current
            };
        },
        current() {
            return new Date().getMonth() === this.month;
        },
        weeks() {
            const firstOfMonth = new Date(this.year, this.month, 1);
            const firstDayOfWeek = firstOfMonth.getDay();
            const weeks = [[]];
            
            var currentWeek = weeks[0];
            var currentDate = firstOfMonth;
            
            for (let i = 0; i < firstDayOfWeek; i++) {
                currentWeek.push(null);
            }
            
            while (currentDate.getMonth() === this.month) {
                if (currentWeek.length === 7) {
                    currentWeek = [];
                    weeks.push(currentWeek);
                }
            
                currentWeek.push(currentDate);
                currentDate = new Date(this.year, this.month, currentDate.getDate() + 1);
            }
            
            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }
            
            return weeks;
        },
        realMonthName() {
            return dateUtils.months[this.month];
        }
    },
    methods: {
        handleHoverEmptyDay() {
            const lastDayOfMonth = new Date(this.year, this.month + 1, 0);
            this.$emit('hover', lastDayOfMonth);
        },
        handleHover(day) {
            this.$emit('hover', day);
        },
        handleFocus(day) {
            this.$emit('focus', day);
        },
        handleDayClick(day) {
            var newValue = null;
            if (!this.selected) {
                newValue = {
                    start: day,
                    end: day
                }
            } else {
                var start = this.selected.start;
                var end = this.selected.end;
                if (end && start !== end) {
                    newValue = {
                        start: day,
                        end: day
                    };
                }  else if (start) {
                    if (day < start) {
                        newValue = {
                            start: day,
                            end: day
                        };
                    } else {
                        newValue = {
                            start: start,
                            end: day
                        };
                    }
                } else if (end) {
                    if (day < end) {
                        newValue = {
                            start: day,
                            end: end
                        }
                    } else {
                        newValue = {
                            start: day,
                            end: day
                        };
                    }
                } else {
                    newValue = {
                        start: day,
                        end: day
                    };
                }
            }
            this.$emit('change', newValue);
        },
        
        dateIsDisabled(day) {
            if (this.disableDatesBefore && (day < this.disableDatesBefore)
                || (this.disableDatesAfter && (day > this.disableDatesAfter))) {
                return true;
            }
            return false;
        },
        dateIsSelected(day) {
            if (!day) { return false; }
            if (this.selected instanceof Date) {
                return this.isSameDay(day, this.selected);
            }
            var start = this.selected.start;
            var end = this.selected.end;
            return Boolean((start && this.isSameDay(start, day)) ||
                            (end && this.isSameDay(end, day)));
        },
        dateIsInRange(day) {
            if (!day) { return false; }
            var start = this.selected.start;
            var end = this.selected.end;
            return Boolean((start && day > start) && (end && day < end));
        },
        isSameDay(day1, day2) {
            return (
                (day1.getDate() === day2.getDate()) &&
                (day1.getMonth() === day2.getMonth()) &&
                (day1.getFullYear() === day2.getFullYear())
            );
        },
        abbreviateWeekday(day) {
            return day.substring(0, 2);
        },
        isInHoveringRange(day) {
            if (!this.allowRange) { return false; }
            if (!day) { return false; }
            
            return Boolean((this.selected.start === this.selected.end) &&
                            (day > this.selected.start) &&
                            (day <= this.hoverDate));
        }
    }
}
</script>
