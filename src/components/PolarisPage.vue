<template>
<div :class="classes">
    <div :class="headerClasses">
        <div v-if="breadcrumbs.length > 0 || pagination" class="Polaris-Page__Navigation">
            <polaris-breadcrumbs v-if="breadcrumbs.length > 0"
                                 :breadcrumbs="breadcrumbs">
            </polaris-breadcrumbs>

            <div v-if="pagination" class="Polaris-Page__Pagination">
                <polaris-pagination></polaris-pagination>
            </div>
        </div>
        <polaris-display-text size="large">
            {{ title }}
        </polaris-display-text>
        <div v-if="primaryAction || secondaryActions.length > 0"
             class="Polaris-Page__Actions">
            <div v-if="primaryAction" class="Polaris-Page__PrimaryAction">
                <polaris-button primary
                    @click="handleAction(primaryAction, true)">
                    {{ primaryAction.content }}
                </polaris-button>
            </div>
            <div v-if="secondaryActions.length > 0" class="Polaris-Page__SecondaryActions">
                <div class="Polaris-Page__IndividualActions">
                    <button v-for="action in secondaryActions"
                            class="Polaris-Page__Action"
                            @click="handleAction(action, true)">
                        {{ action.content }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="Polaris-Page__Content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    components: {
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
        secondaryActions: {
            type: Array,
            default() {
                return [];
            }
        },
        primaryAction: Object,
        pagination: Object
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
