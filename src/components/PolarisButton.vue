<template>
<dynamic-tag
        :tag="url ? 'a' : 'button'"
        :on="{
            click: onClick,
            blur: onBlur,
            focus: onFocus
        }"
        :type="submit? 'submit' : 'button'" 
        :aria-label="accessibilityLabel"
        :class="classes"
        :data-polaris-unstyled="url ? 'true' : ''"
        :href="url"
        :disabled="disabled"
        :target="external ? '_blank' : ''">
    <span v-if="$slots.default" class="Polaris-Button__Content">
        <slot></slot>
    </span>
    <span v-if="disclosure" class="Polaris-Button__Icon">
        <polaris-icon :source="disclosureIcon"></polaris-icon>
    </span>
    <span v-if="!disclosure && icon" class="Polaris-Button__Icon">
        <polaris-icon :source="icon"></polaris-icon>
    </span>
</dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue';
import PolarisIcon from './PolarisIcon.vue';
import ComponentHelpers from '../ComponentHelpers.js';
import disclosureIcon from '../resources/disclosure.svg';

export default {
    components: {
        DynamicTag,
        PolarisIcon
    },
    data: () => {
        return {
            disclosureIcon: disclosureIcon
        };
    },
    props: {
        url: String,
        primary: Boolean,
        outline: Boolean,
        destructive: Boolean,
        disabled: Boolean,
        size: {
            type: String,
            default: 'default',
            validator: (v) => {
                return [
                    'default',
                    'slim',
                    'large'
                ].indexOf(v) !== -1;
            }
        },
        fullWidth: Boolean,
        disclosure: Boolean,
        submit: Boolean,
        plain: Boolean,
        external: Boolean,
        icon: String,
        accessibilityLabel: String,
        iconOnly: Boolean,
    },
    computed: {
      classes() {
          return ComponentHelpers.makeComponentClass('Polaris-Button', [
              'primary',
              'outline',
              'destructive',
              'disabled',
              'fullWidth',
              'plain',
              'size',
              'iconOnly',
          ], this);
      }  
    },
    methods: {
        onClick(e) {
            if (this.disabled) {
                return;
            }
            
            if (this.submit) { 
                return true; 
            }
            
            this.$emit('click', e);
        },
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        }
    }
}
</script>