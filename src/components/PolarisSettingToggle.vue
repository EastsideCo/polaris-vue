<template>
<polaris-card sectioned>
    <polaris-setting-action>
        <template slot="children">
            <slot></slot>
        </template>
        <polaris-button slot="action" 
                        :primary="!enabled" 
                        @click="handleAction(action)" 
                        :url="action.url"
                        :accessibility-label="action.accessibilityLabel"
                        :disabled="action.disabled"
                        :destructive="action.destructive"
                        :icon="action.icon">
            {{ enabled ? 'Disable' : 'Enable' }}
        </polaris-button>
    </polaris-setting-action>
</polaris-card>
</template>

<script>
import PolarisCard from './PolarisCard.vue';
import PolarisSettingAction from './PolarisSettingAction.vue';
import PolarisButton from './PolarisButton.vue';

export default {
    components: {
        PolarisCard,
        PolarisSettingAction,
        PolarisButton,
    },
    props: {
        action: Object,
        enabled: Boolean
    },
    methods: {
        handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
};
</script>