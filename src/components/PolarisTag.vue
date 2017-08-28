<template>
    <span class="Polaris-Tag">
        <span>
            <slot></slot>
        </span>
        <button
            aria-label="Remove"
            class="Polaris-Tag__Button"
            @click="onRemove"
            @mouseUp="handleMouseUp">
            <polaris-icon :source="cancelSmall"></polaris-icon>
        </button>
    </span>
</template>


<script>
import PolarisIcon from './PolarisIcon.vue';

import cancelSmall from '../resources/cancel-small.svg';


export default {
    data() {
        return {
            cancelSmall: cancelSmall
        };
    },
    methods: {
        components: {
            PolarisIcon
        },
        onRemove() {
            this.$emit('remove');
        },
        handleMouseUp(e) {
            e.currentTarget.blur();
        }
    }
};
</script>