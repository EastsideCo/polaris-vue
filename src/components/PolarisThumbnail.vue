<template>
<span :class="classes">
    <img class="Polaris-Thumbnail__Image" :src="source" :alt="alt">
</span>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        size: {
            type: String,
            default: 'medium',
            validator(v) {
                return [
                    'small',
                    'medium',
                    'large',
                ].indexOf(v) != -1;
            }
        },
        source: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Thumbnail', [
                'size',
            ], this);
        }
    }
};
</script> 