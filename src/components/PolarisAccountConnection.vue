<template>
<polaris-card sectioned>
    <polaris-setting-action>
        <polaris-stack slot="children">
            <polaris-stack-item v-if="connected && avatarUrl">
                <span :aria-label="realTitle" role="img" class="Polaris-Avatar Polaris-Avatar--styleSix Polaris-Avatar--hasImage Polaris-Avatar--sizeMedium">
                    <img :src="avatarUrl" class="Polaris-Avatar__Image" alt="" role="presentation">
                </span>
            </polaris-stack-item>
            <polaris-stack-item fill>
                <div class="Polaris-AccountConnection__Content">
                    <slot name="title">
                        <div>{{ realTitle }}</div>
                    </slot>
                    <div v-if="details || this.$slots.details">
                        <polaris-text-style variation="subdued">
                            <slot name="details">
                                {{ details }}
                            </slot>
                        </polaris-text-style>
                    </div>
                </div>
            </polaris-stack-item>
        </polaris-stack>
        <polaris-button slot="action" 
                        @click="handleAction(action)" 
                        :primary="!connected" 
                        :url="action.url"
                        :destructive="action.destructive"
                        :disabled="action.disabled"
                        :icon="action.icon"
                        :accessibility-label="action.accessibilityLabel">
            {{ action.content }}
        </polaris-button>
    </polaris-setting-action>
    <div v-if="$slots.default || $slots.termsOfService || termsOfService" class="Polaris-AccountConnection__TermsOfService">
        <slot>
            <slot name="termsOfService">
                {{ termsOfService }}
            </slot>
        </slot>
    </div>
</polaris-card>
</template>


<script>
import PolarisButton from './PolarisButton.vue';
import PolarisCard from './PolarisCard.vue';
import PolarisSettingAction from './PolarisSettingAction.vue';
import PolarisTextStyle from './PolarisTextStyle.vue';

export default {
    components: {
        PolarisButton,
        PolarisCard,
        PolarisTextStyle,
        PolarisSettingAction,
    },
    props: {
        connected: Boolean,
        action: Object,
        avatarUrl: String,
        accountName: String,
        title: String,
        details: String,
        termsOfService: String,
    },
    computed: {
        realTitle() {
            return this.title || this.accountName;
        }
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