<template>
<dynamic-tag :tag="tag" class="Polaris-Subheading">
    <slot></slot>
</dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue';

export default {
    props: {
        tag: {
            type: String,
            default: 'h3'
        }  
    },
    components: {
        DynamicTag
    }
}
</script>