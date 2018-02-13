<template>
<dynamic-template>
    <template v-if="url" slot="active">
        <polaris-unstyled-link
            class="Polaris-Page__Action"
            :external="external"
            :url="url"
            @mouse-up="handleMouseUp"
            :aria-label="accessibilityLabel">
            <template v-if="icon || disclosure">
                <span class="Polaris-Page__ActionContent">
                    <span v-if="icon" class="Polaris-Page__ActionIcon">
                        <polaris-icon :source="icon"/>
                    </span>
                    <span>
                        <slot v-if="icon || disclosure"></slot>
                    </span>
                    <span v-if="disclosure" class="Polaris-Page__ActionIcon">
                        <polaris-icon source="caretDown"/>
                    </span>
                </span>
            </template>
            <template v-if="!icon && !disclosure">
                <slot v-if="!icon && !disclosure"></slot>
            </template>
        </polaris-unstyled-link>            
    </template>
    <template v-if="!url" slot="active">
        <button
            :class="classes"
            @click="onAction"
            @mouse-up="handleMouseUp"
            :aria-label="accessibilityLabel"
            :disabled="disabled"
            type="button">
            <template v-if="icon || disclosure">
                <span class="Polaris-Page__ActionContent">
                    <span v-if="icon" class="Polaris-Page__ActionIcon">
                        <polaris-icon :source="icon"/>
                    </span>
                    <span>
                        <slot v-if="icon || disclosure"></slot>
                    </span>
                    <span v-if="disclosure" class="Polaris-Page__ActionIcon">
                        <polaris-icon source="caretDown"/>
                    </span>
                </span>
            </template>
            <template v-if="!icon && !disclosure">
                <slot v-if="!icon && !disclosure"></slot>
            </template>
        </button>
    </template>
</dynamic-template>
</template>


<script>
import DynamicTemplate from './DynamicTemplate.vue';
import PolarisIcon from './PolarisIcon.vue';
import PolarisButton from './PolarisButton.vue';
import PolarisUnstyledLink from './PolarisUnstyledLink.vue';

export default {
    components: {
        DynamicTemplate,
        PolarisIcon,
        PolarisButton,
        PolarisUnstyledLink,
    },
    props: {
        icon: String,
        url: String,
        external: Boolean,
        disclosure: Boolean,
        accessibilityLabel: String,
        disabled: Boolean,
    },
    computed: {
        classes() {
            var r = {
                'Polaris-Page__Action': 1,
                'Polaris-Page__Action--disabled': this.disabled,
                'Polaris-Page__Action--iconOnly': this.icon && this.emptyChildren
            };
            return r;
        },
        emptyChildren() {
            return !!this.$slots.default;
        }
    },
    methods: {
        handleMouseUp() {
            console.log('todo');
        },
        onAction() {
            this.$emit('click');
            this.$emit('action');
        }
    },
}
</script>
