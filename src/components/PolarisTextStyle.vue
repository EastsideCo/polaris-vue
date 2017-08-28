<template>
<span :class="classes">
    <slot></slot>
</span>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        variation: {
            type: String,
            validator(v) {
                return [
                    'positive',
                    'negative',
                    'strong',
                    'subdued'
                ].indexOf(v) != -1;
            }
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-TextStyle', [
                'variation'
            ], this);
        }
    }
};
</script>