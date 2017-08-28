<template>
<div class="Polaris-ColorPicker__HuePicker" ref="picker">
    <polaris-color-picker-slidable
        :dragger-y="offset"
        :dragger-x="0"
        @change="handleChange"
        @draggerheight="handleDraggerHeight">
    </polaris-color-picker-slidable>
</div>
</template>

<script>
import PolarisColorPickerSlidable from './PolarisColorPickerSlidable.vue';

const VERTICAL_PADDING = 13;

export default {
    components: {
        PolarisColorPickerSlidable
    },
    model: {
        prop: 'hue',
        event: 'change'
    },
    props: {
        hue: Number,
    },
    data() {
        return {
            dragging: false,
            sliderHeight: 0,
            draggerHeight: 0
        };
    },
    mounted() {
        this.sliderHeight = this.$refs.picker.clientHeight;
    },
    computed: {
        offset() {
            return this.offsetForHue(this.hue, this.sliderHeight, this.draggerHeight);
        }
    },
    methods: {
        handleDraggerHeight(e) {
            this.draggerHeight = e;
        },
        handleChange(e) {
            this.$emit('change', this.hueForOffset(e.y, this.sliderHeight));
        },
        offsetForHue(hue, sliderHeight, draggerHeight) {
            const slidableArea = sliderHeight - (VERTICAL_PADDING);
            return Math.max(VERTICAL_PADDING, Math.min(sliderHeight - draggerHeight, (hue / 360 * slidableArea)));
        },
        hueForOffset(offset, sliderHeight) {
            const selectionHeight = offset - VERTICAL_PADDING;
            const slidableArea = sliderHeight - (2 * VERTICAL_PADDING);
            return Math.max(0, Math.min(360, (selectionHeight / slidableArea) * 360));
        }
    }
    
};
</script>