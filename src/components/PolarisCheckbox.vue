<template>
<div>
    <label :class="labelClasses" :for="realId">
        <span class="Polaris-Choice__Control">
            <div :class="checkboxClasses">
                <input type="checkbox" 
                       :id="realId" 
                       :name="name"
                       :value="value"
                       :class="inputClasses"
                       :aria-invald="error == true"
                       :aria-describedBy="helpTextId+' '+errorId"
                       role="checkbox"
                       :aria-checked="indeterminate ? 'mixed' : (checked ? 'true' : null)"
                       :checked="checked"
                       :disabled="disabled"
                       @change="onChange"
                       @focus="onFocus"
                       @blur="onBlur">
                
                <div class="Polaris-Checkbox__Backdrop"></div>
                <div class="Polaris-Checkbox__Icon">
                    <polaris-icon :source="checkIcon"></polaris-icon>
                </div>
            </div>
        </span>
        <span class="Polaris-Choice__Label">
            {{ label }}    
        </span>
    </label>
    <div v-if="helpText || $slots.helpText || (error && (typeof error == 'string'))" class="Polaris-Choice__Descriptions">
        <div v-if="error && (typeof error == 'string')" 
             class="Polaris-Choice__Error" 
             id="errorId">
            <div class="Polaris-Choice__ErrorIcon">
                <polaris-icon :source="checkboxErrorIcon"></polaris-icon>
            </div>
            {{ error }}
        </div>
        <div v-if="helpText || $slots.helpText" class="Polaris-Choice__HelpText" :id="helpTextId">
            <slot name="helpText">{{ helpText }}</slot>
        </div>
    </div>
</div>
</template>


<script>
import PolarisIcon from './PolarisIcon.vue';
import checkIcon from '../resources/checkbox.svg';
import checkboxErrorIcon from '../resources/checkbox-error-icon.svg';

export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    components: {
        PolarisIcon,
    },
    props: {
        label: String,
        labelHidden: Boolean,
        checked: {
            type: [Boolean, String],
            default: false,
            validator(v) {
                console.log({v});
                return (v && typeof v === 'string') ? (v === 'indeterminate') : true;
            }
        },
        helpText: String,
        id: String,
        name: String,
        value: String,
        error: [Boolean, String],
        disabled: Boolean,
    },
    data() {
        return {
            checkboxErrorIcon: checkboxErrorIcon,
        }
    },
    computed: {
        checkIcon() {
            return this.indeterminate ? 'subtract' : 'checkmark';
        },
        indeterminate() {
            return this.checked == 'indeterminate';
        },
        realId() {
            return this.id || 'Checkbox' + this._uid;    
        },
        helpTextId() {
            if (!this.helpText) {
                return null;
            }
            return this.realId + 'HelpText'
        },
        errorId() {
            if (!this.error || typeof this.error != 'string') {
                return null;
            }
            return this.realId + 'Error';
        },
        inputClasses() {
            return {
                'Polaris-Checkbox__Input': true,
                'Polaris-Checkbox__Input--checked': this.checked,
                'Polaris-Checkbox__Input--indeterminate': this.indeterminate,
            };
        },
        labelClasses() {
            return {
                'Polaris-Choice': true,
                'Polaris-Choice--labelHidden': this.labelHidden
            }
        },
        checkboxClasses() {
            return {
                'Polaris-Checkbox': true,
                'Polaris-Checkbox--error': this.error
            };
        }
    },
    methods: {
        onChange(e) {
            var target = e.target || e.srcElement;
            this.$emit('change', target.checked);
        },
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        }
    }
}; 
</script>
