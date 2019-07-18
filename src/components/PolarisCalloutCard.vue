<template>
    <polaris-card>
        <div class="Polaris-CalloutCard__Container">

            <div v-if="hasOnDismissHandler" class="Polaris-CalloutCard__Dismiss">
                <polaris-button
                    plain
                    icon-only
                    aria-label="Dismiss card"
                    :icon="dismissIcon"
                    @click="onDismiss">
                </polaris-button>
            </div>

            <polaris-card-section>
                <div class="Polaris-CalloutCard">
                    <div class="Polaris-CalloutCard__Content">
                        <div v-if="title" class="Polaris-CalloutCard__Title">
                            <polaris-heading tag="h2">
                                {{ title }}
                            </polaris-heading>
                        </div>
                        <div v-if="$slots.default || children" class="Polaris-TextContainer">
                            <slot>
                                <p>{{ children }}</p>
                            </slot>
                        </div>
                        <div v-if="primaryAction" class="Polaris-CalloutCard__Buttons">
                            <polaris-button-group>
                                <polaris-button v-if="primaryAction"
                                                slot="1"
                                                :url="primaryAction.url"
                                                @click="handleAction(primaryAction)"
                                                :accessibility-label="primaryAction.accessibilityLabel"
                                                :disabled="primaryAction.disabled"
                                                :destructive="primaryAction.destructive"
                                                :icon="primaryAction.icon">
                                    {{ primaryAction.content }}
                                </polaris-button>
                                <polaris-button v-if="secondaryAction"
                                                slot="2"
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
                    <img
                        v-if="illustration"
                        :src="illustration"
                        :class="{
                            'Polaris-CalloutCard__Image': true,
                            'Polaris-CalloutCard__DismissImage': hasOnDismissHandler
                        }"
                        alt="">
                </div>
            </polaris-card-section>
        </div>
    </polaris-card>
</template>


<script>
import PolarisCard from './PolarisCard.vue';
import PolarisButton from './PolarisButton.vue';
import PolarisButtonGroup from './PolarisButtonGroup.vue';
import PolarisHeading from './PolarisHeading.vue';
import dismissIcon from '../resources/dismiss-icon.svg';

export default {
    components: {
        PolarisCard,
        PolarisButton,
        PolarisHeading,
        PolarisButtonGroup,
    },
    props: {
        title: String,
        illustration: String,
        primaryAction: Object,
        secondaryAction: Object,
        children: String
    },
    data() {
        return {
            dismissIcon: dismissIcon
        };
    },
    computed: {
        hasOnDismissHandler() {
            return this._events['dismiss'] && this._events['dismiss'].length > 0;
        }
    },
    methods: {
        handleAction(action) {
            if (action.onAction) {
                action.onAction();
            }
        },
        onDismiss() {
            this.$emit('dismiss');
        }
    }
}
</script>
