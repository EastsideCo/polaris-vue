<template>
<span :class="classes">
    <span v-if="status != 'default'" class="Polaris-VisuallyHidden">
        {{ status.charAt(0).toUpperCase() + status.slice(1) }}
    </span>
    <span v-if="progress != 'default'" class="Polaris-Badge__Pip">
        <span class="Polaris-VisuallyHidden">
            {{ progress.charAt(0).toUpperCase() + progress.slice(1) }}
        </span>
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
        },
        progress: {
            type: String,
            default: 'default',
            validator(v) {
              return [
                  'default',
                  'incomplete',
                  'partiallyComplete',
                  'complete'
              ].indexOf(v) != -1;
            }
        },
        size: {
            type: String,
            default: 'default',
            validator(v) {
                return [
                    'default',
                    'small',
                    'medium'
                ].indexOf(v) != -1;
            }
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Badge', [
                'status','progress','size'
            ], this);
        }
    }
}
</script>
