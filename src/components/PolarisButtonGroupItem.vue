<template>
<div :class="classes" 
     @focusin="focused = true"
     @focusout="focused = false"
     tabindex="-1">
    <slot></slot>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    data() {
        return {
            focused: false
        };
    },
    props: {
        plain: Boolean,
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-ButtonGroup__Item', [
                'focused',
                'plain',
            ], this);
        }
    }
}
</script>
