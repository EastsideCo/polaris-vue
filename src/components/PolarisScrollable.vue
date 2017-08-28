<template>
<div :class="classes" ref="scrollArea" @scroll="$forceUpdate()">
    <slot></slot>
</div>
</template>


<script>
export default {
    props: {
        vertical: {
            type: Boolean,
            default: true
        },
        horizontal: Boolean,
        shadow: Boolean
    },
    computed: {
        topShadow() {
            var scrollArea = this.$refs.scrollArea;
            if (!scrollArea) { return false; }
            
            var scrollTop = scrollArea.scrollTop;
            return scrollTop > 0;
        },
        bottomShadow() {
            var scrollArea = this.$refs.scrollArea;
            if (!scrollArea) { return false; }
            
            return !(scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight);
        },
        classes() {
            var r = {
                'Polaris-Scrollable': true,
                'Polaris-Scrollable--vertical': this.vertical,
                'Polaris-Scrollable--horizontal': this.horizontal,
                'Polaris-Scrollable--hasTopShadow': this.topShadow,
                'Polaris-Scrollable--hasBottomShadow': this.bottomShadow
            };
            return r;
            
        }
    }
};
</script>