<template>
<div class="Polaris-ColorPicker__AlphaPicker" ref="slider">
    <div class="Polaris-ColorPicker__ColorLayer" :style="background"></div>
    <polaris-color-picker-slidable 
        :dragger-y="offset"
        :dragger-x="0"
        @change="onChange"
        @draggerheight="handleDraggerHeight">
    </polaris-color-picker-slidable >
</div>
</template>

<script>
import HSBColor from '../data/HSBColor.js';

import PolarisColorPickerSlidable from './PolarisColorPickerSlidable.vue';

const VERTICAL_PADDING = 13;


export default {
    model: {
        prop: 'alpha',
        event: 'change'
    },
    components: {
        PolarisColorPickerSlidable
    },
    props: {
        color: {
            type: Object,
            default() {
                return new HSBColor(0, 1, 1, 1);
            }
        },
        alpha: Number
    },
    data() {
        return {
            dragging: false,
            sliderHeight: 0,
            draggerHeight: 0
        };
    },
    mounted() {
        this.sliderHeight = this.$refs.slider.clientHeight;
    },
    computed: {
        offset() {
            return this.offsetForAlpha(this.alpha, this.sliderHeight, this.draggerHeight);
        },
        background() {
            const hslColor = new HSBColor(this.color.hue, this.color.saturation, this.color.brightness, this.color.alpha);
            const rgbColor = hslColor.toRGB();
            const rgb = rgbColor.red + ', ' +
                        rgbColor.green + ', ' +
                        rgbColor.blue;
                        
            return {
                background: 'linear-gradient(to top, rgba('+rgb+', 0) 18px, rgba('+rgb+', 1) calc(100% - 18px))'
            };
        }
    },
    methods: {
        handleDraggerHeight(e) {
            this.draggerHeight = e;
        },
        onChange(e) {
            this.$emit('change', this.alphaForOffset(e.y, this.sliderHeight));
        },
        alphaForOffset(offset, sliderHeight) {
            const selectionHeight = (offset - VERTICAL_PADDING);
            const slideableArea = sliderHeight - (2 * VERTICAL_PADDING);
            return Math.max(0, Math.min(1, 1 - (selectionHeight / slideableArea)));
        },
        offsetForAlpha(alpha, sliderHeight, draggerHeight) {
            const slideableArea = sliderHeight - (draggerHeight + VERTICAL_PADDING);
            return Math.max(0, Math.min(sliderHeight - draggerHeight, (1-alpha) * slideableArea) + VERTICAL_PADDING);
            
        }
    }
}
</script>