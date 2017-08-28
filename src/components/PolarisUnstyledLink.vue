<template>
<a :href="url" 
   :target="external ? '_blank' : ''"
   :rel="external ? 'noopener noreferrer' : ''"
   data-polaris-unstyled="true">
    <slot></slot>
</a>
</template>

<script>
export default {
    props: {
        url: String,
        external: Boolean,
    }
}
</script>