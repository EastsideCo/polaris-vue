<template>
<div :class="classes">
    <div class="Polaris-EmptyState__Section">
        <div class="Polaris-EmptyState__DetailsContainer">
            <div class="Polaris-EmptyState__Details">
                <polaris-text-container>
                    <polaris-display-text size="medium" v-if="heading">
                        {{ heading }}
                    </polaris-display-text>
                    <div v-if="$slots.default" class="Polaris-EmptyState__Content">
                        <slot></slot>
                    </div>
                </polaris-text-container>
                <div v-if="action" class="Polaris-EmptyState__Actions">
                    <polaris-button-group>
                        <polaris-button slot="1" 
                                        size="large" 
                                        primary
                                        :url="action.url"
                                        @click="handleAction(action)"
                                        :accessibility-label="action.accessibilityLabel"
                                        :disabled="action.disabled"
                                        :destructive="action.destructive"
                                        :icon="action.icon">
                            {{ action.content }}
                        </polaris-button>
                        <polaris-button slot="2" 
                                        v-if="secondaryAction" 
                                        plain
                                        :url="secondaryAction.url"
                                        @click="handleAction(secondaryAction)"
                                        :accessibility-label="secondaryAction.accessibilityLabel"
                                        :disabled="secondaryAction.disabled"
                                        :destructive="secondaryAction.destructive"
                                        :icon="secondaryAction.icon">
                            {{ secondaryAction.content }}
                        </polaris-button>
                    </polaris-button-group>
                </div>
            </div>
        </div>
        <div v-if="image" class="Polaris-EmptyState__ImageContainer">
            <img :src="image" 
                 role="presentation" 
                 alt="" 
                 class="Polaris-EmptyState__Image"
                 :srcset="largeImage ? image+' 568w,'+largeImage+' 1136w' : ''"
                 sizes="largeImage ? (max-width: 568px) 60vw : ''">
        </div>
    </div>
</div>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    components: {
        
    },
    props: {
        heading: String,
        image: String,
        largeImage: String,
        imageContained: Boolean,
        action: Object,
        secondaryAction: Object
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-EmptyState', [
                'imageContained'
            ], this);
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