<template>
<div :class="classes">
    <div v-if="label" class="Polaris-Labelled__LabelWrapper">
        <polaris-label :id="id" :hidden="false" :action="action">
            {{ label }}
        </polaris-label>
    </div>
    
    <slot name="children"></slot>
    <slot v-if="!$slots.children">{{ children }}</slot>
    
    <div v-if="error && typeof error == 'string'"
         :id="id+'Error'"
         class="Polaris-Labelled__Error">
        <div class="Polaris-Labelled__ErrorIcon">
            <polaris-icon :source="alertIcon">
            </polaris-icon>
        </div>
        {{ error }}
    </div>
    
    <div v-if="helpText || $slots.helpText"
         :id="id+'HelpText'"
         class="Polaris-Labelled__HelpText">
        <slot name="helpText">{{ helpText }}</slot>
    </div>
</div>
</template>


<script>
import PolarisLabel from './PolarisLabel.vue';
import PolarisIcon from './PolarisIcon.vue';

import alertIcon from '../resources/alert-icon.svg';

export default {
    components: {
        PolarisIcon,
        PolarisLabel,
    },
    props: {
        id: String,
        label: String,
        error: [Boolean, String],
        action: Object,
        helpText: String,
        children: String,
        labelHidden: Boolean
    },
    data() {
        return {
            alertIcon: alertIcon
        };
    },
    computed: {
        classes() {
            var r = {
                'Polaris-Labelled': true,
                'Polaris-Labelled--hidden': this.labelHidden
            };
            return r;
        }
    }
};
</script>