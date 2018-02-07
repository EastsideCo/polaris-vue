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
        :disabled="isDisabled"
        :target="external ? '_blank' : ''"
        :role="loading ? 'alert' : null"
        :aria-busy="loading ? true : null">
    <span v-if="loading" class="Polaris-Button__Spinner">
        <polaris-spinner size="small" :color="spinnerColor" accessibility-label="Loading"/>
    </span>
    <span v-if="icon" class="Polaris-Button__Icon">
        <polaris-icon :source="realIcon"></polaris-icon>
    </span>
    <span v-if="$slots.default" class="Polaris-Button__Content">
        <slot></slot>
    </span>
    <span v-if="disclosure" class="Polaris-Button__Icon">
        <polaris-icon :source="disclosureIcon"></polaris-icon>
    </span>
</dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue';
import PolarisIcon from './PolarisIcon.vue';
import PolarisSpinner from './PolarisSpinner.vue';
import ComponentHelpers from '../ComponentHelpers.js';

export default {
    components: {
        DynamicTag,
        PolarisIcon,
        PolarisSpinner,
    },
    data: () => {
        return {
        };
    },
    props: {
        url: String,
        primary: Boolean,
        outline: Boolean,
        destructive: Boolean,
        disabled: Boolean,
        loading: Boolean,
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
        disclosureIcon() {
            return this.loading ? 'placeholder' : 'caretDown';
        },
        isDisabled() {
            return this.disabled || this.loading;
        },
        realIcon() {
            return this.loading ? 'placeholder' : this.icon;
        },
        spinnerColor() {
            return (this.primary || this.destructive) ? 'white' : 'inkLightest';
        },
        classes() {
            var r = ComponentHelpers.makeComponentClass('Polaris-Button', [
                'primary',
                'outline',
                'destructive',
                'fullWidth',
                'plain',
                'size',
                'iconOnly',
            ], this);
            if (this.isDisabled) {
                r['Polaris-Button--disabled'] = true;
            }
            return r;
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
