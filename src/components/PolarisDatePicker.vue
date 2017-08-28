<template>
<div class="Polaris-DatePicker"
     @keydown="handleKeyDown"
     @keyup="handleKeyUp">
    <div class="Polaris-DatePicker__Header">
        <polaris-button 
            plain
            :icon="arrowLeft"
            :accessibility-label="prevMonthChangeLabel"
            @click="handlePrevMonthClick">
        </polaris-button>
        <polaris-button
            plain
            :icon="arrowRight"
            :accessibility-label="nextMonthChangeLabel"
            @click="handleNextMonthClick">
        </polaris-button>
    </div>
    <div class="Polaris-DatePicker__MonthContainer">
        <polaris-date-picker-month
            @focus="handleFocus"
            :focused-date="focusDate"
            :month="month"
            :year="year"
            :selected="selected"
            :hover-date="hoverDate"
            @change="handleDateSelection"
            @hover="handleHover"
            :disable-dates-before="disableDatesBefore"
            :disable-dates-after="disableDatesAfter"
            :allow-range="allowRange">
        </polaris-date-picker-month>
        <polaris-date-picker-month
            v-if="multiMonth"
            @focus="handleFocus"
            :focused-date="focusDate"
            :month="nextMonth"
            :year="nextMonthYear"
            :selected="selected"
            :hover-date="hoverDate"
            @change="handleDateSelection"
            @hover="handleHover"
            :disable-dates-before="disableDatesBefore"
            :disable-dates-after="disableDatesAfter"
            :allow-range="allowRange">
        </polaris-date-picker-month>
    </div>
</div>
</template>


<script>
import PolarisDatePickerMonth from './PolarisDatePickerMonth.vue';
import PolarisButton from './PolarisButton.vue';
import dateUtils from '../data/date-utils.js';

import arrowLeft from '../resources/arrow-left.svg';
import arrowRight from '../resources/arrow-right.svg';

export default {
    model: {
        prop: 'selected',
        event: 'change',
    },
    components: {
        PolarisButton,
        PolarisDatePickerMonth
    },
    props: {
        selected: [Date, Object],
        month: {
            type: Number,
            default() {
                return (new Date()).getMonth();
            }
        },
        year: {
            type: Number,
            default() {
                return (new Date()).getFullYear();
            }
        },
        disableDatesBefore: Date,
        disableDatesAfter: Date,
        multiMonth: Boolean
    },
    data() {
        return {
            arrowLeft: arrowLeft,
            arrowRight: arrowRight,
            
            hoverDate: null,
            focusDate: null,
        };
    },
    computed: {
        allowRange() {
            return this.selected && !(this.selected instanceof Date);
        },
        prevMonthChangeLabel() {
            var prevMonthName = dateUtils.months[this.prevMonth];
            return 'Show previous month, '+prevMonthName+' '+this.prevMonthYear;
        },
        nextMonthChangeLabel() {
            var nextMonthName = dateUtils.months[this.nextMonth];
            return 'Show next month, '+nextMonthName+' '+this.nextMonthYear;
        },
        prevMonth() {
            var month = this.month;
            if (month == 0) {
                month = 11;
            } else {
                month--;
            }
            return month;
        },
        prevMonthYear() {
            var month = this.month;
            var year = this.year;
            if (month == 0) {
                year--;
            }
            return year;
        },
        nextMonth() {
            var month = this.month;
            if (month == 11) {
                month = 0;
            } else {
                month++;
            }
            return month;
        },
        nextMonthYear() {
            var month = this.month;
            var year = this.year;
            if (month == 11) {
                year++;
            }
            return year;
        },
    },
    methods: {
        handleDateSelection(e) {
            this.hoverDate = e.end;
            this.focusDate = new Date(e.end);
            
            if (this.allowRange) {
                this.$emit('change', e);
            } else {
                this.$emit('change', e.end);
            }
        },
        handleKeyDown(e) {
            
        },
        handleKeyUp(e) {
            
        },
        handlePrevMonthClick() {
            this.focusDate = null;
            this.$emit('monthchange', {
                month: this.prevMonth,
                year: this.prevMonthYear
            });
        },
        handleNextMonthClick() {
            this.focusDate = null;
            this.$emit('monthchange', {
                month: this.nextMonth,
                year: this.nextMonthYear
            });
            
        },
        handleFocus() {
            
        },
        handleHover() {
            
        }
    }
};
</script>