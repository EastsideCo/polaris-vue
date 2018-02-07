<template>
<polaris-labelled
    :label="label"
    :id="realId"
    :error="error"
    :action="labelAction"
    :label-hidden="labelHidden"
    :help-text="helpText">
    <template v-if="$slots.helpText" slot="helpText">
        <slot name="helpText"></slot>
    </template>
    <polaris-connected>
        <template slot="left">
            <slot name="connectedLeft">{{ connectedLeft }}</slot>
        </template>
        <template slot="right">
            <slot name="connectedRight">{{ connectedRight }}</slot>
        </template>
        <div 
            :class="classes"
            @focus="onFocus"
            @blur="onBlur"
            @click="onClick">
            <div v-if="prefix"
                 class="Polaris-TextField__Prefix"
                 :id="realId+'Prefix'">
                {{ prefix}}
            </div>
            
            <dynamic-tag 
                :tag="multiline ? 'textarea' : 'input'"
                :name="name"
                :id="realId"
                :type="type"
                :disabled="disabled"
                :readonly="readOnly"
                :autofocus="autoFocus"
                :value="value"
                :placeholder="placeholder"
                :on="{ 
                    change: handleChange
                }"
                :style="{ height: (multiline && height) ? height+'px' : null }"
                :autocomplete="autoComplete"
                class="Polaris-TextField__Input"
                ref="input"
                :aria-describedby="describedBy"
                :aria-labelledby="labelledBy"
                :aria-invalid="Boolean(error)">
            </dynamic-tag>
            
            <div v-if="suffix"
                 class="Polaris-TextField__Suffix"
                 :id="realId+'Suffix'">
                {{ suffix }}
            </div>
            
            <polaris-text-field-spinner
                v-if="type === 'number' && !disabled"
                @change="handleNumberChange">
            </polaris-text-field-spinner>
            
            <div class="Polaris-TextField__Backdrop"></div>
            
            <polaris-text-field-resizer
                v-if="multiline"
                :contents="value || placeholder"
                :current-height="height"
                :minimum-lines="(typeof multiline === 'number') ? multiline : 1"
                @heightchange="handleExpandingResize">
            </polaris-text-field-resizer>
        </div>
    </polaris-connected>
</polaris-labelled>
</template>


<script>
import PolarisTextFieldResizer from './PolarisTextFieldResizer.vue';
import PolarisTextFieldSpinner from './PolarisTextFieldSpinner.vue';
import PolarisLabelled from './PolarisLabelled.vue';
import PolarisConnected from './PolarisConnected.vue';
import DynamicTag from './DynamicTag.vue';

import ComponentHelpers from '../ComponentHelpers.js';

export default {
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
        DynamicTag,
        PolarisTextFieldResizer,
        PolarisTextFieldSpinner,
        PolarisLabelled,
        PolarisConnected,
    },
    props: {
        prefix: String,
        suffix: String,
        placeholder: String,
        value: [String, Number],
        helpText: String,
        label: String,
        labelAction: Object,
        labelHidden: Boolean,
        disabled: Boolean,
        readOnly: Boolean,
        autoFocus: Boolean,
        multiline: [Boolean, Number],
        error: [Boolean, String],
        connectedRight: String,
        connectedLeft: String,
        type: String,
        name: String,
        id: String,
        step: String,
        autoComplete: Boolean,
        max: Number,
        maxLength: Number,
        min: Number,
        minLength: Number,
        pattern: String,
        spellCheck: Boolean,
        focused: Boolean,
    },
    data() {
        return {
            height: null,
            focus: false,
        };
    },
    watch: {
        focused() {
            if (this.focused && !this.focus) {
                this.$refs.input.focus();
            } else if (!this.focused && this.focus) {
                this.$refs.input.blur();
            }
        }
    },
    computed: {
        realId() {
            return this.id || 'PolarisTextField'+this._uid;
        },
        describedBy() {
            var r = [];
            if (this.error && typeof this.error === 'string') {
                r.push(this.realId+'Error');
            }
            if (this.helpText) {
                r.push(this.realId+'HelpText');
            }
            return r.join(' ');
        },
        labelledBy() {
            var r = [];
            if (this.prefix) {
                r.push(this.realId+'Prefix');
            }
            if (this.suffix) {
                r.push(this.realId+'Suffix');
            }
            return r.join(' ');
        },
        classes() {
            var r = ComponentHelpers.makeComponentClass('Polaris-TextField', [
                'disabled',
                'readOnly',
                'multiline',
                'focus',
            ], this);
            
            if (this.error) {
                r['Polaris-TextField--error'] = true;
            }
            
            if (this.value) {
                r['Polaris-TextField--hasValue'] = true;
            }
            
            return r;
        }
    },
    methods: {
        onFocus() {
            this.focus = true;
            this.$emit('focus');
        },
        onBlur() {
            this.focus = false;
            this.$emit('blur');
        },
        onClick() {
            this.$refs.input.focus();
        },
        handleExpandingResize(e) {
            this.height = e;
        },
        handleChange(e) {
            console.log('newValue', e);
            var target = e.target || e.srcElement;
            this.$emit('change', target.value);
        },
        handleInputFocus() {
            this.$refs.input.focus();
        },
        handleNumberChange(steps) {
            const numericValue = this.value ? parseFloat(this.value) : 0;
            if (isNaN(numericValue)) { return; }
            
            var min = this.min || -Infinity;
            var max = this.max || +Infinity;
            var step = this.step || 1;
            
            const newValue = Math.min(max, Math.max(min, numericValue + (steps * step)));
            console.log('newValue', newValue);
            console.log('numericValue', numericValue);
            this.$emit('change', newValue);
        }
    }
    
};
</script>
