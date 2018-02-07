<template>
<div :aria-hidden="!open"
     :style="{ height: displayHeight }"
     :class="classes"
     ref="wrapper">
    <div ref="heightNode">
        <slot></slot>
    </div>
</div>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisVueCollapseTransition from './transitions/CollapseTransition.vue';

export default {
    components: {
        PolarisVueCollapseTransition,
    },
    props: {
        open: Boolean
    },
    data() {
        return {
            height: null,
            animationState: 'idle'
        };
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Collapsible', [
                'open'
            ], this);
        },
        displayHeight() {
            return this.open ? 'auto' : 0;
        }
    }
}
</script>
