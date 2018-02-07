<template>
<div :class="classes">
    <slot></slot>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        spacing: {
            type: String,
            validate(s) {
                return ['tight','loose'].indexOf(s) > -1;
            },
            default: 'tight',
        },
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-TextContainer', [
                'spacing',
            ], this);
        },
    },
    
};
</script>
