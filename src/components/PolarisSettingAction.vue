<template>
<div class="Polaris-SettingAction">
    <div class="Polaris-SettingAction__Setting">
        <slot name="children"></slot>
    </div>
    <div v-if="$slots.action || action" class="Polaris-SettingAction__Action">
        <slot name="action">
            <polaris-button v-if="action" 
                            primary 
                            @click="handleAction(action)"
                            :url="action.url"
                            :destructive="action.destructive"
                            :disabled="action.disabled"
                            :icon="action.icon"
                            :accessibility-label="action.accessibilityLabel">
                {{ action.content }}
            </polaris-button>
        </slot>
    </div>
</div>
</template>

<script>
export default {
    props: {
        action: null
    },
    methods: {
        handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        }
    }
}
</script>