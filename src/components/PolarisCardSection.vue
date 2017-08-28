<template>
<div :class="classes">
    <div v-if="title" class="Polaris-Card__SectionHeader">
        <polaris-subheading tag="h3">
            {{ title }}
        </polaris-subheading>
    </div>
    <slot></slot>
</div>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisSubheading from './PolarisSubheading.vue';

export default {
    components: {
        PolarisSubheading,
    },
    props: {
        subdued: Boolean,
        title: String,
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Card__Section', [
                'subdued',
            ], this);
        }
    }
}
</script>