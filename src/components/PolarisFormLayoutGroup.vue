<template>
<div role="group"
     :class="classes"
     :aria-labelledBy="title ? id+'Title' : null"
     :aria-describedby="helpText ? id+'HelpText' : null">
    <div v-if="title" 
         :id="id+'Title'"
         class="Polaris-FormLayout__Title">
        {{ title }}
    </div>
    <polaris-form-layout-group-item-wrapper>
        <slot></slot>
    </polaris-form-layout-group-item-wrapper>
    <div v-if="helpText || $slots.helpText"
         :id="id+'helpText'"
         class="Polaris-FormLayout__HelpText">
        <slot name="helpText">
            {{ helpText }}
        </slot>
    </div>
</div>
</template>

<script>
import PolarisFormLayoutGroupItemWrapper from './PolarisFormLayoutGroupItemWrapper.vue';

export default {
    polarisName: 'FormLayoutGroup',
    components: {
        PolarisFormLayoutGroupItemWrapper,
    },
    props: {
        children: String,
        condensed: Boolean,
        title: String,
        helpText: String,
    },
    computed: {
        id() {
            return 'PolarisFormLayoutGroup'+this._uid;
        },
        classes() {
            return {
                'Polaris-FormLayout--condensed': this.condensed
            };
        }
    }
}
</script>