<template>
<dynamic-tag :tag="tag" class="Polaris-Heading">
    <slot></slot>
</dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue';

export default {
    props: {
        tag: {
            type: String,
            default: 'h2'
        }  
    },
    components: {
        DynamicTag
    }
}
</script>