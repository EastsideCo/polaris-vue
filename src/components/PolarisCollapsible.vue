<template>
    <div :aria-hidden="!open"
         :style="{ height: displayHeight }"
         :class="classes"
         ref="wrapper">
         <polaris-vue-collapse-transition>
            <div ref="heightNode">
                <slot></slot>
            </div>
        </polaris-vue-collapse-transition>
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
