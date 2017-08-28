<template>
<a class="Polaris-Link" 
   :href="url" 
   :target="external ? '_blank' : ''"
   @click="onClick">
    <slot></slot>
</a>
</template>

<script>
export default {
    props: {
        url: String,
        external: Boolean
    },
    methods: {
        onClick(e) {
            this.$emit('click', e);
        }
    }
};
</script>