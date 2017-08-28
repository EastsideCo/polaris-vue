<template>
<dynamic-tag :tag="element" :class="classes">
    <slot></slot>
</dynamic-tag>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js';
import DynamicTag from './DynamicTag.vue';

export default {
    props: {
        element: {
            type: String,
            default: 'p'
        },
        size: {
            type: String,
            default: 'default',
            validator: (v) => {
                return [
                    'default',
                    'small',
                    'medium',
                    'large',
                    'extraLarge'
                ].indexOf(v) !== -1;
            }
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-DisplayText', [
                'size',
            ], this);
        }
    },
    components: {
        DynamicTag
    }
}
</script>