<template>
<dynamic-tag :tag="tag">
    <slot></slot>
</dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue';

import ComponentHelpers from '../ComponentHelpers.js';

export default {
    components: {
        DynamicTag
    },
    props: {
        type: {
            type: String,
            default: 'bullet'
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClas('Polaris-List', [
                'type'
            ], this);
        },
        tag() {
            return this.type == 'bullet' ? 'ul' : 'ol';
        }
    }
};
</script>