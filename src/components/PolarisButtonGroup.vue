<template>
<div :class="classes">
    <slot></slot>
    <polaris-button-group-item v-for="slot, name in $slots" :key="name" v-if="name != 'default'">
        <slot :name="name"></slot>
    </polaris-button-group-item>
</div>
</template>


<script>
import PolarisButtonGroupItem from './PolarisButtonGroupItem.vue';

export default {
    components: {
        PolarisButtonGroupItem
    },
    props: {
        segmented: Boolean
    },
    computed: {
        classes() {
            return {
                'Polaris-ButtonGroup': true,
                'Polaris-ButtonGroup--segmented': this.segmented
            };
        }
    }
};
</script>