<template>
<img :src="source" :srcSet="finalSourceSet" :alt="alt">
</template>

<script>
export default {
    props: {
        alt: String,
        source: String,
        sourceSet: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {
        finalSourceSet() {
            return this.sourceSet.map((item) => item.source + ' ' + item.descriptor).join(',');
        }
    }
};
</script>