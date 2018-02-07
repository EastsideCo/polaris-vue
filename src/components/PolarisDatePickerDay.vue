<template>
<button
    ref="button"
    @focus="onFocus"
    :tabindex="tabIndex"
    :class="classes"
    @mouseover="handleHover"
    @click="handleClick"
    :aria-label="accessibilityLabel"
    :aria-selected="selected"
    :aria-disabled="disabled"
    role="gridcell">
    {{ dayNumber }}
</button>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';
import dateUtils from '../data/date-utils.js';

export default {
    props: {
        focused: Boolean,
        day: Date,
        selected: Boolean,
        inRange: Boolean,
        inHoveringRange: Boolean,
        disabled: Boolean,
    },
    computed: {
        dayNumber() {
            return this.day ? this.day.getDate() : null;
        },
        today() {
            return dateUtils.isSameDay(this.day, new Date());
        },
        accessibilityLabel() {
            if (!this.day) { return null; }
            return [
                this.today ? 'Today' : '',
                dateUtils.months[this.day.getMonth()],
                this.day.getDate(),
                this.day.getFullYear()
            ].join(' ');
        },
        classes() {
            if (!this.day) {
                return 'Polaris-DatePicker__EmptyDay';
            }
            var r = ComponentHelpers.makeComponentClass('Polaris-DatePicker__Day', [
                'selected',
                'disabled',
                'today',
            ], this);
            
            if ((this.inRange || this.inHoveringRange) && !this.disabled) {
                r['Polaris-DatePicker__Day--inRange'] = true;
            }
            return r;
        },
        tabIndex() {
            if ((this.focused || this.selected || this.day === 1) && !this.disabled) {
                return 0;
            }
            return -1;
        }
    },
    methods: {
        onFocus() {
            this.$emit('focus', this.day);
        },
        handleHover() {
            this.$emit('hover', this.day);
        },
        handleClick() {
            if (!this.disabled) {
                this.$emit('click', this.day);
            }
        }
        
    }
}
</script>
