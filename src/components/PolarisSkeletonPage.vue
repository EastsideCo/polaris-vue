<template>
<div 
    :class="classes"
    role="status"
    aria-label="Page loading">
    <div :class="headerClasses">
        <polaris-display-text 
            v-if="title"
            size="large" 
            element="h1">
            {{ title }}
        </polaris-display-text>
        <polaris-skeleton-display-text
            v-if="!title"
            size="large"/>

        <div class="Polaris-SkeletonPage__Actions">
            <div 
                v-for="action in secondaryActions"
                class="Polaris-SkeletonPage__Action"
                :style="{ width: (Math.round(Math.random() * 40 + 60)) + 'px' }">
                <polaris-skeleton-body-text :lines="1"/>
            </div>
        </div>
    </div>
    <div class="Polaris-SkeletonPage__Content">
        <slot></slot>
    </div>
</div>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisDisplayText from './PolarisDisplayText.vue';
import PolarisSkeletonDisplayText from './PolarisSkeletonDisplayText.vue';
import PolarisSkeletonBodyText from './PolarisSkeletonBodyText.vue';

export default {
    components: {
        PolarisDisplayText,
        PolarisSkeletonDisplayText,
        PolarisSkeletonBodyText,
    },
    props: {
        title: String,
        fullWidth: Boolean,
        secondaryActions: {
            type: Array,
            default() { return []; }
        },
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-SkeletonPage', [
                'fullWidth',
            ], this);
        },
        headerClasses() {
            return {
                'Polaris-SkeletonPage__Header': 1,
                'Polaris-SkeletonPage__Header--hasSecondaryActions': this.secondaryActions.length > 0
            };
        },
    },
}
</script>
