<template>
<optional-tag
    tag="li"
    :active="hasMultipleSections">
    <div :class="classes">
        <p v-if="section.title" class="Polaris-ActionList__Title">
            {{ section.title }}
        </p>
        <ul class="Polaris-ActionList__Actions">
            <polaris-action-list-item
                v-for="item in section.items"
                :content="item.content"
                :action="wrapAction(item)"/>
        </ul>
    </div>
</optional-tag>
</template>


<script>
import OptionalTag from './OptionalTag.vue';
import PolarisActionListItem from './PolarisActionListItem.vue';

export default {
    components: {
        OptionalTag,
        PolarisActionListItem,
    },
    props: {
        section: {
            type: Object,
            default() {
                return {};
            }
        },
        hasMultipleSections: Boolean,
    },
    computed: {
        classes() {
            return {
                'Polaris-ActionList__Section': 1,
                'Polaris-ActionList__Section--withoutTitle': !this.section.title,
            };
        },
    },
    methods: {
        wrapAction(action) {
            var _old = action.onAction;
            var newAction = Object.assign({}, action);
            if (_old) {
                newAction.onAction = () => {
                    _old();
                    this.$emit('action-any-item', action);
                };
            }
            return newAction;
        },
        handleAction(action) {
            var res = true;
            if (action.onAction) {
                res = action.onAction();
            }
            if (res && action.url) {
                window.location.href = action.url;
            }

            this.$emit('action-any-item', action);
        }
    }
};
</script>
