<template>
<span :class="classes">
    <span v-if="status != 'default'" class="Polaris-VisuallyHidden">
        {{ status.charAt(0).toUpperCase() + status.slice(1) }}
    </span>
    <slot></slot>
</span>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    props: {
        status: {
            type: String,
            default: 'default',
            validator(v) {
                return [
                    'default',
                    'success',
                    'info',
                    'attention',
                    'warning',
                ].indexOf(v) != -1;
            }
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Badge', [
                'status'
            ], this);
        }
    }
}
</script>