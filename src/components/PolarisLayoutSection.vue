<template>
<div :class="classes">
    <slot></slot>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        secondary: Boolean,
        fullWidth: Boolean,
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Layout__Section', [
                'secondary',
                'fullWidth',
            ], this);
        }
    }
}
</script>
