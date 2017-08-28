<template>
<div :class="classes">
    <label 
        :id="id+'Label'"
        :for="id"
        class="Polaris-Label__Text">
        <slot v-if="!$slots.children">{{ children }}</slot>
        <slot name="children"></slot>
    </label>
    <polaris-button 
        v-if="action"
        @click="handleAction(action)" 
        :primary="!connected" 
        :url="action.url"
        :destructive="action.destructive"
        :disabled="action.disabled"
        :icon="action.icon"
        :accessibility-label="action.accessibilityLabel">
        {{ action.content }}
    </polaris-button>
</div>
</template>


<script>
export default {
    props: {
        children: String,
        id: String,
        action: Object,
        hidden: Boolean
    },
    computed: {
        classes() {
            return {
                'Polaris-Label': true,
                'Polaris-Label--hidden': this.hidden
            };
        }
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