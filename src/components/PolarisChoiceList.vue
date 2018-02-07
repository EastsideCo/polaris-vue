<template>
<fieldset :class="classes">
    <legend v-if="title" class="Polaris-ChoiceList__Title">
        {{ title }}
    </legend>
    <ul class="Polaris-ChoiceList__Choices">
        <li v-for="choice in choices">
            <polaris-checkbox 
                v-if="allowMultiple"
                :name="finalName"
                :value="choice.value"
                :label="choice.label"
                :helpText="choice.helpText"
                :disabled="disabled"
                :checked="choiceIsSelected(choice)"
                @change="handleChange($event, choice)">
            </polaris-checkbox>
            <polaris-radio-button 
                v-if="!allowMultiple"
                :name="finalName"
                :value="choice.value"
                :label="choice.label"
                :helpText="choice.helpText" 
                :disabled="disabled"
                :checked="choiceIsSelected(choice)"
                @change="handleChange($event, choice)">
            </polaris-radio-button>
        </li>
    </ul>
</fieldset>
</template>

<script>
import PolarisCheckbox from './PolarisCheckbox.vue';
import PolarisRadioButton from './PolarisRadioButton.vue';

import ComponentHelpers from '../ComponentHelpers.js';

export default {
    model: {
        prop: 'selected',
        event: 'change'
    },
    components: {
        PolarisCheckbox,
        PolarisRadioButton
    },
    props: {
        title: String,
        titleHidden: Boolean,
        choices: {
            type: Array,
            default() { return []; }
        },
        selected: {
            type: Array,
            default() { return []; }
        },
        name: String,
        allowMultiple: Boolean,
        disabled: Boolean,
    },
    computed: {
        finalName() {
            return this.allowMultiple ? this.name + '[]' : this.name;
        },
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-ChoiceList', [
                'titleHidden',
            ], this);
        }
    },
    methods: {
        choiceIsSelected(choice) {
            if (!this.selected) { return false; }
            return this.selected.indexOf(choice.value) >= 0;
        },
        handleChange(e, choice) {
            var newSelected = [];
            
            
            if (e) {
                if (this.allowMultiple) {
                    newSelected = (this.selected || []).slice();
                    newSelected.push(choice.value);
                } else {
                    newSelected = [choice.value];
                }
            } else {
                newSelected = (this.selected || []).slice().filter((item) => {
                    return item !== choice.value;
                });
            }
            
            this.$emit('change', newSelected);
        }
    }
    
}
</script>
