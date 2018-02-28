<template>
<div :class="classes">
    <polaris-page-header
        :title="title"
        :icon="icon"
        :breadcrumbs="breadcrumbs"
        :separator="separator"
        :primary-action="primaryAction"
        :secondary-actions="secondaryActions"
        :pagination="pagination"
        :action-groups="actionGroups"/>

    <div class="Polaris-Page__Content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';
import PolarisPageHeader from './PolarisPageHeader.vue';

export default {
    components: {
        PolarisPageHeader,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: String,
        breadcrumbs: {
            type: Array,
            default() {
                return [];
            }
        },
        fullWidth: Boolean,
        singleColumn: Boolean,
        secondaryActions: {
            type: Array,
            default() {
                return [];
            }
        },
        separator: Boolean,
        primaryAction: Object,
        pagination: Object,
        actionGroups: Array,
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Page', [
                'fullWidth'
            ], this);
        },
        headerClasses() {
            var r = {
                'Polaris-Page__Header': true
            };
            if (this.breadcrumbs.length > 0) {
                r['Polaris-Page__Header--hasBreadcrumbs'] = true;
            }
            if (this.pagination) {
                r['Polaris-Page__Header--hasPagination'] = true;
            }

            return r;
        }
    },
    methods: {
        handleAction(action, handleUrl) {
            if (action.onAction) {
                action.onAction();
            }
            if (handleUrl && action.url) {
                window.location.href = action.url;
            }
        }
    }
};
</script>
