<template>
<div :aria-label="label" class="Polaris-DatePicker__Weekday">
    {{ title }}
</div>
</template>


<script>
export default {
    props: {
        label: {
            type: String,
            validate(v) {
                return [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ].indexOf(v) > -1;
            }
        },
        title: String
    }
}
</script>