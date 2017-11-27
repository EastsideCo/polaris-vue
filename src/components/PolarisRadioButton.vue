<template>
<polaris-choice
    :label="label"
    :label-hidden="labelHidden"
    :id="realId"
    :help-text="helpText">
    <template v-if="$slots.helpText" slot="helpText">
        <slot name="helpText"></slot>
    </template>
    
    <div class="Polaris-RadioButton">
        <input :id="realId"
               :name="name"
               :value="value"
               type="radio"
               :checked="checked"
               :disabled="disabled"
               class="Polaris-RadioButton__Input"
               @change="onChange"
               @focus="onFocus"
               @blur="onBlur"
               :aria-describedby="helpText ? id+'HelpText' : ''">
               
        <div class="Polaris-RadioButton__Backdrop"></div>
        <div class="Polaris-RadioButton__Icon"></div>
    </div>
</polaris-choice>
</template>

<script>
import PolarisChoice from './PolarisChoice.vue';

export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    components: {
        PolarisChoice,
    },
    props: {
        label: String,
        labelHidden: Boolean,
        helpText: String,
        checked: Boolean,
        id: String,
        name: String,
        value: String,
        disabled: Boolean
    },
    computed: {
        realId() {
            return this.id || 'PolarisRadioButton'+this._uid;
        }
    },
    methods: {
        onChange(e) {
            var target = e.target || e.srcElement;
            this.$emit('change', target.checked);
        },
        onFocus() {
            this.$emit('focus');
        },
        onBlur() {
            this.$emit('blur');
        }
    }
}
</script>